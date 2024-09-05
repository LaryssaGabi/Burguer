import CartLogo from '../../assets/logo.svg'
import Finalizado from '../../assets/finalizado.svg'
import { Container, LogoCart, Title, ImageCart, CategoriSection } from './styles'
import Header from '../../components/Header/header-index'
import CartFinish from '../../components/CartFinish'

export default function ProductFinalizado() {
    return (

        <Container>
            <Header />
            <LogoCart>
                <ImageCart src={CartLogo} alt="logo da home" />
            </LogoCart>

            <CategoriSection>
                <Title src={Finalizado} alt="Finalizando" />
                <CartFinish />
            </CategoriSection>

        </Container>

    )
}

