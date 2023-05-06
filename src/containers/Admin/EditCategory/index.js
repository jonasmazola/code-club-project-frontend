import React, { useEffect, useState } from "react";
import { Container, Label, LabelUpload, Input } from "./style";
import { useForm, Controller } from "react-hook-form";
import api from '../../../services/api'
import { Button, ErrorMessage, HeaderMenu } from '../../../components'
import { useHistory } from "react-router-dom";
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { EditProduct } from "../EditProduct";
import paths from '../../../constants/path'
import { yupResolver } from "@hookform/resolvers/yup";



export function EditCategory() {
    const [data, setData] = useState("")
    const [fileName, setFileName] = useState(null)
    const { push, location: { state: { category } } } = useHistory()



    const schema = Yup.object().shape({
        name: Yup.string().required('Nome da categoria é obrigatorio'),
        file: Yup.mixed()
    })


    const { register, handleSubmit, control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const categoriaFormData = new FormData()
        categoriaFormData.append('name', data.name)
        categoriaFormData.append('file', data.file[0])

        await toast.promise(api.put('categorias/' + category.id, categoriaFormData), {
            pending: 'Salvando categoria. Aguarde...',
            success: 'Categoria salva com sucesso',
            error: 'Erro ao salvar nova Categoria'
        })

        setTimeout(() => {
            push('listar-categoria')
        }, 2000);
    }


    return (
        <>
    <HeaderMenu title={'Editar Categoria'}  />
            <Container>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} defaultValue={category.name}></Input>

                    <ErrorMessage></ErrorMessage>

                    <LabelUpload>
                        {fileName || 'Carregue imagem da Categoria'}

                        <input type="file"
                            {...register('file')}
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        >
                        </input>
                    </LabelUpload>


                    <ErrorMessage></ErrorMessage>

                    <Button type="submit" title={'Editar Categoria'}></Button>

                </form>


            </Container>
        </>
    )

}