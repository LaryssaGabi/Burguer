import Header from '../../components/Header/header-index'
import CartLogo from '../../assets/logo.svg'
import { LogoCart } from '../Cart/cart-styles'
import Finalizado from '../../assets/concluido.svg'
import { Container, ImageCart, CategoriSection, Title } from './styles'
import CartConcluido from '../../components/CartConcluido'

export default function PedidoConcluido() {
    return (

        <Container>
            <Header />
            <LogoCart>
                <ImageCart src={CartLogo} alt="logo da home" />
            </LogoCart>

            <CategoriSection>
                <Title src={Finalizado} alt="Finalizando" />
                <CartConcluido />
            </CategoriSection>
        </Container>

    )
}

