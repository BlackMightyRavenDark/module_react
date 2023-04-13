import React, { useState } from "react";

import imageBuy from "../../../assets/buy.svg";
import imageBuyActive from "../../../assets/buyHovered.svg";

function ButtonBuy() {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function onMouseOverHandler() {
        setIsMouseOver(true);
    }

    function onMouseOutHandler() {
        setIsMouseOver(false);
    }

    return (
        <img
            src={isMouseOver ? imageBuyActive : imageBuy}
            alt=""
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}/>
    )
}

export default ButtonBuy;
