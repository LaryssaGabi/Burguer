import { useState, useEffect } from 'react';
import { ContainerMain, Container, SectionsWrapper, AddressSection, PaymentSection, SummarySection, SectionHeader, AddressBody, PaymentBody, SummaryBody, ButtonBack, ButtonFinalizado } from './styles';
import { useCard } from '../../hooks/CardContect';
import formatCurrency from '../../utils/formatCrurrency';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import api from '../../services/api';

export default function CartFinish() {
    const { cardProducts } = useCard();
    const navigate = useNavigate();

    const totalAmount = cardProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    const [deliveryFee] = useState(5);
    const finalAmount = totalAmount + deliveryFee;

    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState({
        rua: '',
        bairro: '',
        complemento: '',
        cep: '',
        cidade: '',
    });

    // Buscar endereço do usuário ao carregar o componente
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await api.get('addresses'); // Endpoint para buscar o endereço
                setAddress(response.data);
            } catch (error) {
                console.error('Erro ao buscar endereço:', error);
                toast.error('Erro ao carregar endereço');
            }
        };
        fetchAddress();
    }, []);

    const handleAddressChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    const backView = () => {
        navigate('/carrinho');
    };

    const submitOrder = async () => {
        const order = cardProducts.map(product => {
            return {
                id: product.id,
                quantity: product.quantity,
            };
        });

        try {
            await api.post('orders', {
                products: order,
                address // Adicione o endereço ao pedido
            });

            await toast.promise(api.post('orders', { products: order }), {
                pending: 'Realizando o seu pedido...',
                success: 'Pedido Finalizado com sucesso!',
                error: 'Erro ao realizar o pedido, tente novamente'
            });

            setTimeout(() => {
                navigate('/pedidoConcluido')
            }, 2000);
        } catch (error) {
            console.error('Erro ao finalizar o pedido:', error);
            toast.error('Erro ao finalizar o pedido');
        }
    };

    const saveAddress = async () => {
        try {
            await api.put(`addresses/${address.id}`, address); // Atualiza o endereço
            toast.success('Endereço salvo com sucesso!');
            setIsEditing(false);
        } catch (error) {
            console.error('Erro ao salvar endereço:', error);
            toast.error('Erro ao salvar endereço');
        }
    };

    return (
        <ContainerMain>
            <Container>
                <SectionsWrapper>
                    <AddressSection>
                        <SectionHeader>
                            <h3>Endereço entrega</h3>
                        </SectionHeader>
                        <AddressBody>
                            {!isEditing ? (
                                <>
                                    <p>Rua: {address.rua}</p>
                                    <p>Bairro: {address.bairro}</p>
                                    <p>Complemento: {address.complemento}</p>
                                    <p>Cep: {address.cep}</p>
                                    <p>Cidade: {address.cidade}</p>

                                    <a onClick={() => setIsEditing(true)}>Trocar endereço de entrega</a>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        name="rua"
                                        value={address.rua}
                                        onChange={handleAddressChange}
                                        placeholder='Rua'
                                    />
                                    <input
                                        type="text"
                                        name="bairro"
                                        value={address.bairro}
                                        onChange={handleAddressChange}
                                        placeholder='Bairro'
                                    />
                                    <input
                                        type="text"
                                        name="complemento"
                                        value={address.complemento}
                                        onChange={handleAddressChange}
                                        placeholder='Complemento'
                                    />
                                    <input
                                        type="text"
                                        name="cep"
                                        value={address.cep}
                                        onChange={handleAddressChange}
                                        placeholder='Cep'
                                    />
                                    <input
                                        type="text"
                                        name="cidade"
                                        value={address.cidade}
                                        onChange={handleAddressChange}
                                        placeholder='Cidade'
                                    />
                                    <a onClick={saveAddress}>Salvar endereço</a>
                                </>
                            )}
                        </AddressBody>
                    </AddressSection>

                    <PaymentSection>
                        <SectionHeader>
                            <h3>Forma de pagamento</h3>
                        </SectionHeader>
                        <PaymentBody>
                            <div>
                                <input type="checkbox" id="dinheiro" name="payment" value="dinheiro" />
                                <label htmlFor="dinheiro">Dinheiro</label>
                            </div>
                            <div>
                                <input type="checkbox" id="cartao" name="payment" value="cartao" />
                                <label htmlFor="cartao">Cartão Crédito/Débito</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pix" name="payment" value="pix" />
                                <label htmlFor="pix">PIX</label>
                            </div>
                        </PaymentBody>
                    </PaymentSection>

                    <SummarySection>
                        <SectionHeader>
                            <h3>Resumo do pedido</h3>
                        </SectionHeader>
                        <SummaryBody>
                            <p><span>Itens</span> <span>{formatCurrency(totalAmount)}</span></p>
                            <p><span>Taxa de entrega</span> <span>{formatCurrency(deliveryFee)}</span></p>
                            <p className="total"><span>Total</span> <span>{formatCurrency(finalAmount)}</span></p>
                            <ButtonBack onClick={backView}>
                                <ChevronLeft color="#8c72a5" />
                                Rever meu pedido
                            </ButtonBack>
                            <ButtonFinalizado onClick={submitOrder}>Finalizar Pedido</ButtonFinalizado>
                        </SummaryBody>
                    </SummarySection>
                </SectionsWrapper>
            </Container>
        </ContainerMain>
    );
}
