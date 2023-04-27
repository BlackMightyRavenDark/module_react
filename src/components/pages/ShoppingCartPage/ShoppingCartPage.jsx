import React, { useEffect, useState } from "react";

import ShoppingCartHeader from "../../shoppingCart/ShoppingCartHeader/ShoppingCartHeader";
import ShoppingCartFooter from "../../shoppingCart/ShoppingCartFooter/ShoppingCartFooter";
import CardCart from "../../shoppingCart/CardCart/CardCart"

import productList from "../../../products";

import styles from "./shoppingcartpage.module.css"

function ShoppingCartPage() {
    const [buyedIds, setBuyedIds] = useState([]);

    useEffect(() => {
        setBuyedIds(getBuyedIdsFromLocalStorage());
    }, []);

    function getBuyedIdsFromLocalStorage() {
        const shoppingCartString = localStorage.getItem("shoppingCart");
        if (shoppingCartString === null || shoppingCartString === undefined || shoppingCartString === "") {
            return [];
        }

        const array = shoppingCartString.split(",");
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
                {!buyedIds.length && <p>Корзина пуста</p>}
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
                                />);
                            }
                            return null;
                        }
                    )
                }
            </div>

            <ShoppingCartFooter totalPrice={getTotalPrice()} />
        </>
    )
}

export default ShoppingCartPage;
