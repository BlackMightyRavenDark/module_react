import React from "react";
import { Link } from "react-router-dom";

import image from '../../../assets/header_cart.svg';

import productList from "../../../products";

import styles from "./header.module.css";

function Header({cartItems}) {
    function getPrice(cartArray) {
        if (!cartArray || cartArray.length === 0) {
            return 0;
        }

        let price = 0;
        cartArray.forEach(element => {
            for (let i = 0; i < productList.length; ++i) {
                const idString = productList[i]["id"].toString();
                if (idString === element) {
                    price += productList[i]["cost"];
                }
            }
        });

        return price;
    }

    return (
        <header className={styles["header"]}>
            <span className={styles["header__our-prod"]}>
                НАША ПРОДУКЦИЯ
            </span>

            <Link to="/cart">
                <span className={styles["header__cart-wrapper"]}>
                    <div className={styles["cart__text-wrapper"]}>
                        <p>
                            {cartItems.length.toString()} товара
                        </p>

                        <p>
                            на сумму {getPrice(cartItems)} ₽
                        </p>
                    </div>

                    <img src={image} alt="" className="img"/>
                </span>
            </Link>
        </header>
    )
}

export default Header;
