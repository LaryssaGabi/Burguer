/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CardContext = createContext({});

export const CardProvider = ({ children }) => {
    const [cardProducts, setCardProducts] = useState([]);

    const updateLocalStorage = async (products) => {
        await localStorage.setItem('codeburger:cardInfo', JSON.stringify(products));
    }

    const putProductInCard = async product => {
        const cardIndex = cardProducts.findIndex(prd => prd.id === product.id);

        let newCardProducts = [];

        if (cardIndex >= 0) {
            newCardProducts = cardProducts.map((prd, index) =>
                index === cardIndex ? { ...prd, quantity: prd.quantity + 1 } : prd
            );
        } else {
            product.quantity = 1;
            newCardProducts = [...cardProducts, product];
        }

        setCardProducts(newCardProducts);

        await updateLocalStorage(newCardProducts);
    };

    const deleteProducts = async productId => {
        const newCardProducts = cardProducts.filter(product => product.id !== productId);
        setCardProducts(newCardProducts);

        await updateLocalStorage(newCardProducts);
    };

    const increaseProducts = async productId => {
        const newCardProducts = cardProducts.map(product =>
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        );
        setCardProducts(newCardProducts);
        await updateLocalStorage(newCardProducts);
    };

    const decreaseProducts = async productId => {
        const product = cardProducts.find(p => p.id === productId);
        if (product) {
            const newQuantity = Math.max(0, product.quantity - 1);
            const newCardProducts = cardProducts.map(p =>
                p.id === productId ? { ...p, quantity: newQuantity } : p
            );
            setCardProducts(newCardProducts);
            await updateLocalStorage(newCardProducts);


            if (newQuantity === 0) {
                await deleteProducts(productId);
            }
        }
    };

    useEffect(() => {
        const loadUserData = async () => {
            const clienteCardData = await localStorage.getItem('codeburger:cardInfo');
            if (clienteCardData) {
                setCardProducts(JSON.parse(clienteCardData));
            }
        };

        loadUserData();
    }, []);

    return (
        <CardContext.Provider value={{ putProductInCard, cardProducts, increaseProducts, decreaseProducts, deleteProducts }}>
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
