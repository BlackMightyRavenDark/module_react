import React from "react";
import { useSelector } from "react-redux";

import ShoppingCartHeader from "../../shoppingCart/ShoppingCartHeader/ShoppingCartHeader";
import ShoppingCartFooter from "../../shoppingCart/ShoppingCartFooter/ShoppingCartFooter";
import CardCart from "../../shoppingCart/CardCart/CardCart"

import productList from "../../../products";

import styles from "./shoppingcartpage.module.css"

function ShoppingCartPage() {
    const buyedIds = useSelector(state => state.products.buyedIds);

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
                                />
                                );
                            }
                            return null;
                        }
                    )
                }
            </div>

            <ShoppingCartFooter />
        </>
    )
}

export default ShoppingCartPage;
