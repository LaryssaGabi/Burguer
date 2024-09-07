import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #363636;
    box-shadow: 0px 0px 14px rgba(0,0,0,0.15);
    width: 300px;
    top: 0;
    left: 0;   

    hr {
        margin: 20px 15px;
    }
`;
export const ImageHome = styled.img`
    width: 100%;
    height: 15%;
    margin-top: 50px;
`;

export const ItemContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive'
})`
    height: 50px;
    display: flex;
    align-items: center;
    background: ${(props) => (props.isActive ? '#565656' : 'none')};
    border-radius: 2px;
    cursor: pointer;
    margin: 0 15px;

    .icon {
        color: #fff;
        margin-left:5px;
    }
`;

export const ListLink = styled(Link)`
    padding-left: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 109%;
    color: #FFFFFF;
    text-decoration: none;
`;
