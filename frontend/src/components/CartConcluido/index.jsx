/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container, Title, TimelineContainer, Step, Circle, Line, StepLabel } from "./styles";
import api from "../../services/api";

export default function CartConcluido({ orderId }) {
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        // Buscar status do pedido com base no ID
        async function fetchOrderStatus() {
            try {
                const { data } = await api.get(`/orders/${orderId}`);
                const status = data.status;

                switch (status) {
                    case 'Pedido Aceito':
                        setCurrentStep(1);
                        break;
                    case 'Em preparação':
                        setCurrentStep(2);
                        break;
                    case 'Pedido finalizado':
                        setCurrentStep(3);
                        break;
                    case 'Pedido a caminho':
                        setCurrentStep(4);
                        break;
                    case 'Pedido entregue':
                        setCurrentStep(5);
                        break;
                    default:
                        setCurrentStep(1);
                }
            } catch (error) {
                console.error("Erro ao buscar o status do pedido", error);
            }
        }

        fetchOrderStatus();
    }, [orderId]);

    return (
        <Container>
            <Title>Pedido Concluído</Title>

            <TimelineContainer>
                <Step>
                    <Circle active={currentStep >= 1}>1</Circle>
                    <StepLabel>Pedido Aceito</StepLabel>
                </Step>
                <Line />
                <Step>
                    <Circle active={currentStep >= 2}>2</Circle>
                    <StepLabel>Em preparação</StepLabel>
                </Step>
                <Line />
                <Step>
                    <Circle active={currentStep >= 3}>3</Circle>
                    <StepLabel>Pedido Finalizado</StepLabel>
                </Step>
                <Line />
                <Step>
                    <Circle active={currentStep >= 4}>4</Circle>
                    <StepLabel>Pedido a caminho</StepLabel>
                </Step>
                <Line />
                <Step>
                    <Circle active={currentStep >= 5}>5</Circle>
                    <StepLabel>Pedido Entregue</StepLabel>
                </Step>
            </TimelineContainer>
        </Container>
    );
}
