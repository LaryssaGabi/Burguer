import { useEffect, useState } from 'react';
import { Container, Img, PencilImg, Trash } from './listProduct-styles';
import api from '../../../services/api';
import formatCurrency from '../../../utils/formatCrurrency';
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { CircleX, CircleCheck } from 'lucide-react';
import { toast } from 'react-toastify';

export default function ListProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('products');
            setProducts(data);
        }
        loadProducts();
    }, []);

    function isOffer(offerStatus) {
        return offerStatus ? <CircleCheck size={20} color="#34C759" /> : <CircleX size={20} color="#FF3B30" />;
    }

    function editProduct(product) {
        navigate('/editar-produto', { state: { product } });
    }

    async function deleteProduct(productId) {
        try {
            await api.delete(`/products/${productId}`);
            toast.success('Produto excluído com sucesso!');
            setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
        } catch (error) {
            toast.error('Erro ao excluir o produto.');
        }
    }

    function handleDelete(productId) {
        // Centraliza o toast no meio da tela
        const toastId = toast.info(
            <div style={{ textAlign: 'center' }}>
                <p>Você realmente deseja excluir?</p>
                <button
                    onClick={() => {
                        deleteProduct(productId);
                        toast.dismiss(toastId);
                    }}
                    style={{
                        margin: '10px 10px',
                        padding: '8px 16px',
                        backgroundColor: '#ff3b30',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff6954')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff3b30')}
                >
                    Sim
                </button>
                <button
                    onClick={() => toast.dismiss(toastId)}
                    style={{
                        margin: '0 10px',
                        padding: '8px 16px',
                        backgroundColor: '#34c759',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#60d77c')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#34c759')}
                >
                    Não
                </button>
            </div>,
            {
                position: "top-center", // Centraliza o toast
                autoClose: false, // Para manter o toast aberto até o usuário tomar uma ação
                closeOnClick: false,
                draggable: false,
            }
        );
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
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                                <TableCell align='center'>
                                    <Img src={product.url} alt="imagem-produto" />
                                </TableCell>
                                <TableCell>
                                    <PencilImg onClick={() => editProduct(product)} />
                                    <Trash onClick={() => handleDelete(product.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
