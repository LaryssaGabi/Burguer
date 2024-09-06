import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:53vh;
    width: 50%;
    background-color: #f0f0f0;
    border-radius: 30px;
    box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.66);
    -webkit-box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.66);
    -moz-box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.66);
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 48px;
    text-align: center;
    color: #9758A6;
    margin-bottom: 15px;

`;

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Step = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.active ? 'green' : 'gray')};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const Line = styled.div`
    width: 2px;
    height: 40px;
    background-color: gray;
`;

export const StepLabel = styled.div`
    margin-left: 10px;
    font-size: 16px;
    color: #333;
`;
