import { useEffect, useState } from 'react';
import { Container, Img, PencilImg } from './listProduct-styles';
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCrurrency'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import { CircleX } from 'lucide-react';
import { CircleCheck } from 'lucide-react';

export default function ListProducts() {
    const [products, setProducts] = useState()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('products');

            setProducts(data);
        }
        loadCategories();
    }, []);

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CircleCheck size={20} color="#34C759" />
        }
        return <CircleX size={20} color="#FF3B30" />
    }


    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow style={{ background: "#333232" }}>
                            <TableCell style={{ color: "#fff", fontWeight: 'bold', padding: '16px' }}>Nome</TableCell>
                            <TableCell style={{ color: "#fff", fontWeight: 'bold', padding: '16px' }}>Preço</TableCell>
                            <TableCell align='center' style={{ color: "#fff", fontWeight: 'bold', padding: '16px' }}>Produto em Oferta</TableCell>
                            <TableCell align='center' style={{ color: "#fff", fontWeight: 'bold', padding: '16px' }}>Imagem do produto</TableCell>
                            <TableCell style={{ color: "#fff", fontWeight: 'bold', padding: '16px' }}>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products &&
                        products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                                <TableCell align='center'><Img src={product.url} alt="imagem-produto" /></TableCell>
                                <TableCell><PencilImg /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
