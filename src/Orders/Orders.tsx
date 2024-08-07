import { Avatar, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import image from '../../src/Assests/il_300x300.5289415323_itcs.avif';

const orders = [
  { customer: 'Vivian Vamsi', orderId: '48657976', amount: '$129.00', status: 'Completed' },
  { customer: 'Jane Cooper', orderId: '40567978', amount: '$234.02', status: 'Cancelled' },
  { customer: 'Cody Fisher', orderId: '31945720', amount: '$450.00', status: 'Completed' },
  { customer: 'Kristin Watson', orderId: '70896723', amount: '$129.00', status: 'Cancelled' },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Completed':
      return {
        backgroundColor: '#98FB98',
        color: 'green',
        boxShadow: '0 4px 8px rgba(0, 128, 0, 0.4)',
        padding: '4px 8px',
        borderRadius: '4px',
        textAlign: 'center',
      };

    case 'Cancelled':
      return {
        backgroundColor: '#F08080',
        color: 'red',
        boxShadow: '0 4px 8px rgba(255, 0, 0, 0.4)',
        padding: '4px 8px',
        borderRadius: '4px',
        textAlign: 'center',
      };
    default:
      return {};
  }
};

const RecentOrders: React.FC = () => {
  return (
    <Paper style={{ padding: '16px', backgroundColor: '#444', color: 'white' }}>
      <Typography variant="h6" gutterBottom>
        Recent Orders
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white', padding: '8px' }}>Customer</TableCell>
              <TableCell style={{ color: 'white', padding: '8px' }}>Order ID</TableCell>
              <TableCell style={{ color: 'white', padding: '8px' }}>Amount</TableCell>
              <TableCell style={{ color: 'white', padding: '8px' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index} sx={{ height: '50px', '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ padding: '8px' }}>
                  <Box display="flex" alignItems="center">
                    <Avatar alt={order.customer} src={image} />
                    <Typography variant="body1" style={{ marginLeft: '8px' }}>{order.customer}</Typography>
                  </Box>
                </TableCell>
                <TableCell style={{ padding: '8px' }}>{order.orderId}</TableCell>
                <TableCell style={{ padding: '8px' }}>{order.amount}</TableCell>
                <TableCell style={{ padding: '8px' }}>
                  <Box sx={getStatusStyle(order.status)}>{order.status}</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentOrders;
