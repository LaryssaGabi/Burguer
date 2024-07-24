import { Container, Title, ContainerItens, Image, TextOverlay } from './category-styles'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

export default function CategoryCarousel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }

        loadCategories();
    }, []);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1800, itemsToShow: 5 },
    ];

    const handleCategoryClick = (categoryId) => {
        navigate(`/produtos?category=${categoryId}`);
    };

    return (
        <Container>
            <Title>CATEGORIAS</Title>

            <Carousel
                itemsToShow={5}
                style={{ width: '85%' }}
                breakPoints={breakPoints}
            >
                {categories && categories.map(category => (
                    <ContainerItens
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <Image src={category.url} alt="foto da categoria" />
                        <TextOverlay>
                            <h3>{category.name}</h3>
                        </TextOverlay>
                    </ContainerItens>
                ))}
            </Carousel>
        </Container>
    );
}
