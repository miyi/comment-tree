// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4,
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4,
//   },
// });

// export const generateComments = (commentNumber) => {
//   const commentArr = [];
//   for (let i = 0; i < commentNumber; i++) {
//     //select parent id
//     let parentId = Math.floor(Math.random() * commentArr.length);
//     let commentObj = {
//       id: i + 1, //i'm making id:0 the empty root node
//       parentId: parentId,
//       content: lorem.generateParagraphs(1),
//     };
//     commentArr.push(commentObj);
//   }
//   return commentArr;
// };

export const data = [
  {
    id: 1,
    parentId: 0,
    content: 'Reprehenderit consequat sint commodo veniam duis commodo velit non do sint proident aliqua cillum. Consequat sit do et consectetur duis pariatur consectetur ea cupidatat irure commodo ad. Excepteur magna consequat id ipsum laboris. Ad consequat ea elit irure esse id. Ad culpa eiusmod sunt cupidatat aliqua aute quis reprehenderit incididunt qui laborum eu cillum nulla veniam.'
  },
  {
    id: 2,
    parentId: 0,
    content: 'Dolor adipisicing anim deserunt labore nulla quis pariatur excepteur adipisicing incididunt nostrud exercitation adipisicing. Incididunt sit voluptate occaecat occaecat. In qui sunt nulla culpa amet. Culpa ex nostrud consequat adipisicing ipsum voluptate ipsum occaecat occaecat sunt. Pariatur nostrud minim irure eiusmod aute ut incididunt laboris exercitation ex officia fugiat aliqua esse. Do laborum irure irure elit cupidatat ullamco quis tempor sunt magna enim mollit nisi. Dolor aliquip deserunt reprehenderit proident eu commodo est minim mollit pariatur Lorem nulla nulla. Ea adipisicing occaecat laboris ipsum duis pariatur adipisicing adipisicing.'
  },
  {
    id: 3,
    parentId: 0,
    content: 'Reprehenderit deserunt sit magna officia laboris sint ea. Et labore irure nulla quis adipisicing sint eiusmod consectetur amet ad proident aliqua. Lorem voluptate irure laboris mollit velit laborum eiusmod sunt labore anim. Fugiat mollit ex voluptate aliqua labore magna consectetur.'
  },
  {
    id: 4,
    parentId: 1,
    content: 'Pariatur deserunt do qui proident. Culpa duis sit cupidatat excepteur sit pariatur exercitation aute. Nisi anim aliqua veniam velit. Id eu anim ex magna sit et in cillum fugiat quis. Excepteur in veniam aute consectetur do ea. Non proident anim ullamco aliquip occaecat aute adipisicing. Voluptate labore pariatur qui.'
  },
  {
    id: 5,
    parentId: 3,
    content: 'Non sunt eiusmod amet elit deserunt excepteur. Sunt eu sit ut officia ea veniam est et cupidatat tempor commodo reprehenderit commodo consequat. Reprehenderit dolor ad proident aliqua eiusmod eiusmod qui nisi irure ad voluptate Lorem eu est. Voluptate excepteur tempor nostrud aliqua est elit. Qui sint excepteur sunt voluptate. Ullamco deserunt commodo eiusmod magna exercitation minim sint qui eu irure ut. Dolor labore occaecat cupidatat deserunt consequat ea enim.'
  },
  {
    id: 6,
    parentId: 2,
    content: 'Tempor consectetur in consectetur occaecat laboris nostrud ullamco reprehenderit. Excepteur in pariatur amet magna consequat irure et anim reprehenderit labore eiusmod irure. Ex nostrud enim ad cupidatat deserunt aliquip do duis eu exercitation ex exercitation. Ex dolor anim adipisicing cillum occaecat id occaecat in ut dolor.'
  },
  {
    id: 7,
    parentId: 1,
    content: 'Laborum ad tempor amet et id eu dolor veniam cillum sit magna pariatur. Lorem sunt cupidatat ut elit quis Lorem consectetur anim voluptate consectetur sint mollit labore id voluptate. Quis enim eu minim sunt. Deserunt adipisicing sit duis ad exercitation mollit et consequat. Mollit commodo sit irure ullamco amet nulla nulla esse non.'
  },
  {
    id: 8,
    parentId: 1,
    content: 'Eu dolor duis proident ad et. Est irure cillum voluptate velit cupidatat Lorem cupidatat. Nostrud minim commodo reprehenderit sit dolore laborum adipisicing nulla ad non veniam non anim. Velit cupidatat qui veniam sit.'
  },
  {
    id: 9,
    parentId: 0,
    content: 'Magna consequat sint ipsum sunt irure cillum esse sit in sint dolor sint laborum non do. Pariatur anim quis consectetur Lorem occaecat id consectetur in. Est excepteur nostrud reprehenderit ad cupidatat minim velit officia deserunt. Fugiat irure sunt sint aute magna culpa non ullamco enim laboris aute qui eu excepteur dolor. Eiusmod laboris in laborum. Cillum enim deserunt ad reprehenderit magna Lorem quis voluptate sit velit quis enim qui occaecat eiusmod. Mollit dolor incididunt quis nulla tempor enim velit ea. Est est elit mollit nisi do anim esse anim eu.'
  },
  {
    id: 10,
    parentId: 0,
    content: 'Laboris deserunt sunt proident quis ea nisi irure labore irure proident culpa. Exercitation eu minim Lorem elit ad nulla. Aliqua in qui in irure sunt nulla. Ea magna sit consectetur tempor dolore velit amet irure aliqua. Ad cillum incididunt do quis nisi exercitation sunt eiusmod do aliqua enim ullamco aliquip. Exercitation culpa laboris cupidatat do consequat nostrud Lorem laboris consequat anim laboris. Aute adipisicing veniam sunt et ea officia ex est anim commodo do minim nulla elit aute.'
  }
]

