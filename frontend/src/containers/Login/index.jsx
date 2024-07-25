import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api';
import { useUser } from '../../hooks/UserContext'

import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./login-styles";
import Logo from "../../assets/logo.svg"
import { Button } from "../../components/Button/button-index";

export default function Login() {

    const { putUserData } = useUser();
    const navigate = useNavigate();

    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha.'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {
        try {
            const response = await toast.promise(
                api.post('/session', {
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando seus dados',
                    success: 'Seja Bem-Vindo(a)👌',
                    error: 'Email ou Senha Incorretos 🤯',
                }
            );

            const userData = response.data;
            putUserData(userData);

            setTimeout(() => {
                if (userData.admin) {
                    navigate('/pedidos');
                } else {
                    navigate('/');
                }
            }, 2000);
            
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!
                        <br />
                    </span>Acesse com seu <span>Login e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>

                <p>Não possui conta?<Link to="/cadastro"> Clique aqui.</Link></p>
            </RightContainer>
        </Container>
    );
}
