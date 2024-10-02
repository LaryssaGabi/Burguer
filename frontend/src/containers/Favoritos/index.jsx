// Favoritos.jsx
import Categorias from '../../assets/categorias.svg';
import { Container, Title, ImageCategorias, CategoriSection, ContainerTitle, SubTitle, Titles } from './favoritos-styles';
import Header from '../../components/Header/header-index';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import CardProducts from '../../components/CardProducts';

export default function Favoritos() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await api.get('/favorites'); 
                setFavoriteProducts(response.data); 
            } catch (error) {
                console.error('Erro ao buscar favoritos:', error);
            }
        };

        fetchFavorites();
    }, []);

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

            <div>
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map(product => (
                        <CardProducts key={product.id} product={product} />
                    ))
                ) : (
                    <p>Você ainda não tem favoritos.</p>
                )}
            </div>
        </Container>
    );
}
