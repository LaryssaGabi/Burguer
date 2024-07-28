import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Menu, LinkMenu } from "./orders-styler";
import api from '../../../services/api'
import Row from './row'

import status from "./order-status";
import FormatDate from "../../../utils/formatDate";


export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filterOrders, setFilterOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilterOrders(data);
    }
    loadCategories();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: FormatDate(order.createdAt),
      status: order.status,
      products: order.products.map(product => ({
        ...product,
        quantity: Number(product.quantity)
      }))
    };
  }

  useEffect(() => {
    const newRows = filterOrders.map(ord => createData(ord));
    setRows(newRows);
  }, [filterOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setFilterOrders(orders)
    } else {


      const statusIndex = status.findIndex(sts => sts.id === activeStatus)
      const newFilteredOrders = orders.filter(order => order.status === status[statusIndex].value)
      setFilterOrders(newFilteredOrders)
    }
  }, [orders])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilterOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilterOrders(newOrders)
    }
    setActiveStatus(status.id);
  }

  return (
    <Container>

      <Menu>
        {status && status.map(status =>
          <LinkMenu
            key={status.id}
            onClick={() => handleStatus(status)}
            isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </LinkMenu>
        )}
      </Menu>

      <TableContainer component={Paper} >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow   style={{ background: "#333232" }}>
              <TableCell  />
              <TableCell style={{color: "#fff" }}>Pedidos</TableCell>
              <TableCell style={{color: "#fff" }}>Cliente</TableCell>
              <TableCell style={{color: "#fff" }}>Data do pedido</TableCell>
              <TableCell style={{color: "#fff" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
