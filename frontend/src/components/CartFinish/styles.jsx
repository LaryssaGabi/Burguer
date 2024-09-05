import styled from 'styled-components';

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
`;

export const SectionsWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px;
    width: 120%;   
    
`;

export const AddressSection = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background-color: #FFFFFF;
    border-radius: 20px;

`;

export const PaymentSection = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

export const SummarySection = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;

`;

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333232;
    border-radius: 20px 20px 0 0;
    color: #FFFFFF;
    width: 100%;
    padding: 10px;
    font-weight: bold;
    gap: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AddressBody = styled.div`
    padding: 8px 8px 10px 15px;
    display: flex;
    flex-direction: column;


    p {
        margin: 5px 0;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 233.5%;
        color: #000000;

    }

    a {
        text-decoration: underline;
        cursor: pointer;
        margin-top: 10px;
        display: inline-block;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 233.5%;
        color: #5C2669;
    }

    input[type="text"] {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        margin-top: 5px;
        font-size: 14px;
        box-sizing: border-box;
    }
`;

export const PaymentBody = styled.div`
    padding: 8px 0 10px 15px;
    div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        label {
            margin-left: 10px;
            font-size: 14px;
            color: #333;
        }

        input {
            margin-right: 10px;
        }

        img {
            margin-left: auto;
            width: 50px;
            height: 50px;
        }
    }
`;

export const SummaryBody = styled.div`
    padding: 8px 15px 12px 15px;
    h3 {
        color: white;
        background-color: #5C2669;
        padding: 10px;
        border-radius: 10px 10px 0 0;
    }
    p {
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }
    .total {
        margin-top: 120px;
        font-weight: bold;
        font-size: 1.2em;
    }

`;

export const ButtonBack = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #8A4FFF; 
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-top: 70px;

    &:hover {
        background-color: #6e3bb2;
        font-weight: bold;
        }
    
`;
export const ButtonFinalizado = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #8A4FFF; 
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-top: 12px;

    &:hover {
        background-color: #6e3bb2;
        font-weight: bold;
        }
    
`;
