import CartLogo from '../../assets/logo.svg'
import Checkout from '../../assets/group.svg'
import { Container, LogoCart,Title, ImageCart, CategoriSection } from './cart-styles'
import CartItens from '../../components/CartItens'

export default function Cart() {
    return (

        <Container>
            <LogoCart>
                <ImageCart src={CartLogo} alt="logo da home" />
            </LogoCart>

            <CategoriSection>
                <Title src={Checkout} alt="logo da home"/>
                <CartItens/>
            </CategoriSection>

        </Container>

    )
}

