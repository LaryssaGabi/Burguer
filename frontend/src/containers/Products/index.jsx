import Categorias from '../../assets/categorias.svg'
import { useEffect, useState } from 'react'
import { Container, Title, ImageCategorias, CategoriSection, CategoriSeletion, CategoryButton, ContainerTitle, ProductsContainer, SubTitle, Button } from './products-styles'
import api from '../../services/api'
import CardProducts from '../../components/CardProducts'
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'


export default function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')
            const newCategories = [{ id: 0, name: 'Todos' }, ...data]
            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data } = await api.get('/products')
            setProducts(data)
        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategories == 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(product => product.category_id == activeCategories)

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategories, products])


    const handleBack = () => {
        navigate('/');
    };
    
    

    return (
        <Container>
            <ImageCategorias src={Categorias} alt="logo da home" />
            <ContainerTitle>
                <Title>O MELHOR <br />
                    HAMBÚRGUER <br />
                    ESTÁ AQUI!
                </Title>
                <SubTitle>Esse cardápio está irresistível!</SubTitle>
            </ContainerTitle>
            <CategoriSection>
                <CategoriSeletion>
                    {categories && categories.map(category => (
                        <CategoryButton
                            key={category.id}
                            active={activeCategories === category.id ? 'true' : undefined}
                            onClick={() => setActiveCategories(category.id)}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
                </CategoriSeletion>

                <ProductsContainer>
                    {filteredProducts && filteredProducts.map(product => (
                        <CardProducts key={product.id} product={product} />
                    ))}
                </ProductsContainer>

                <Button onClick={handleBack}>
                    <ChevronLeft color="#5C2669" />
                    Voltar
                </Button>
            </CategoriSection>
        </Container>
    )
}