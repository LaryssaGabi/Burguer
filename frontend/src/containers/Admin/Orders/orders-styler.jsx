import styled from 'styled-components'
import ReactSelect from 'react-select'

export const Container = styled.div`
    background-color: #efefef;
    min-height: 100vh;
    padding: 25px;
`
export const ProductsImg = styled.img`
    width: 100px;
    border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
        width: 250px;

        .css-13cymwt-control{
            cursor: pointer;
        }
`

export const Menu = styled.div`
    display: flex;
    gap:50px;
    justify-content: center;
    margin: 20px 0;
`

export const LinkMenu = styled.a`
    color: #323d5d;
    cursor: pointer;
    font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
    border: ${props => (props.isActiveStatus ? '1px solid #FF8C05' : 'none')};
    border-radius: 30px;
    padding: 8px;
` 




