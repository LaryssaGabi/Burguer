import styled from 'styled-components';
import Shopping from '../../assets/shopping-basket.svg'

export const ShoppingBasket = styled.button`
    background: url('${Shopping}') no-repeat center;
    background-size: 3vh; 
    width: 3vh;
    height: 3vh;
    right: 10%;
    top:85%;
    position: absolute;  
    cursor: pointer;
    border: none;
   

    &:hover {
        background-color: #9758A6; 
        background-position: center;
        background-size: 3.1vh;
        width: 3.4vh;
        height: 3.4vh;
        border-radius: 7px;
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

