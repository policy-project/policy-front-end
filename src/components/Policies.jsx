import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { useSelector } from 'react-redux';
import { policySelector } from '../redux/store';

export const Policies = () => {

    const policies = useSelector(policySelector);
    
      const columns = [
        { field: 'policyNumber', headerName: 'policyNumber', width: 150 },
        { field: 'productNumber', headerName: 'productNumber', width: 150 },
        { field: 'insuredId', headerName: 'insuredId', width: 150 },
        { field: 'insuredFirstName', headerName: 'insuredFirstName', width: 150 },
        { field: 'insuredLastName', headerName: 'insuredLastName', width: 150 },
      ];

  return (
    <Box sx={{height:'50vh', width:'70vw', margin: '0 auto'}}>
        <DataGrid rows={policies} columns={columns} getRowId={(row) => row.policyNumber}/>
    </Box>
  )
}
