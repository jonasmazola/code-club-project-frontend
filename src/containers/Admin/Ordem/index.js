import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { Row } from "./row";
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


export function Ordem() {
    const [orders, setOrders] = useState([])
    const [rows, setRows] = useState([])

    // console.log(orders)

    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get('novoPedido')

            setOrders(data)
            // console.log(data)
        }
        loadOrders()
    }, [])



    function createData(order) {
        return {
            id: order.id,
            products: order.products,
            


        };
    }



    useEffect(() => {
        const newRows = orders.map(ord => createData(ord))
        setRows(newRows)
    }, [orders])


console.log(rows)



    return (

        <Container>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell >Usuario</TableCell>
                            <TableCell >Data do pedido</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}