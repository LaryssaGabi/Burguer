import PropTypes from 'prop-types'
import { useState } from 'react'
import formatCurrency from '../../utils/formatCrurrency'
import { ContainerItens, Image, ContainerDiv, TextOverlay } from './cardproducts-styler'
import StarRating from '../Caracteres/stars-styles'
import HeartIcon from '../Caracteres/heart-styles'
import { ShoppingBasket } from '../Caracteres/basket-shop'

export default function CardProducts({ product }) {
    const [liked, setLiked] = useState({});
    const [ratings, setRatings] = useState({});

    const handleLike = (id) => {
        setLiked(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleRate = (id, rating) => {
        setRatings(prev => ({
            ...prev,
            [id]: rating
        }));
    };

    return (
        <ContainerItens key={product.id}>
            <Image src={product.url} alt="foto dos pedidos" />
            <HeartIcon
                liked={liked[product.id]}
                onClick={() => handleLike(product.id)}
            />
            <ContainerDiv>
                <TextOverlay>
                    <h3>{product.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h4>{formatCurrency(product.price)}</h4>
                    <div>
                        <StarRating
                            rating={ratings[product.id] || 0}
                            onRate={(rating) => handleRate(product.id, rating)}
                        />
                    </div>
                </TextOverlay>
            </ContainerDiv>
            <ShoppingBasket />
        </ContainerItens>
    )
}

CardProducts.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string
    }).isRequired
}