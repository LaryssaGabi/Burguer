import styled from 'styled-components';
import ReactSelect from 'react-select';


const shouldForwardProp = (prop) => prop !== 'isActiveStatus';

export const Container = styled.div`
    flex-grow: 1;
    padding: 20px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    overflow: hidden;

`;

export const ProductsImg = styled.img`
    width: 100px;
    border-radius: 5px;
`;

export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;

    .css-13cymwt-control{
        cursor: pointer;
    }
`;

export const Menu = styled.div`
    display: flex;
    gap:50px;
    justify-content: center;
    margin: 20px 0;
`;

export const LinkMenu = styled.a.withConfig({ shouldForwardProp })`
    color: #323d5d;
    cursor: pointer;
    font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
    border: ${props => (props.isActiveStatus ? '1px solid #FF8C05' : 'none')};
    border-radius: 30px;
    padding: 8px;
`;
