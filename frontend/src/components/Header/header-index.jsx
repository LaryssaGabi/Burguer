import PedidosLogo from '../../assets/pedido.svg';
import UserLogo from '../../assets/userPeople.svg';
import DevLogo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext'
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, SectionRight, PageLinks, LogDev, SectionLeft, Logo, User, ContainerText, Divider, UserContainer } from './button-styles';

export default function Header() {
    const { logout, userData } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const logoutUser = () => {
        logout();
        navigate('/login');
    }

    return (
        <Container>
            <SectionRight>
                <LogDev src={DevLogo} alt="Logo do desenvolvedor" />
                <PageLinks onClick={() => navigate('/')} isActive={pathname === '/'}>Home</PageLinks>
                <Divider />
                <PageLinks onClick={() => navigate('/produtos')} isActive={pathname.includes('produtos')}>Produtos</PageLinks>
                <Divider />
                <PageLinks isActive={pathname === '/contatos'}>Contatos</PageLinks>
                <Divider />
                <PageLinks isActive={pathname === '/favoritos'}>Favoritos</PageLinks>
            </SectionRight>

            <SectionLeft>
                <ContainerText>
                    <UserContainer>
                        <User src={UserLogo} alt="Logo do usuário" />
                        <p>Olá, <span>{userData.name}</span></p>
                    </UserContainer>
                    <PageLinks onClick={logoutUser}>Sair</PageLinks>
                </ContainerText>
                <PageLinks onClick={() => navigate('/carrinho')} isActive={pathname.includes('/carrinho')}>
                    <Logo src={PedidosLogo} alt="Logo do pedido" />
                    <p>Pedidos</p>
                </PageLinks>
            </SectionLeft>
        </Container>
    );
}
