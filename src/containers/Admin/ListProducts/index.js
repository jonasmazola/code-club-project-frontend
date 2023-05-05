import React, { useEffect, useState } from "react";
import { Container, ImgProduto, Edite } from "./style";
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

import ComOferta from '@mui/icons-material/TaskAlt';
import SemOferta from '@mui/icons-material/NotInterested';



export function ListProducts() {
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')
      setProducts(data)
    }

    loadProducts()
  }, [])



  return (
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
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
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
                  <Edite></Edite>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </Container>
  )
}
