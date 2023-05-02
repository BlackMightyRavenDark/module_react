import React from "react";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../../store/reducers/products";

import imageCross from "./../../../assets/crossOrange.svg";

import styles from "./cardcart.module.css";

function CardCart({id, imageUrl, title, cost}) {
    const dispatch = useDispatch();

    function onRemoveHandler() {
        dispatch(removeFromCart({id}));
    }

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

                <img src={imageCross} alt="X" onClick={onRemoveHandler} />
            </div>
        </div>
    )
}

export default CardCart;
