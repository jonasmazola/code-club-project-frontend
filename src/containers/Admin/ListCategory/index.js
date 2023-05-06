import React, { useEffect, useState } from "react";
import { Container, ImgCategoria, Edite, Delete } from "./style";
import api from '../../../services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import paths from '../../../constants/path';
import { HeaderMenu, Label } from '../../../components';




export function ListCategory() {
    const [category, setCategory] = useState([])
    const { push } = useHistory()



    useEffect(() => {
        async function loadCategory() {
            const { data } = await api.get('categorias')
            setCategory(data)
        }
        loadCategory()
    }, [])



    async function deleteCategoria(id) {

        await toast.promise(api.delete('categorias/' + id), {
            pending: 'Aguarde enquanto a Categoria é deletado!',
            success: 'Categoria deletada com sucesso!',
            error: 'Erro ao tentar deletar a Categoria'
        })

        setTimeout(() => {
            window.location.reload()
        }, 2000);

    }

    function editarCategoria(category) {
        push(paths.EditCategory, { category })
    }


    return (
        <>


            <HeaderMenu title={'Listagem de Categorias'}>
               
            </HeaderMenu>

            <Container>
                {/* tabela de categorias */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell align="center" >Imagem</TableCell>
                                <TableCell align="center" >Editar</TableCell>
                                <TableCell align="center" >Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {category.map((categoria) => (

                                <TableRow key={categoria.id}

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {categoria.name}
                                    </TableCell>

                                    <TableCell align="center">
                                        <ImgCategoria >
                                            <img src={categoria.url} alt="" />
                                        </ImgCategoria>
                                    </TableCell>

                                    <TableCell align="center" >
                                        <Edite onClick={() => editarCategoria(categoria)}></Edite>
                                    </TableCell>

                                    <TableCell align="center" >
                                        <Delete onClick={() => deleteCategoria(categoria.id)} ></Delete>
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