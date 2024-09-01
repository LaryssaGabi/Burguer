import { toast } from 'react-toastify';
import { Container, Title, ContainerItens, Image, ContainerDiv, TextOverlay } from './offers-styles';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import formatCurrency from '../../utils/formatCrurrency';
import Carousel from 'react-elastic-carousel';
import HeartIcon from '../Caracteres/heart-styles';
import { ShoppingBasket } from '../Caracteres/basket-shop';
import StarRating from '../Caracteres/stars-styles';
import { useCard } from '../../hooks/CardContect';

export default function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('/products');
            const onlyOffers = data.filter(product => product.offer).map(product => ({
                ...product,
                formatedPrice: formatCurrency(product.price),
            }));
            setOffers(onlyOffers);
        }

        loadOffers();
    }, []);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1800, itemsToShow: 5 },
    ];

    const [liked, setLiked] = useState({});
    const [ratings, setRatings] = useState({});
    const { putProductInCard } = useCard();

    const handleLike = (id) => {
        setLiked(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleRate = (id, rating) => {
        setRatings(prev => ({
            ...prev,
            [id]: rating,
        }));
    };

    const handleAddToCart = (product) => {
        putProductInCard(product);
        toast.success('Produto adicionado ao carrinho!');
    };

    return (
        <Container>
            <Title>OFERTAS DO DIA</Title>

            <Carousel
                itemsToShow={5}
                style={{ width: '85%'}}
                breakPoints={breakPoints}
                itemPadding={[20, 10]}
            >
                {offers && offers.map(product => (
                    <ContainerItens key={product.id}>
                        <Image src={product.url} alt="foto das ofertas" />
                        <HeartIcon
                            liked={liked[product.id]}
                            onClick={() => handleLike(product.id)}
                        />
                        <ContainerDiv>
                            <TextOverlay>
                                <h3>{product.name}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h4>{product.formatedPrice}</h4>
                                <div>
                                    <StarRating
                                        rating={ratings[product.id] || 0}
                                        onRate={(rating) => handleRate(product.id, rating)}
                                    />
                                </div>
                            </TextOverlay>
                        </ContainerDiv>
                        <ShoppingBasket onClick={() => handleAddToCart(product)} />
                    </ContainerItens>
                ))}
            </Carousel>
        </Container>
    );
}
