import React from "react";

import imageLine from "./../../../assets/line.svg";

import styles from "./shoppingcartfooter.module.css";

function ShoppingCartFooter() {
    return (
        <div className={styles["footer"]}>
            <img src={imageLine} alt="" />

            <div className={styles["footer__content-wrapper"]}>
                <div className={styles["footer__text-wrapper"]}>
                    <p>
                        ЗАКАЗ НА СУММУ:
                    </p>

                    <p>
                        6220 ₽
                    </p>
                </div>

                <button>
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

export default ShoppingCartFooter;
