import { Container, Title } from './category-styles'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

export default function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories')
            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <Title>CATEGORIAS</Title>

            <Carousel itemsToShow={3.5} style={{width:'90%'}}>
                {
                    categories && categories.map(category => (
                        <div key={category.id}>
                            <img src={category.url} alt="foto da categoria"/>
                            <button>{category.name}</button>
                        </div>
                    ))
                }
            </Carousel>
        </Container>
    )
}

