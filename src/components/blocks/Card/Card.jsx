import React, { useEffect } from "react";
import styles from "./card.module.css"

import ButtonBuy from "../../Elements/ButtonBuy/ButtonBuy.jsx";

function Card({id, image, title, description, cost, weight, pcs}) {
    useEffect(() => {
        console.log("oooo")
    }, []);
    function getBuyedSet() {
        const shoppingCartString = localStorage.getItem("shoppingCart");
        if (shoppingCartString === null || shoppingCartString === undefined || shoppingCartString === "") {
            return new Set();
        }

        const array = shoppingCartString.split(",");
        return array ? new Set(array) : new Set();
    }

    function isBuyed() {
        const set = getBuyedSet();
        return set.has(id.toString());
    }

    function buy() {
        const shoppingCart = getBuyedSet();
        console.log(shoppingCart);
        const idString = id.toString();
        if (!shoppingCart.has(idString)) {
            shoppingCart.add(idString);
        } else {
            shoppingCart.delete(idString);
        }
        localStorage.setItem("shoppingCart", Array.from(shoppingCart));
    }

    return (
        <div className={styles["card"]}>
            <div className={styles["card__content-wrapper"]}>
                <div className={styles["img"]}>
                    <img src={image} alt="" className={styles["img"]}/>
                </div>

                <div className={styles["card__description-wrapper"]}>
                    <p>
                        {title}
                    </p>

                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className={styles["card__cost-wrapper"]}>
                <div className={styles["cost-weight"]}>
                    <span>
                        {cost} P
                    </span>

                    <span>
                        {` / ${weight}`} {pcs ? " шт." : " г."}
                    </span>
                </div>

                <ButtonBuy
                    onClickHandler={buy}
                    isBuyedCallback={() => isBuyed()}
                />
            </div>
        </div>
    )
}

export default Card;
