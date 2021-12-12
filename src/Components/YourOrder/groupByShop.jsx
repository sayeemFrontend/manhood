import React, { useContext } from "react";
import { CartContext } from "../Context/cartContext/cartProvider";

const GroupByShop = ({ shopID, cartItems }) => {

  const updateProperty = useContext(CartContext).updateQuantity

  const items = cartItems.filter(it => (
    it.shopID === shopID
  ))

  // const total = _.sumBy(items, function (o) { return o.price; });


  const del = useContext(CartContext).deleteCart;
  // const deleteCartItem = (item) => {
  //   const index = cartItems.indexOf(item);
  //   del(index);
  // };
  // console.log(del);

  return (
    <tbody>
      {items.map((it) => (
        <tr>
          <td>
            <img src={`/${it.image}`} alt="" />
          </td>
          <td className="custom-1row-2col">
            <p className="order-title">{it.name}</p>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item borderless">${it.discountedPrce}</li>
              <li className="list-group-item borderless">
                <img src="/Image/orderPlace/cross.png" alt="" />
              </li>
              <li className="list-group-item borderless">{it.quantity}</li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-border">
              <li onClick={() => updateProperty(it, --it.quantity)} className="list-group-item borderless-2nd">
                <img src="/Image/orderPlace/minus.png" alt="" />
              </li>
              <li className="list-group-item borderless-2nd">{it.quantity}</li>
              <li onClick={() => updateProperty(it, ++it.quantity)} className="list-group-item borderless-2nd">
                <img src="/Image/orderPlace/plus.png" alt="" />
              </li>
            </ul>
          </td>

          <td className="table-3rd-col">
            <p className="order-amount">${it.discountedPrce * it.quantity}</p>
            <button
              onClick={() => del(cartItems.indexOf(it))}
              className="customButton order-remove"
            >
              Remove
                </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default GroupByShop;
