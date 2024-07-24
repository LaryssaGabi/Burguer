/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const Container = styled.div`
    background: #1F1F1F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
`;

export const SectionRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const PageLinks = styled(({ isActive, ...props }) => <a {...props} />)`
    display: flex;
    align-items: center;
    color: ${({ isActive }) => (isActive ? '#9758A6' : '#FFFFFF')};
    text-decoration: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
       color: #9758A6;
    }
`;

export const LogDev = styled.img`
    width: 3.2vw;
    margin-right: 70px;
`;

export const SectionLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
    margin-right: 25px;
`;

export const Logo = styled.img`
    width: 1.3vw;
    margin-right: 10px;
`;

export const User = styled.img`
    width: 1.3vw;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #FFFFFF;

    p {
        margin: 0;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 1.5;
        color: #fff;
    }

    span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 1.5;
        color: #9758A6;
    }

    a {
        position: relative;
        color: #ff300b; 
        font-size: 12px;
        text-decoration: none;
        left: 20px;
    }

    a:hover {
        color: #7f2302;  
    }
`;

export const UserContainer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px; 
`;

export const Divider = styled.div`
    border-left: 1px solid #625E5E;
    height: 20px;
    margin: 0 10px;
`;
