import styled from 'styled-components';
import Backgroud from '../../assets/backgroud.svg'

export const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

   

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

    .rec.rec-arrow {
    background-color: #9758A6;    
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    border: none;
    }

    .rec.rec-arrow:hover {
    border: 2px solid #9758A6;
    background-color: #efefef;
    color: #9758A6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color:#efefef,
    }
`
export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 2vw;
    line-height: 48px;
    text-align: center;
    color: #9758A6;
`

export const ContainerItens = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

`

export const Image = styled.img`
    width: 240px;
    height: 202px;
    border-radius: 10px;

`

export const TextOverlay = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;

    h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
    }

`