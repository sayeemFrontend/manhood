import React from "react";

const ShopReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Math.random(),
          name: action.article.title,
          body: action.article.body,
        },
      ];

    default:
      return state;
  }
};

export default ShopReducer;
