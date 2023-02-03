import { generateComments } from "../data/dataGen.js";

const randomInt = Math.floor(Math.random() * 25) + 5;
const arrayData = generateComments(randomInt);

// data.forEach((el) => {
//   // Handle the root element
//   if (el.parentId === 0) {
//     root = el;
//     return;
//   }
//   // Use our mapping to locate the parent element in our data array
//   const parentEl = data[idMapping[el.parentId]];
//   // Add our current el to its parent's `children` array
//   parentEl.children = [...(parentEl.children || []), el];
// });

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

export const loading = () => ({
  rootNode: commentTree,
});
