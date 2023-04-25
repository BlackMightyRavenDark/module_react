import React from "react";

import Card from "../Card/Card";

import productList from "../../products";

import styles from './cardswrapper.module.css';

function CardsWrapper({onBuyHandler}) {
    return (
        <div className={styles["card-list"]}>
            {
                productList.map(element => {
                    return (
                        <Card
                            key={element.id}
                            id={element.id}
                            image={element.imageUrl}
                            title={element.title}
                            description={element.description}
                            cost={element.cost}
                            weight={element.weight ? element.weight : element.pieces}
                            pcs={element.pieces}
                            onBuyHandler={onBuyHandler}
                        />
                    )
                })}
        </div>
    )
}

export default CardsWrapper;
