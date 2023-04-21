import React from "react";
import { Link } from "react-router-dom";

import image from '../../../assets/header_cart.svg';

import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles["header"]}>
            <span className={styles["header__our-prod"]}>
                НАША ПРОДУКЦИЯ
            </span>

            <Link to="/cart">
                <span className={styles["header__cart-wrapper"]}>
                    <div className={styles["cart__text-wrapper"]}>
                        <p>
                            3 товара
                        </p>

                        <p>
                            на сумму 3 500 ₽
                        </p>
                    </div>

                    <img src={image} alt="" className="img"/>
                </span>
            </Link>
        </header>
    )
}

export default Header;
