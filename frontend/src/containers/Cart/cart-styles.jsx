import styled from 'styled-components';
import Backgroud from '../../assets/backgroud-login.svg'
import BackgroudSection from '../../assets/backgroud.svg'



export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('${BackgroudSection}');
    opacity: 0.5; /* Ajuste a opacidade conforme necessário */
    z-index: -1;
  }
`;

export const LogoCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
    background: url('${Backgroud}');
    background-color: #000;
`
export const ImageCart = styled.img`
    width: 11%;
    height: 100%;
    padding-top: 12px;
`


export const CategoriSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const Title = styled.img`
    margin-top:12px;

`