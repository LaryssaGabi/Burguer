import PedidosLogo from '../../assets/pedido.svg'
import UserLogo from '../../assets/userPeople.svg'
import DevLogo from '../../assets/logo.svg'
import { Container, SectionRight, PageLinks, LogDev, SectionLeft, Logo, User, ContainerText, Divider } from './button-styles'

export default function Header() {
    return (
        <Container>
            <SectionRight>
                <LogDev src={DevLogo} alt="Logo do desenvolvedor" />
                <PageLinks>Home</PageLinks>
                <Divider />
                <PageLinks>Produtos</PageLinks>
                <Divider />
                <PageLinks>Contatos</PageLinks>
            </SectionRight>

            <SectionLeft>
                <PageLinks>
                    <User src={UserLogo} alt="Logo do usuário" />
                </PageLinks>
                <ContainerText>
                    <p>Olá, <span>Laryssa</span></p>
                    <PageLinks>Sair</PageLinks>
                </ContainerText>
                <PageLinks>
                    <Logo src={PedidosLogo} alt="Logo do pedido" />
                    <p>Pedidos</p>
                </PageLinks>
            </SectionLeft>
        </Container>
    )
}
