import styled from 'styled-components';

//#region Styles
const CountingButton = styled.button`
    background-color: red;
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


function ClickCounterButton({ count, onClick }: {count: number; onClick: () => void}){
    return (
        <CountingButton onClick={onClick}>
            Clicked: {count} times
        </CountingButton>
    )
}


export default ClickCounterButton;