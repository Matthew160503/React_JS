import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const showNothing = () => {
    return (
        <div className="cart_b center">
            <div className="cart_b_left">
                <div className="cart_b_left_box">
                    <div className="carts_container">
                        <p>Выбранных товаров нет!</p>
                    </div>
                    <div className="buttons_container">
                        <button className="buttons_clother">
                            CLEAR SHOPPING CART
                        </button>
                        <button className="buttons_clother">
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>
            </div>
            <div className="cart_b_right">
                <div className="cart_b_right_adress">
                    <h2 className="cart_b_right_adress_title">
                        SHIPPING ADRESS
                    </h2>
                    <div className="cart_b_right_adress_inputs">
                        <input
                            className="cart_b_right_adress_inputs_i"
                            required
                            min="1"
                            type="text"
                            placeholder="Country"
                        />
                        <input
                            className="cart_b_right_adress_inputs_i"
                            required
                            min="1"
                            type="text"
                            placeholder="State"
                        />
                        <input
                            className="cart_b_right_adress_inputs_i"
                            required
                            min="1"
                            type="text"
                            placeholder="Postcode / Zip"
                        />
                    </div>
                    <button className="cart_b_right_adress_button">
                        GET A QUOTE
                    </button>
                </div>
                <div className="cart_b_right_receipt">
                    <div className="cart_b_right_receipt_total">
                        <h2 className="cart_b_right_receipt_total_all">
                            <pre>
                                GRAND TOTAL{" "}
                                <span className="grand-price">{0}$</span>
                            </pre>
                        </h2>
                    </div>
                    <button className="cart_b_right_receipt_total_button t">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

const showOrders = (props) => {
    let summ = 0;
    props.items.forEach(
        (el) => (summ += Number.parseFloat(el.price) * el.quantity)
    );
    return (
        <div className="cart_b center">
            <div className="cart_b_left">
                <div className="cart_b_left_box">
                    <div className="carts_container">
                        {props.items.map((el) => (
                            <CartItem
                                onDelete={props.onDelete}
                                key={el.id}
                                item={el}
                            />
                        ))}
                    </div>
                    <div className="buttons_container">
                        <button className="buttons_clother">
                            CLEAR SHOPPING CART
                        </button>
                        <button className="buttons_clother">
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>
            </div>
            <div className="cart_b_right">
                <div className="cart_b_right_adress">
                    <h2 className="cart_b_right_adress_title">
                        SHIPPING ADRESS
                    </h2>
                    <div className="cart_b_right_adress_inputs">
                        <input
                            className="cart_b_right_adress_inputs_i"
                            required
                            min="1"
                            type="text"
                            placeholder="Country"
                        />
                        <input
                            className="cart_b_right_adress_inputs_i"
                            required
                            min="1"
                            type="text"
                            placeholder="State"
                        />
                        <input
                            className="cart_b_right_adress_inputs_i"
                            required
                            min="1"
                            type="text"
                            placeholder="Postcode / Zip"
                        />
                    </div>
                    <button className="cart_b_right_adress_button">
                        GET A QUOTE
                    </button>
                </div>
                <div className="cart_b_right_receipt">
                    <div className="cart_b_right_receipt_total">
                        <h2 className="cart_b_right_receipt_total_all">
                            <pre>
                                GRAND TOTAL{" "}
                                <span className="grand-price">{summ}$</span>
                            </pre>
                        </h2>
                    </div>
                    <button className="cart_b_right_receipt_total_button t">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

function Cart(props) {
    return (
        <main>
            {props.items.length > 0 ? showOrders(props) : showNothing()}
        </main>
    );
}

export default Cart;
