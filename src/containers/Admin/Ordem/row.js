import React, { useEffect, useState } from "react";
import { Container } from "./style";
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


export function Row({ row }) {
  const [open, setOpen] = React.useState(false);


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
        <TableCell >{row.data}</TableCell>
        <TableCell >{row.status}</TableCell>
        <TableCell ></TableCell>
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
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {productRow.quantidade}
                      </TableCell>
                      <TableCell>{productRow.name_produto}</TableCell>
                      <TableCell >{productRow.price}</TableCell>
                      <TableCell >
                        <img src={productRow.path} alt="" />
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




