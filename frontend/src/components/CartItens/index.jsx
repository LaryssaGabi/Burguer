import { ContainerMain, Container, ItemsSection, Header, Body, DivContainer, SummaryContainer, Summary, Button, EmptyMessage, ButtonBack, StyledMinus, StyledPlus } from './cartitens-styles';
import { useCard } from '../../hooks/CardContect';
import formatCurrency from '../../utils/formatCrurrency';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify'
import api from '../../services/api';

export default function CartItens() {
    const { cardProducts, increaseProducts, decreaseProducts } = useCard();
    const navigate = useNavigate();

    const totalAmount = cardProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    const [deliveryFee] = useState(5);
    const finalAmount = totalAmount + deliveryFee;

    const back = () => {
        navigate('/produtos');
    };

    const submitOrder = async () => {
        const order = cardProducts.map(product => {
            return {
                id: product.id,
                quantity: product.quantity,
            };
        });

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando o seu pedido...',
            success: 'Pedido realizado com sucesso!',
            error: 'Erro ao realizar o pedido, tente novamente'
        }
        )


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
                                        <StyledMinus onClick={() => decreaseProducts(product.id)} />
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
                            <Button onClick={submitOrder}>Continuar</Button>
                        </SummaryContainer>
                    </>
                ) : (
                    <EmptyMessage>Carrinho vazio</EmptyMessage>
                )}
            </Container>
            <ButtonBack onClick={back}>
                <ChevronLeft color="#5C2669" />
                Adicionar mais produtos
            </ButtonBack>
        </ContainerMain>
    );
}
