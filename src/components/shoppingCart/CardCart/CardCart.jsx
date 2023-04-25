import React from "react";

import imageCross from "./../../../assets/crossOrange.svg";

import styles from "./cardcart.module.css";

function CardCart({id, imageUrl, title, cost, onRemoveHandler}) {
    return (
        <div className={styles["card"]}>
            <div className={styles["preview-wrapper"]}>
                <img src={imageUrl} alt="" className={styles["preview-wrapper__image"]}/>

                <p>
                    {title}
                </p>
            </div>

            <div className={styles["cost-wrapper"]}>
                <span>
                    {cost} ₽
                </span>

                <img src={imageCross} alt="X" onClick={() => onRemoveHandler(id)} />
            </div>
        </div>
    )
}

export default CardCart;
