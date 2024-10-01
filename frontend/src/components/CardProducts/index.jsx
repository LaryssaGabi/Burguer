import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';
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

    // Função para adicionar/remover dos favoritos
    const handleLike = async (id) => {
        try {
            // Verificar se o produto já está favoritado
            if (liked[id]) {
                // Remover dos favoritos
                await api.delete(`/favorites/${id}`);
                toast.info('Produto removido dos favoritos.');
            } else {
                // Adicionar aos favoritos
                await api.post('/favorites', { product_id: id });
                toast.success('Produto adicionado aos favoritos!');
            }

            // Alterar o estado local para refletir o novo status de favorito
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
