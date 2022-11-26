import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

export const Policies = () => {
    const rows = [
        { id: 1, policyNumber: '900557201', productNumber: '340', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
        { id: 2, policyNumber: '900557339', productNumber: '550', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
        { id: 3, policyNumber: '900557423', productNumber: '457', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
        { id: 4, policyNumber: '900557492', productNumber: '310', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
        { id: 5, policyNumber: '900557201', productNumber: '340', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
        { id: 6, policyNumber: '900557339', productNumber: '550', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
        { id: 7, policyNumber: '900557423', productNumber: '457', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
        { id: 8, policyNumber: '900557492', productNumber: '310', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },

    ];
    
      const columns = [
        { field: 'policyNumber', headerName: 'policyNumber', width: 150 },
        { field: 'productNumber', headerName: 'productNumber', width: 150 },
        { field: 'insuredId', headerName: 'insuredId', width: 150 },
        { field: 'insuredFirstName', headerName: 'insuredFirstName', width: 150 },
        { field: 'insuredLastName', headerName: 'insuredLastName', width: 150 },
      ];

  return (
    <Box sx={{height:'50vh', width:'70vw', margin: '0 auto'}}>
        <DataGrid rows={rows} columns={columns} />
    </Box>
  )
}
