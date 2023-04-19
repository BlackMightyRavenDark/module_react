import React from "react";

import CardCart from "./../CardCart/CardCart";

import cartList from "./../../../cart";

import styles from "./shoppinglist.module.css";

function ShoppingList() {
    return (
        <div className={styles["card-list"]}>
            {
                cartList.map(element => {
                    return (
                        <CardCart
                            key={element.id}
                            imageUrl={element.image}
                            title={element.title}
                            cost={element.cost}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShoppingList;
