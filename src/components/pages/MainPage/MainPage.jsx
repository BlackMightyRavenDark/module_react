import React, { useEffect, useState } from "react";

import Header from "../../MainPageHeader/MainPageHeader";
import CardsWrapper from "../../MainPageCardList/MainPageCardList";

function MainPage() {
    const [buyedIds, setBuyedIds] = useState([]);

    function onBuyHandler() {
        const shoppingCartString = localStorage.getItem("shoppingCart");
        if (shoppingCartString === null || shoppingCartString === undefined || shoppingCartString === "") {
            setBuyedIds([]);
            return;
        }

        const items = shoppingCartString.split(",");
        setBuyedIds(items);
    }

    useEffect(() => {
        onBuyHandler();
    }, []);

    return (
        <>
            <Header cartItems={buyedIds} />
            <CardsWrapper onBuyHandler={onBuyHandler} />
        </>
    )
}

export default MainPage;
