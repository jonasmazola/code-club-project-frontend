import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Label, LabelUpload, Input } from "./style";
import api from '../../../services/api'
import { ReactSelect } from "../Ordem/style";
import { Button, ErrorMessage, HeaderMenu } from '../../../components'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Opacity } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";




export function NewProduct() {
  const [data, setData] = useState("");
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome do produto é obrigatorio!'),
    price: Yup.string().required('O Preço do produto é obrigatorio!'),
    category: Yup.object().required('A Categoria do produto é obrigatorio!'),
    file: Yup.mixed().test('required', 'carrega a image', value => {
      return value && value.length > 0
    })

  })

  const { register, handleSubmit, control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const productDateFormData = new FormData()
    productDateFormData.append('name', data.name)
    productDateFormData.append('price', data.price)
    productDateFormData.append('categoria_id', data.category.id)
    productDateFormData.append('file', data.file[0])

    await toast.promise(api.post('products', productDateFormData), {
      pending: 'Criando o produto',
      success: 'Produto criado com sucesso',
      error: 'Erro ao criar o novo produto'
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 2000);


  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categorias')
      setCategories(data)
    }

    loadCategories()
  }, [])


  return (
    <>
    <HeaderMenu title={'Adcionar Produtos'} />
    <Container>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <Label>Nome</Label>
        <Input type="text" {...register("name")}></Input>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type="number" {...register("price")}></Input>
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <LabelUpload>
          {fileName || 'Carregue a imagem do Produto'}

          <input type="file"
            {...register('file')}
            accept="image/png, image/jpeg, image/jpg"
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }} />
        </LabelUpload>

        <Label>Categoria</Label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="... escolha a categoria"
              >
              </ReactSelect>

            )
          }}
        >
        </Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <Button type="submit" title={'Salvar Produto'}></Button>

      </form>


    </Container>
    </>
  )
}
