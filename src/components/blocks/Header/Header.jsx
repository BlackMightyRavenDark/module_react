import React from "react";
import { Link } from "react-router-dom";

import image from '../../../assets/header_cart.svg';

import productList from "../../../products";

import styles from "./header.module.css";

function Header() {
    function getBuyedIds() {
        const shoppingCartString = localStorage.getItem("shoppingCart");
        if (shoppingCartString === null || shoppingCartString === undefined || shoppingCartString === "") {
            return 0;
        }
        const array = shoppingCartString.split(",");
        return array ? array : null;
    }

    function getPrice(cartArray) {
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

    const buyedIds = getBuyedIds();
    const totalPrice = buyedIds ? getPrice(buyedIds) : 0;

    return (
        <header className={styles["header"]}>
            <span className={styles["header__our-prod"]}>
                НАША ПРОДУКЦИЯ
            </span>

            <Link to="/cart">
                <span className={styles["header__cart-wrapper"]}>
                    <div className={styles["cart__text-wrapper"]}>
                        <p>
                            {buyedIds ? buyedIds.length.toString() : "0"} товара
                        </p>

                        <p>
                            на сумму {totalPrice} ₽
                        </p>
                    </div>

                    <img src={image} alt="" className="img"/>
                </span>
            </Link>
        </header>
    )
}

export default Header;
