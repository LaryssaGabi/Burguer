import { useLocation } from 'react-router-dom';
import { Container, ImageHome, ItemContainer, ListLink } from './sideMenu-styler';
import listLinks from './menu-list';
import HomeLogo from '../../assets/logo.svg';
import { LogOut } from 'lucide-react';
import { useUser } from '../../hooks/UserContext';

export default function SideMenuAdmin() {
    const { logout } = useUser();
    const location = useLocation();

    return (
        <Container>
            <ImageHome src={HomeLogo} alt="logo da home" />
            <hr />
            {listLinks.map(item => (
                <ItemContainer 
                    key={item.id} 
                    isActive={location.pathname === item.link}
                >
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr />

            <ItemContainer style={{ position: 'absolute', bottom: '30px', background: 'none' }}>
                <LogOut style={{ color: "#fff" }} />
                <ListLink to="/login" onClick={logout}>Sair</ListLink>
            </ItemContainer>
        </Container>
    );
}
