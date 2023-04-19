import React from "react";

import styles from "./shoppingcartheader.module.css";

function ShoppingCartHeader() {
    return (
        <div className={styles["header-title"]}>
            Корзина с выбранными товарами
        </div>
    )
}

export default ShoppingCartHeader;
