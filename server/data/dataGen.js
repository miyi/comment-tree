import { LoremIpsum } from "lorem-ipsum";

export const seedComments = (number = 0, scored = true) => {
  const commentArr = generateComments(
    number ? number : Math.floor(Math.random() * 100 + 15),
    scored
  );
  let commentTree = transformCommentArrayToTree(commentArr);
  if (scored) rankTreeByScore(commentTree);
  return commentTree;
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const transformCommentArrayToTree = (arr) => {
  //root is an obj
  const root = {
    id: 0,
    parentId: null,
    content: null,
    children: [],
    score: 0,
  };
  //idMapping outputs the mapping of elements to the position of their parent
  const idMapping = arr.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});

  arr.forEach((el) => {
    if (el.parentId === 0) {
      root.children.push(el);
      return;
    }
    const parentEl = arr[idMapping[el.parentId]];
    parentEl.children = [...(parentEl.children || []), el];
  });

  return root;
};

export const generateComments = (commentNumber, scored) => {
  const commentArr = [];
  for (let i = 0; i < commentNumber; i++) {
    //select parent id
    let parentId = Math.floor(Math.random() * commentArr.length);
    let commentObj = {
      id: i + 1, //i'm making id:0 the empty root node
      parentId: parentId,
      content: lorem.generateParagraphs(1),
      score: scored ? Math.floor(Math.random() * 100) : 0,
    };
    commentArr.push(commentObj);
  }
  return commentArr;
};

export const rankTreeByScore = (tree) => {
  if (tree.children) {
    tree.children.sort((a, b) => {
      return b.score - a.score;
    });
    tree.children.forEach((child) => rankTreeByScore(child));
  }
};
