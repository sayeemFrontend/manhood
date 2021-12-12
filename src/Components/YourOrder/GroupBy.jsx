import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/cartContext/cartProvider";


export const TotalPrice = (cartItems) => {
  let total = 0
  cartItems.forEach(it => {
    total = total + it.discountedPrce * it.quantity
  })
  return total
}


export const SumFunc = (id) => {

  const cartItems = useContext(CartContext).cart

  const arr = cartItems.filter(it => (
    it.shopID === id
  ))

  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp = temp + arr[i].discountedPrce * arr[i].quantity
  }
  return temp
}


export const GroupBy = (arr, field) => {
  const groupID = unify(arr, field);

  const groupList = [];
  for (let g = 0; g < groupID.length; g++) {
    groupList[g] = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].field === groupID[g]) {
        groupList[g].push(arr[j]);
      }
    }
  }
  return groupList;
};


export const unify = (arr, field) => {
  let fel = field;
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("fiel", arr[i].field);
    const chk = unique.includes(arr[i].id);

    if (chk === false) {
      unique.push(arr[i].field);
    }
  }

  return unique;
};
