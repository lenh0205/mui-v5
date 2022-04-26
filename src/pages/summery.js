import React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material';

const columns = [
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'country', headerName: 'Country', width: 200},
    {field: 'age', headerName: 'Age', width: 200},
    {field: 'job', headerName: 'Job', width: 200},
]
const rows = [
    {id: 1, name: 'Jon Snow', age: 35, country: 'Australia', job: 'Engineer'},
    {id: 2, name: 'Lannister', age: 25, country: 'America', job: 'Web Designer'},
    {id: 3, name: 'Stack', age: 15, country: 'England', job: 'IT Adivisor'},
    {id: 4, name: 'Peter White', age: 30, country: 'Thailand', job: 'Engineer'},
    {id: 5, name: 'Alice Smith', age: 25, country: 'Poland', job: 'Engineer'},
]

function Summery(props) {
    return (
        <div style={{height: 500, width: '80%', margin: 'auto'}}>
            <Typography variant='h2' align='center'>Summary</Typography>
            <DataGrid rows={rows} columns={columns}/>
        </div>
    );
}

export default Summery;