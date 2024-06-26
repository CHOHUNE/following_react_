import React from 'react';
import useCustomLogin from "../../hooks/useCustomLogin";
import useCustomCart from "../../hooks/useCustomCart";
import CartItemComponent from "../cart/CartItemComponent";
import {useRecoilValue} from "recoil";
import {cartTotalState} from "../../atoms/cartState";

function CartComponent(props) {

    const {isLogin, loginState} = useCustomLogin()

    const {cartItems, changeCart} = useCustomCart();


    const totalValue = useRecoilValue(cartTotalState)


    return (
        <div className={"w-full"}>

            {isLogin ?
                <div className={"flex flex-col"}>
                    <div className={"text-2xl w-4/5 font-extrabold"}>
                        {loginState.nickname} 's Cart
                    </div>
                    <div
                        className={"bg-orange-600 w-1/5 text-center text-white font-bold  rounded-full m-1"}>
                        {cartItems.length}
                    </div>
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <CartItemComponent {...item} key={item.pno} changeCart={changeCart}
                                                       email={loginState.email}/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                : <div></div>}
        </div>
    );
}

export default CartComponent;