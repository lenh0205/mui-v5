import DeleteIcon from '@mui/icons-material/Delete'
import { Avatar, Card, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import CustomerModal from './CustomerModal';

function CustomerCard({ customer }) {
    const { deleteCustomer } = useContext(CustomerContext)
    const stringAvatar = (name) => {
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
            // nếu tên chỉ có 1 chữ sẽ gặp lỗi
        }
    }

    return (
        <Card>
            <Avatar {...stringAvatar(customer.name)} sx={{ bgcolor: 'green' }} />
            <CardHeader
                title={customer.name}
                action={<Tooltip title='Delete Customer' placement='bottom-start'>
                    <IconButton onClick={() => { deleteCustomer(customer.id) }}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>}
            />
            <CardContent>
                <Typography paragraph align="justify">
                    {customer.details}
                </Typography>
                <CustomerModal customer={customer} />
            </CardContent>
        </Card>
    );
}

export default CustomerCard;

{/* <Paper>
    <Typography variant='h5' align='center' gutterBottom>{customer.name}</Typography>
    <Typography variant='h6' align='justify'>{customer.details}</Typography>
</Paper> */}