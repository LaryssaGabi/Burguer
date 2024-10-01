import Categorias from '../../assets/categorias.svg'
import { Container, Title, ImageCategorias, CategoriSection,  ContainerTitle, SubTitle,Titles } from './products-styles'
import Header from '../../components/Header/header-index'


export default function Favoritos() {


    return (
        <>
            <Container>
                <Header />
                <ImageCategorias src={Categorias} alt="logo da home" />
                <ContainerTitle>
                    <Title>O MELHOR
                        HAMBÚRGUER
                        ESTÁ AQUI!
                    </Title>
                    <SubTitle>Meus favoritos do cardápio!</SubTitle>
                </ContainerTitle>

                <CategoriSection>
                    <Titles>Favoritos</Titles>
                </CategoriSection>
            </Container >
        </>
    );
}
