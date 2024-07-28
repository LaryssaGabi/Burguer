import { Container, ContainerItens } from "./admin-styler";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import SideMenuAdmin from '../../components/SideMenuAdmin'
import paths from "../../constants/paths";
import { useLocation } from 'react-router-dom';

export default function Admin() {
  const location = useLocation();

  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItens>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.Products && <ListProducts />}
      </ContainerItens>
  
    </Container>
  )
}
