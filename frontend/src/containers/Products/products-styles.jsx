import styled from 'styled-components';
import Backgroud from '../../assets/backgroud.svg';

export const Container = styled.div``;

export const ImageCategorias = styled.img`
    width: 100%;
    height: auto;
    background-color: #000;
`;

export const Title = styled.h1`
    font-family: "Road Rage", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 5vw; 
    line-height: 1.1;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    right: 20%;
    top: 10%;
    
    h5 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1vw;
        line-height: 1.1;
        text-align: center;
        color: #FFFFFF;
        width: 287px;      
    }
`;

export const CategoriSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;

    &::before {
        content: '';
        background: url('${Backgroud}');
        opacity: 0.5; 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; 
    }
`;

export const CategoriSeletion = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const CategoryButton = styled.button`
    margin-top: 15px;
    width: 9vw;
    border: none;
    background: none;
    border-bottom: ${props => props.isActiveCategory && ' 2px solid #9758a6'};
    color: ${props => props.isActiveCategory ? '#9758a6' : '#9a9a90'};
    font-size: 15px;
    line-height: 20px;

`;
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 40px;
    justify-content: center;
    margin-top: 20px;
    
`;
