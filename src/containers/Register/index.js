import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";
import RegisterImagem from '../../assets/img/TelaRegister.png'
import Logo from '../../assets/img/logo 2.png'
import Api from '../../services/api'
import { Button } from '../../components'

import {
    Container,
    RegisterImagemStyle,
    ContainerItens,
    Label,
    Error,
    Input,
    EntrarLink
} from './style'




export function Register() {

    const schema = Yup.object().shape({
        name: Yup.string().required('Insrila um nome porfavor!'),
        email: Yup.string().email("Selecione um email valido!").required('Digite um email'),
        password: Yup.string().required("Insira uma senha valida!"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'senhas nao sao iguais')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })


    const onSubmit = async clientDate => {
        try {

            const { status } = await Api.post('users', {
                name: clientDate.name,
                email: clientDate.email,
                password: clientDate.password
            },
                { validateStatus: () => true }

            )

            if (status === 201 || status === 200) {
                toast.success('Cadastro Realizado com sucesso!')
            } else if (status === 409) {
                toast.error('email ja existente em base de dados, utilize outro porfavor!')
            } else{
                throw new Error()
            }


        } catch (err) {
            toast.error("falha no sistema, tente novamente!")
        }


    }



    return (
        <Container>
            <RegisterImagemStyle alt="imagem de login" src={RegisterImagem} />
            <ContainerItens>
                <img alt="login" src={Logo}></img>
                <h1>Cadastro</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Name</Label>
                    <Input type="text" {...register("name")}
                        error={errors.name?.message}></Input>
                    <Error>{errors.name?.message}</Error>

                    <Label>Email</Label>
                    <Input type="email" {...register("email")}
                        error={errors.email?.message}></Input>
                    <Error>{errors.email?.message}</Error>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")}
                        error={errors.password?.message}></Input>
                    <Error>{errors.password?.message}</Error>

                    <Label>Confirmar senha</Label>
                    <Input type="password" {...register("confirmPassword")}
                        error={errors.confirmPassword?.message}></Input>
                    <Error>{errors.confirmPassword?.message}</Error>


                    <Button type="submit" title="Cadastro" >  </Button>
                </form>

                <EntrarLink>Ja possui conta? <Link to="/login">Clique Aqui</Link></EntrarLink>
            </ContainerItens>

        </Container>
    )
}

