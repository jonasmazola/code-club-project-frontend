import React, { useEffect, useState } from "react";
import { Container, ImgProduto, Edite, Delete } from "./style";
import api from '../../../services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormatCurrency from '../../../utils/formatCurrency'
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import ComOferta from '@mui/icons-material/TaskAlt';
import SemOferta from '@mui/icons-material/NotInterested';
import { toast } from "react-toastify";
import { EditProduct } from "../EditProduct";
import paths from '../../../constants/path'
import { HeaderMenu } from "../../../components";

export function ListProducts() {
  const [products, setProducts] = useState()
  const { push } = useHistory()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')
      setProducts(data)
    }


    loadProducts()
  }, [])


  async function editProduct(product) {
    push(paths.EditProduct, { product })
  }




  async function deletarProduto(id) {

    await toast.promise(api.delete("products/" + id), {
      pending: 'Deletando o Produto. Aguarde...',
      success: 'Produto deletado com sucesso!',
      error: 'Erro ao tentar deletar esse Produto!'
    })

    setTimeout(() => {
      window.location.reload();
    }, 2000);

  }




  return (
    <>
    <HeaderMenu title={'Listagem de Produtos'} />
      <Container>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center" >Preço</TableCell>
                <TableCell align="center">Produto em Oferta</TableCell>
                <TableCell align="center" >Imagem</TableCell>
                <TableCell align="center" >Editar</TableCell>
                <TableCell align="center" >Delete</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {products && products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">{FormatCurrency(product.price)}</TableCell>
                  <TableCell align="center">
                    {product.offer ? <ComOferta style={{ color: 'green', fontWeight: 'bold' }} /> : <SemOferta style={{ color: 'red' }} />}


                  </TableCell>
                  <TableCell align="center">
                    <ImgProduto >
                      <img src={product.url} alt='imagem do produto' />
                    </ImgProduto>
                  </TableCell>
                  <TableCell align="center" >
                    <Edite onClick={() => editProduct(product)}></Edite>
                  </TableCell>
                  <TableCell align="center" >
                    <Delete onClick={() => deletarProduto(product.id)}></Delete>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


      </Container>
    </>
  )
}
