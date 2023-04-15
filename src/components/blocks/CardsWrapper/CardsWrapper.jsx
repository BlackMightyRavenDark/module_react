import React from "react";

import styles from './cardswrapper.module.css';

import productList from "../../../products";
import Card from '../Card/Card';

function CardsWrapper() {
    return (
        <div className={styles["card-list"]}>
            {
                productList.map(element => {
                    return (
                        <Card
                            key={element.id}
                            image={element.imageUrl}
                            title={element.title}
                            description={element.description}
                            cost={element.cost}
                            weight={element.weight ? element.weight : element.pieces}
                            pcs={element.pieces}
                        />
                    )
                })};
        </div>
    )
}

export default CardsWrapper;
