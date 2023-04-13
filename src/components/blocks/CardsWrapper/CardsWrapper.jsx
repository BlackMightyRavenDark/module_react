import React from "react";

import styles from './cardswrapper.module.css';

import Card from '../Card/Card';
import image1 from '../../../assets/card1.png';
import image2 from '../../../assets/card2.png';
import image3 from '../../../assets/card3.png';
import image4 from '../../../assets/card4.png';

function CardsWrapper() {
    return (
        <div className={styles["card-list"]}>
            <Card
                image={image1}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                cost={2700}
                weight={500}
                pcs={false}
            />

            <Card
                image={image2}
                title="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                cost={1600}
                weight={750}
                pcs={false}
            />

            <Card
                image={image3}
                title="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                cost={1820}
                weight={7}
                pcs={true}
            />

            <Card
                image={image4}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                cost={2700}
                weight={500}
                pcs={false}
            />

            <Card
                image={image1}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                cost={2700}
                weight={500}
                pcs={false}
            />

            <Card
                image={image2}
                title="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                cost={1600}
                weight={750}
                pcs={false}
            />

            <Card
                image={image3}
                title="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                cost={1820}
                weight={7}
                pcs={true}
            />

            <Card
                image={image4}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                cost={2700}
                weight={500}
                pcs={false}
            />
        </div>
    )
}

export default CardsWrapper;
