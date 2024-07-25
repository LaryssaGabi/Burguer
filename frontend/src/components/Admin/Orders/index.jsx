import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "./orders-styler";
import api from '../../../services/api'
import Row from './row'

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('orders');
      setOrders(data);
    }
    loadCategories();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products.map(product => ({
        ...product,
        quantity: Number(product.quantity) // Convertendo quantidade para número
      }))
    };
  }

  useEffect(() => {
    const newRows = orders.map(ord => createData(ord));
    setRows(newRows);
  }, [orders])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row}/> 
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
