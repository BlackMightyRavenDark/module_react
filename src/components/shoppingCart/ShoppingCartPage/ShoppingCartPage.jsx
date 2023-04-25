import React, { useEffect, useState } from "react";

import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartFooter from '../ShoppingCartFooter/ShoppingCartFooter';
import CardCart from "../CardCart/CardCart";

import productList from "../../../products";

import styles from "./shoppingcartpage.module.css"

function ShoppingCartPage() {
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
        console.log(id, idList);
        if (id >= 0) {
            idList.splice(id, 1);
        }
        setBuyedIds(idList);
        localStorage.setItem("shoppingCart", idList.join(","));
    }

    function getTotalPrice() {
        if (!buyedIds || buyedIds.length === 0) {
            return 0;
        }

        return productList.reduce((price, item) => {
            return (buyedIds.indexOf(item.id.toString()) >= 0) ? price += item.cost : price;
        }, 0);
    }

    return (
        <>
            <ShoppingCartHeader />

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

            <ShoppingCartFooter totalPrice={getTotalPrice()} />
        </>
    )
}

export default ShoppingCartPage;
