import React, { useState } from "react";

import imageBuy from "../../assets/buy.svg";
import imageBuyActive from "../../assets/buyHovered.svg";

function ButtonBuy({onClickHandler, isBuyedCallback}) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function onMouseOverHandler() {
        setIsMouseOver(true);
    }

    function onMouseOutHandler() {
        setIsMouseOver(false);
    }

    return (
        <img
            src={(isMouseOver || isBuyedCallback()) ? imageBuyActive : imageBuy}
            alt="buy"
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
            onClick={onClickHandler}
        />
    )
}

export default ButtonBuy;
