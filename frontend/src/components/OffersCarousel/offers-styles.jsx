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
    color: #61A120;


`

export const ContainerItens = styled.div`

    margin-bottom: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Image = styled.img`
    position: absolute;
    width: 148.34px;
    height: 97.89px;
    left: 55px;
    border-radius: 20px;
    transform: rotate(-5.31deg);
    z-index: 1;
`

export const ContainerDiv = styled.div`
    position: relative;
    width: 273.43px;
    height: 286.72px;
    top: 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.15);
    border-radius: 28.4819px;
`


export const TextOverlay = styled.div`

    h3{
        padding: 80px 0 0 26px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FF8C05;
    }

    p{
        padding: 15px 0 0 26px;
        width: 234px;
        height: 51px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 142.5%;
        color: #656565;
    }

    h4{
    font-family: 'Poppins';
    padding: 40px 0 0 26px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 81%;
    color: #363636;
    }
    
    div{
        padding: 10px 0 0 11px;
    }


`
