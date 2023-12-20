import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartWidget } from "../CartWidget/CartWidget";

export const Cart = () => {
  const { cartItems, totalCartItems, removeItem, totalQuantity } = useContext(CartContext);

  return (
    <>
      <h2 >Tu pedido</h2>
      <div className="card-group">
        {cartItems.map((item) => (
          <div key={item.id} className="card">
            <div className="card-body">
              <h5 className="card-title">Nombre: {item.name}</h5>
              <p className="card-text">Precio por hora: ${item.price}</p>
              <p className="card-text">Cantidad: {item.quantity}</p>
              <p className="card-text">Sub total: ${item.subTotal}</p>
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h5 className="bg-info ">Suma total del pedido: ${totalCartItems}</h5>
    </>
  );
};
