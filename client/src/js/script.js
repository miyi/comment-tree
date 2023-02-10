import { data } from "../../../server/data/dataGen.js";

const randomInt = Math.floor(Math.random() * 25) + 5;
const arrayData = data;

export const transformArrayToTree = (arr) => {
  //idMapping outputs the mapping of elements to the position of their parent
  const idMapping = arr.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});
  const root = [];
  arr.forEach((el) => {
    if (el.parentId === 0) {
      root.push(el);
      return;
    }
    const parentEl = arr[idMapping[el.parentId]];
    parentEl.children = [...(parentEl.children || []), el];
  });
  return root;
};

const commentTree = transformArrayToTree(arrayData);

export const loading = () => {
  console.log(commentTree);
  return {
    item: {
      id: 0,
      children: commentTree || [],
    },
    reply: "",
  };
};

let index = 55;

export const lazyUpdateCommentTree = (content, parentId, id = index++) => {
  const replyObj = {
    content,
    parentId,
    id,
  };
  arrayData.push(replyObj);
  const newTree = transformArrayToTree(arrayData);
  return newTree;
};

export const handleReply = ($scope) => {
  const commentObj = {
    content: $scope.reply,
    parentId: $scope.item.id,
    id: index++,
  };
  $scope.reply = "";
  // $scope.item.children || ($scope.children = []);
  // $scope.item.children.unshift(commentObj);
  $scope.item.children
    ? $scope.item.children.unshift(commentObj)
    : ($scope.item.children = [commentObj]);
};
