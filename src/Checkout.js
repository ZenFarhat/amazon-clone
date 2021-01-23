import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Outlet/DT-ILM-Outlet_v2_x1._CB413276679_.jpg'
          alt=''
          className='checkout_ad'
        />

        <div>
          <h3>Hello {!user ? "guest" : user?.email},</h3>
          <h2 className='checkout__title'>This is Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
