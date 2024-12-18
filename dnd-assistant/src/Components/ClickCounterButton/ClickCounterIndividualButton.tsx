import { useState } from "react";
import styled from "styled-components";

//#region Styles
const CountingIndividualButton = styled.button`
    background-color: green;
    font-size: 14px;
    padding: 15px 25px;
    margin: 20px;
    border: 20px;
    border-radius: 0.75rem;
    border-color: lightskyblue;
    transition: 0.1s;

    &:hover {
        background-color: rgb(83, 2, 158);
    }
    
`;
//#endregion

function ClickCounterIndividualButton(){
    const [clickCount, setClickCount] = useState(0);

    function buttonClick(){
        setClickCount(clickCount + 2);
    }

    return (
        <>
        <CountingIndividualButton onClick={buttonClick}>DoubledClick: {clickCount}</CountingIndividualButton>
        </>
    )
}

export default ClickCounterIndividualButton;