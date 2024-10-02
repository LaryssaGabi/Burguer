import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import formatCurrency from '../../utils/formatCrurrency';
import { ContainerItens, Image, ContainerDiv, TextOverlay } from './cardproducts-styler';
import StarRating from '../Caracteres/stars-styles';
import HeartIcon from '../Caracteres/heart-styles';
import { ShoppingBasket } from '../Caracteres/basket-shop';
import { useCard } from '../../hooks/CardContect';
import api from '../../services/api';

export default function CardProducts({ product }) {
    const [liked, setLiked] = useState({});
    const [ratings, setRatings] = useState({});
    const { putProductInCard } = useCard();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await api.get('/favorites'); 
                const favoriteProducts = response.data.map(fav => fav.product_id);

                setLiked(favoriteProducts.reduce((acc, productId) => {
                    acc[productId] = true;
                    return acc;
                }, {}));
            } catch (error) {
                toast.error('Erro ao buscar produtos favoritados.');
            }
        };

        fetchFavorites();
    }, []);

    const handleLike = async (id) => {
        try {
            if (liked[id]) {
                await api.delete(`/favorites/${id}`);
                toast.info('Produto removido dos favoritos.');
            } else {
                await api.post('/favorites', { product_id: id });
                toast.success('Produto adicionado aos favoritos!');
            }

            setLiked(prev => ({
                ...prev,
                [id]: !prev[id], 
            }));
        } catch (error) {
            toast.error('Erro ao atualizar favoritos.');
        }
    };

    const handleRate = (id, rating) => {
        setRatings(prev => ({
            ...prev,
            [id]: rating,
        }));
    };

    const handleAddToCart = () => {
        putProductInCard(product);
        toast.success('Produto adicionado ao carrinho!');
    };

    return (
        <ContainerItens>
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
            <ShoppingBasket onClick={handleAddToCart} />
        </ContainerItens>
    );
}

CardProducts.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string,
    }).isRequired,
};
