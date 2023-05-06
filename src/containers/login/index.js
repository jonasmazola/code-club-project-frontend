import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'
import { Link, useHistory } from "react-router-dom";
import LoginImg from '../../assets/img/fundo.png'
import Logo from '../../assets/img/logo 2.png'
import api from '../../services/api.js'
import { Button } from '../../components/Button/index'

import { useUser } from "../../hooks/UserContext";

import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    EntrarLink
} from './styles'

import { ErrorMessage } from "../../components/ErroMenssage";




export function Login() {

    const history = useHistory()

    const { putUserDate } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string().email("Selecione um email valido!").required('Digite um email'),
        password: Yup.string().required("Insira uma senha valida!"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })






    const onSubmit = async clientDate => {

        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientDate.email,
                password: clientDate.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem vindo(a)',
                error: 'Verifique seu email e senha'
            }
        )

        putUserDate(data)
        if (data.admin) {

                history.push('/pedidos')
            
        } else {

            setTimeout(() => {
                history.push('/')

            }, 2000);
        }


    }












    return (
        <Container>
            <LoginImage alt="imagem de login" src={LoginImg} />
            <ContainerItens>
                <img alt="login" src={Logo}></img>
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")}
                        error={errors.email?.message}></Input>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")}
                        error={errors.password?.message}></Input>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>


                    <Button type="submit" title="Sing in" style={{ color: 'red' }} >  </Button>
                </form>

                <EntrarLink>Nao possui conta? <Link to="/cadastro">Clique Aqui</Link></EntrarLink>
            </ContainerItens>

        </Container>
    )
}

