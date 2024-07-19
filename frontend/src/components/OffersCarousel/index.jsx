import { Container, Title, ContainerItens, Image, TextOverlay } from './offers-styles'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import formatCurrency from '../../utils/formatCrurrency'
import Carousel from 'react-elastic-carousel'

export default function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {

        async function loadOffers() {
            const { data } = await api.get('/products')

            const onlyOffers = data.filter(product => product.offer).map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })
            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1800, itemsToShow: 5 },
    ]

    return (
        <Container>
            <Title>OFERTAS DO DIA</Title>

            <Carousel
                itemsToShow={5}
                style={{ width: '85%' }}
                breakPoints={breakPoints}


            >
                {
                    offers && offers.map(product => (
                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt="foto das ofertas" />
                            <TextOverlay>
                                <h3>{product.name}</h3>
                                <p>{product.formatedPrice}</p>

                            </TextOverlay>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>
    )
}

