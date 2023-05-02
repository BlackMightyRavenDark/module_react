import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import image from "../../assets/header_cart.svg";

import styles from "./mainpageheader.module.css";

function MainPageHeader() {
    const buyedIds = useSelector(state => state.products.buyedIds);
    const totalPrice = useSelector(state => state.products.totalPrice);

    return (
        <header className={styles["header"]}>
            <span className={styles["header__our-prod"]}>
                НАША ПРОДУКЦИЯ
            </span>

            <Link to="/module_react/cart">
                <span className={styles["header__cart-wrapper"]}>
                    <div className={styles["cart__text-wrapper"]}>
                        <p>
                            {buyedIds.length.toString()} товара
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

export default MainPageHeader;
