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