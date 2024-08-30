import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        background: #363636;
        box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding: 30px;
        height: 520px;
        width: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }
`
export const Label = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 109%;
    color: #FFFFFF;
    margin-bottom: 5px;
`
export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 5px;

`


export const ButtonStled = styled.button`
    width: 100%;
    height: 40px;
    background: #9758A6;
    border-radius: 5px;
    border: none;
    margin-top: 40px;
    color: #fff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 109%;

`

export const LabelUpload = styled.label`
   cursor: pointer;
   width: 100%;
   height: 40px;
   display: flex;
   align-items: center;
   border: 1px dashed #fff;
   border-radius: 5px;
   color: #fff;
   padding: 10px;


   input{
    display: none;

   }
`

export const ErrorMessage = styled.div`
  color: #ff1111;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const ContainerInput = styled.div`
margin-top: 20px;
    display: flex;
    align-items: baseline;
    gap: 10px;

    input{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
`;