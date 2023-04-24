import React, { useEffect, useState } from "react";

import CardCart from "./../CardCart/CardCart";

import productList from "../../../products.js";

import styles from "./shoppinglist.module.css";

function ShoppingList() {
    const [buyedIds, setBuyedIds] = useState([]);

    useEffect(() => {
        setBuyedIds(getBuyedIdsFromLocalStorage());
    }, []);

    function getBuyedIdsFromLocalStorage() {
        const shoppingCart = localStorage.getItem("shoppingCart");
        const array = shoppingCart.split(",");
        return array ? array : [];
    }

    function onRemoveItemHandler(itemId) {
        const idList = getBuyedIdsFromLocalStorage();
        const itemIdString = itemId.toString();
        const id = idList.indexOf(itemIdString);
        if (id >= 0) {
            idList.splice(id, 1);
        }
        setBuyedIds(idList);
    }

    function getTotalPrice() {
        const a = productList.reduce((price, item) => {
            return price += item.cost;
        }, 0);
        console.log("a", a);
        return a;
    }

    return (
        <div className={styles["card-list"]}>
            {
                productList.map(element => {
                    if (buyedIds.indexOf(element.id.toString()) >= 0) {
                        return (
                            <CardCart
                                key={element.id}
                                id={element.id}
                                imageUrl={element.imageUrl}
                                title={element.title}
                                cost={element.cost}
                                onRemoveHandler={onRemoveItemHandler}
                            />
                        )}
                    }
                )
            }
        </div>
    )
}

export default ShoppingList;
