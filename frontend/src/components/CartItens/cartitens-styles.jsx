import styled from 'styled-components';
import { Plus, Minus } from 'lucide-react';

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    gap: 20px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr; 
        gap: 80px; 
        padding: 45px 100px 0 100px; 
    }
`;

export const ItemsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;
    border-radius: 20px;
    margin: 0 20px; 
    margin-bottom: 20px; 

    @media (min-width: 768px) {
        margin-bottom: 0; 
    }
`;

export const Header = styled.div`
    background-color: #333232;
    color: #FFFFFF;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    font-weight: bold;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    img {
        width: 70px;
        height: 50px;
        object-fit: cover;
    }

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    @media (min-width: 768px) {
        width: 80%;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #8A4FFF; 
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #6e3bb2;
    }
`;

export const Summary = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h2 {
        background-color: #333232;
        color: #FFFFFF;
        padding: 10px;
        border-radius: 20px 20px 0 0;
        margin: -20px -20px 10px -20px; 
    }

    p {
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
    }

    .total {
        margin-top: 80px;
        font-weight: bold;
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        h2, p {
            font-size: 0.9em;
        }

        .total {
            font-size: 1em;
            margin-top: 30px;
        }
    }
`;

export const EmptyMessage = styled.div`
    margin-top: 80px;
    grid-column: 1 / -1; 
    font-family: "Road Rage", sans-serif;
    font-size: 3vw; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 5vw;
    }
`;

export const ButtonBack = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 81%;
    color: #5C2669;
    border: none;
    background: none;
    margin-top: 30px;
    margin-bottom: 45px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const DivContainer = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const StyledPlus = styled(Plus)`
    cursor: pointer;
    color: #5C2669; 
    &:hover {
        color: #8A4B8E; 
    }
`;


export const StyledMinus = styled(Minus)`
    cursor: pointer;
    color: #5C2669; 
    &:hover {
        color: #8A4B8E; 
    }
`;
