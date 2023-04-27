import React from "react";
import { Link } from "react-router-dom";

import image from "../../assets/header_cart.svg";

import productList from "../../products";

import styles from "./mainpageheader.module.css";

function Header({cartItems}) {
    function getTotalPrice(cartArray) {
        if (!cartArray || cartArray.length === 0) {
            return 0;
        }

        return cartArray.reduce((price, elementId) => {
            for (let i = 0; i < productList.length; ++i) {
                const idString = productList[i]["id"].toString();
                if (idString === elementId) {
                    return price += productList[i]["cost"];
                }
            }

            return price;
        }, 0);
    }

    return (
        <header className={styles["header"]}>
            <span className={styles["header__our-prod"]}>
                НАША ПРОДУКЦИЯ
            </span>

            <Link to="/module_react/cart">
                <span className={styles["header__cart-wrapper"]}>
                    <div className={styles["cart__text-wrapper"]}>
                        <p>
                            {cartItems.length.toString()} товара
                        </p>

                        <p>
                            на сумму {getTotalPrice(cartItems)} ₽
                        </p>
                    </div>

                    <img src={image} alt="" className="img"/>
                </span>
            </Link>
        </header>
    )
}

export default Header;
