import React from "react";

import styles from "./shoppingcartfooter.module.css";

function ShoppingCartFooter({totalPrice}) {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer__content-wrapper"]}>
                <div className={styles["footer__text-wrapper"]}>
                    <p>
                        ЗАКАЗ НА СУММУ:
                    </p>

                    <p>
                        {totalPrice} ₽
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
