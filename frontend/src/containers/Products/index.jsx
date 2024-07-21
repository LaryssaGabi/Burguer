import Categorias from '../../assets/categorias.svg'
import { useEffect, useState } from 'react'
import { Container, Title, ImageCategorias, CategoriSection, CategoriSeletion, CategoryButton, ProductsContainer } from './products-styles'
import { api } from '../../services/api'
import CardProducts from '../../components/CardProducts'

export default function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)

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

    return (
        <Container>
            <ImageCategorias src={Categorias} alt="logo da home" />

            <Title>O MELHOR <br />
                HAMBÚRGUER <br />
                ESTÁ AQUI!
                <h5>Esse cardápio está irresistível!</h5>
            </Title>

            <CategoriSection>
                <CategoriSeletion>
                    {categories && categories.map(category => (
                        <CategoryButton
                            key={category.id}
                            isActiveCategory={activeCategories === category.id}
                            onClick={() => setActiveCategories(category.id)}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
                </CategoriSeletion>

                <ProductsContainer>
                    {products && products.map(product => (
                        <CardProducts key={product.id} product={product} />
                    ))}
                </ProductsContainer>
            </CategoriSection>
        </Container>
    )
}
