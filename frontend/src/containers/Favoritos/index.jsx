import Categorias from '../../assets/categorias.svg';
import { Container, Title, ImageCategorias, CategoriSection, ContainerTitle, SubTitle, Titles } from './favoritos-styles';
import Header from '../../components/Header/header-index';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import CardProducts from '../../components/CardProducts';
import { FavoriteContainer } from '../Products/products-styles';

export default function Favoritos() {
    const [products, setProducts] = useState([]);  // Todos os produtos
    const [favoriteProducts, setFavoriteProducts] = useState([]);  // IDs dos favoritos

    // Carregar todos os produtos e favoritos
    useEffect(() => {
        const fetchProductsAndFavorites = async () => {
            try {
                // Obter todos os produtos
                const productsResponse = await api.get('/products');
                setProducts(productsResponse.data);

                // Obter favoritos (somente IDs)
                const favoritesResponse = await api.get('/favorites');
                const favoriteIds = favoritesResponse.data.map(fav => fav.product_id);
                setFavoriteProducts(favoriteIds);
            } catch (error) {
                console.error('Erro ao buscar produtos e favoritos:', error);
            }
        };

        fetchProductsAndFavorites();
    }, []);

    // Filtrar os produtos favoritos
    const filteredFavorites = products.filter(product => 
        favoriteProducts.includes(product.id)
    );

    return (
        <Container>
            <Header />
            <ImageCategorias src={Categorias} alt="logo da home" />
            <ContainerTitle>
                <Title>O MELHOR HAMBÚRGUER ESTÁ AQUI!</Title>
                <SubTitle>Meus favoritos do cardápio!</SubTitle>
            </ContainerTitle>

            <CategoriSection>
                <Titles>Favoritos</Titles>
            </CategoriSection>

            <FavoriteContainer>
                {filteredFavorites.length > 0 ? (
                    filteredFavorites.map(product => (
                        <CardProducts key={product.id} product={product} />
                    ))
                ) : (
                    <p>Você ainda não tem favoritos.</p>
                )}
            </FavoriteContainer>
        </Container>
    );
}
