import React, { useState } from "react";

import imageBack from "../../../assets/backWhite.svg";
import imageBackActive from "../../../assets/back.svg";

function ButtonBack() {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function onMouseOverHandler() {
        setIsMouseOver(true);
    }

    function onMouseOutHandler() {
        setIsMouseOver(false);
    }

    return (
        <img
            src={isMouseOver ? imageBackActive : imageBack}
            alt="back"
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
        />
    )
}

export default ButtonBack;
