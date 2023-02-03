import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const generateComments = (commentNumber) => {
  const commentArr = [];
  for (let i = 0; i < commentNumber; i++) {
    //select parent id
    let parentId = Math.floor(Math.random() * commentArr.length);
    let commentObj = {
      id: i + 1, //i'm making id:0 the empty root node
      parentId: parentId,
      content: lorem.generateParagraphs(1),
    };
    commentArr.push(commentObj);
  }
  return commentArr;
};

console.l