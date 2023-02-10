

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
