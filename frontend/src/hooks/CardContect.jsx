import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CardContext = createContext({});

export const CardProvider = ({ children }) => {
    const [cardProducts, setCardProducts] = useState([])

    const putProductInCard = async product => {
        const cardIndex = cardProducts.findIndex(prd => prd.id == product.id)

        let newCardProducts = []

        if (cardIndex >= 0) {
            newCardProducts = cardProducts

            newCardProducts[cardIndex].quantity += 1
            setCardProducts(newCardProducts)

        } else {
            product.quantity = 1
            newCardProducts = [...cardProducts, product]
            setCardProducts(newCardProducts)
        }

        await localStorage.setItem('codeburger:cardInfo', JSON.stringify(newCardProducts))
    }


    useEffect(() => {
        const loadUserData = async () => {
            const clienteCardData = await localStorage.getItem('codeburger:cardInfo')

            if (clienteCardData) {
                setCardProducts(JSON.parse(clienteCardData))
            }
        }

        loadUserData()
    }, [])

    return (
        <CardContext.Provider value={{ putProductInCard, cardProducts }}>
            {children}
        </CardContext.Provider>
    );
};
export const useCard = () => {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error('useCard must be used within a CardProvider');
    }
    return context;
};

CardProvider.propTypes = {
    children: PropTypes.node
};


