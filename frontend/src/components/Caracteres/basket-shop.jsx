/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components';

// Animação opcional, se desejar
const heartBeat = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: scale(1);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: scale(1.1); 
  }
`;

// Estilos para o botão com o SVG embutido
const ShoppingBasketButton = styled.button`
  width: 3vh;
  height: 3vh;
  position: absolute;
  right: 10%;
  top: 85%;
  cursor: pointer;
  border: none;
  background: none;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));

  &:hover {
    background-color: #9758A6;
    width: 3.4vh;
    height: 3.4vh;
    border-radius: 7px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    animation: ${heartBeat} 1s;
  }
`;

const ShoppingBasketIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  color: ${({ hover }) => (hover ? 'white' : 'currentColor')};
  
  ${ShoppingBasketButton}:hover & {
    stroke: white;
  }
`;


export const ShoppingBasket = ({ onClick }) => (
  <ShoppingBasketButton onClick={onClick}>
    <ShoppingBasketIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="lucide lucide-shopping-basket"
    >
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </ShoppingBasketIcon>
  </ShoppingBasketButton>
);

export default ShoppingBasket;
