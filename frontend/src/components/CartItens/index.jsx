import { ContainerMain, Container, ItemsSection, Header, Body, DivContainer, SummaryContainer, Summary, Button, EmptyMessage, ButtonBack, StyledMinus, StyledPlus } from './cartitens-styles';
import { useCard } from '../../hooks/CardContect';
import formatCurrency from '../../utils/formatCrurrency';
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react';


export default function CartItens() {
    const { cardProducts, increaseProducts, decreaseProducts } = useCard();
    const navigate = useNavigate();


    const totalAmount = cardProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    const deliveryFee = 5.00;
    const finalAmount = totalAmount + deliveryFee;

    const back = () => {
        navigate('/produtos');
    };

    return (
        <ContainerMain>
            <Container>
                {cardProducts.length > 0 ? (
                    <>
                        <ItemsSection>
                            <Header>
                                <p></p>
                                <p>Itens</p>
                                <p>Preços</p>
                                <p>Quantidade</p>
                                <p>Total</p>
                            </Header>
                            {cardProducts.map(product => (
                                <Body key={product.id}>
                                    <img src={product.url} alt={product.name} />
                                    <p>{product.name}</p>
                                    <p>{formatCurrency(product.price)}</p>
                                    <DivContainer>
                                        <StyledMinus onClick={() => decreaseProducts(product.id)}/>
                                        <p>{product.quantity}</p>
                                        <StyledPlus onClick={() => increaseProducts(product.id)} />
                                    </DivContainer>

                                    <p>{formatCurrency(product.price * product.quantity)}</p>
                                </Body>
                            ))}
                        </ItemsSection>
                        <SummaryContainer>
                            <Summary>
                                <h2>Resumo do Pedido</h2>
                                <p><span>Itens</span> <span>{formatCurrency(totalAmount)}</span></p>
                                <p><span>Taxa de entrega</span> <span>{formatCurrency(deliveryFee)}</span></p>
                                <p className="total"><span>Total</span> <span>{formatCurrency(finalAmount)}</span></p>
                            </Summary>
                            <Button>Continuar</Button>
                        </SummaryContainer>

                    </>
                ) : (
                    <EmptyMessage>Carrinho vazio</EmptyMessage>

                )}

            </Container>
            <ButtonBack onClick={back}>
                <ChevronLeft color="#5C2669" />
                Adicionar produtos
            </ButtonBack>
        </ContainerMain>
    );
}
