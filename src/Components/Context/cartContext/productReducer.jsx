
const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.article.title,
          body: action.article.body,
        },
      ];

    default:
      return state;
  }
};

export default ProductReducer;

// export const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD_ARTICLE":
//         return [
//           ...state,
//           {
//             id: Math.random(), // not really unique but it's just an example
//             title: action.article.title,
//             body: action.article.body
//           }
//         ];
//       default:
//         return state;
//     }
//   };
