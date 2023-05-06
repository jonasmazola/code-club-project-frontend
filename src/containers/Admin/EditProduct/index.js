import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Label, LabelUpload, Input, InputCheckbox } from "./style";
import api from '../../../services/api'
import { ReactSelect } from "../Ordem/style";
import { Button, ErrorMessage, HeaderMenu } from '../../../components'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";




export function EditProduct() {

  const [data, setData] = useState("");
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push, location: { state: { product } } } = useHistory()


  const schema = Yup.object().shape({
    name: Yup.string().required('Nome do produto é obrigatorio!'),
    price: Yup.string().required('O Preço do produto é obrigatorio!'),
    category: Yup.object().required('A Categoria do produto é obrigatorio!'),

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
    productDateFormData.append('offer', data.offer)

    await toast.promise(api.put('products/'+product.id, productDateFormData), {
      pending: 'Editando o produto',
      success: 'Produto Editado com sucesso',
      error: 'Erro ao Editar o produto'
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
    <HeaderMenu title={'Editar Produtos'} />
    <Container>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <Label>Nome</Label>
        <Input type="text" {...register("name")} defaultValue={product.name}></Input>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type="number" {...register("price")} defaultValue={product.price}></Input>
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
          defaultValue={product.categoria}
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
                defaultValue={product.categoria}
              >
              </ReactSelect>

            )
          }}
        >
        </Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <div>Produto em Oferta?
          <InputCheckbox type="checkBox" {...register('offer')} defaultChecked={product.offer} />
        </div>

        <Button type="submit" title={'Editar Produto'}></Button>


      </form>


    </Container>
    </>
  )
}
