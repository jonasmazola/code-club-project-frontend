import React, { useEffect, useState } from "react";
import { Container, Menu, LinkMenu, P } from "./style";
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
import status from "./ordem-status";
import { HeaderMenu } from "../../../components";


export function Ordem() {
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [activeStatus, setActiveStatus] = useState(1)
    const [rows, setRows] = useState([])

    // console.log(orders)

    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get('novoPedido')

            setOrders(data)
            setFilteredOrders(data)
            // console.log(data)
        }
        loadOrders()
    }, [])




    function createData(order) {
        return {
            id: order.id,
            data: order.createdAt,
            status: order.status,
            products: order.products,
            name: order.name_usuario



        };
    }



    useEffect(() => {
        const newRows = filteredOrders.map(ord => createData(ord))
        setRows(newRows)

    }, [filteredOrders])


    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredOrders(orders)
        } else {

            const statusIndex = status.findIndex(stats => stats.id === activeStatus)
            const newFilteredOrders = orders.filter(order => order.status === status[statusIndex].value)
            setFilteredOrders(newFilteredOrders)
        }
    }, [orders])


    // console.log(orders)

    function handlesStatus(status) {
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter(order => order.status === status.value)
            setFilteredOrders(newOrders)
        }

        setActiveStatus(status.id)

    }


    return (
        <>
        <HeaderMenu title={'Listagem de todos os pedidos Realizados'} />
            <Container>
                <Menu>
                    {status && status.map(status => (
                        <LinkMenu key={status.id}
                            onClick={() => handlesStatus(status)}
                            isActive={activeStatus === status.id}
                        >

                            {status.label}<P>Total: {status.label === 'Todos' ? orders.length : orders.filter(qtd => qtd.status === status.label).length}</P>

                        </LinkMenu>

                    ))}
                </Menu>



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
                                <Row key={row.id} row={row} setOrders={setOrders} orders={orders} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}