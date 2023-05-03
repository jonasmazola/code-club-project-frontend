import React, { useEffect, useState } from "react";
import Select from "react-select"
import {ImagemProduto, ReactSelect} from "./style";
import formatCurrency from "../../../utils/formatCurrency";
import api from '../../../services/api'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import formatarData from '../../../utils/formatDate'
import status from "./ordem-status";


export function Row({ row, setOrders, orders }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);


  async function setNewStatus(id, status) {
    setIsLoading(true)
    try {
      await api.put('/novoPedido/' + id, { status })


      const newOrders = orders.map( order => {
        return order.id === id ? {... order, status} : order
      })
      setOrders(newOrders)

    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)

    }
  }



  // console.log(row)
  return (

    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell >{formatarData(row.data)}</TableCell>
       

        <TableCell >

          <ReactSelect options={status.filter(sts => sts.label !== 'Todos')}
            menuPortalTarget={document.body}
            placeholder="status"
            defaultValue={status.find(option => option.value === row.status)}
            onChange={newStatus => {
              setNewStatus(row.id, newStatus.value)
            }}
            isLoading={isLoading}
          />



        </TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Quantidade</TableCell>
                    <TableCell >Nome</TableCell>
                    <TableCell >Price</TableCell>
                    <TableCell >Foto</TableCell>
                    <TableCell >Total a pagar ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.id} >
                      <TableCell component="th" scope="row">
                        {productRow.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {productRow.quantidade}
                      </TableCell>
                      <TableCell>{productRow.name_produto}</TableCell>
                      <TableCell >{formatCurrency(productRow.price)}</TableCell>
                      <TableCell >
                        <ImagemProduto src={productRow.path} alt="" />
                      </TableCell>
                      <TableCell >
                        {formatCurrency(productRow.quantidade * productRow.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );



}




