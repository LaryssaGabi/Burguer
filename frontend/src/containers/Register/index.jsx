import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import api from '../../services/api';

import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./register-styles";
import Logo from "../../assets/logo.svg"
import { Button } from "../../components/Button/button-index";

export default function Register() {
    const navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required('Nome é obrigatório'),
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatorio'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha.'),
            password_confirmation: yup.string().oneOf([yup.ref('password')], 'Assenhas devem ser iguais').required('Confirme sua senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })


    const onSubmit = async (data) => {

        try {
            const { status } =
                await api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                    {
                        validateStatus: () => true,
                    },
                )

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
                toast.success('Cadastro realizado com sucesso!')
            } else if (status === 400) {
                toast.error('Email já cadastrado! Faça o login para continuar')
            } else {
                throw new Error()
            }

        } catch (error) {
            toast.error('Falha no sistema! Tente novamente.')
        }


    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Criar conta
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register("password_confirmation")} />
                        <p>{errors?.password_confirmation?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar Conta</Button>
                </Form>

                <p>Já possui conta?<Link to="/login"> Clique aqui.</Link></p>
            </RightContainer>
        </Container>

    );
}