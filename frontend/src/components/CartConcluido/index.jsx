import { Container, Title, TimelineContainer, Step, Circle, Line, StepLabel } from "./styles";

export default function CartConcluido() {
    const currentStep = 3;

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
                    <StepLabel>Em Produção</StepLabel>
                </Step>
                <Line />
                <Step>
                    <Circle active={currentStep >= 3}>3</Circle>
                    <StepLabel>Pedido Finalizado</StepLabel>
                </Step>
                <Line />
                <Step>
                    <Circle active={currentStep >= 4}>4</Circle>
                    <StepLabel>Pedido em Rota</StepLabel>
                </Step>
                <Line />
                <Step>
                    <Circle active={currentStep >= 4}>4</Circle>
                    <StepLabel>Pedido entregue</StepLabel>
                </Step>
            </TimelineContainer>
        </Container>
    );
}
