import React from 'react';
import {TextField, Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyAccordion from '../shared/MyAccordion'
import MyModal from '../shared/MyModal'

function createData(
    type: string,
    duration: string,
    price: string
) {
    return { type, duration, price };
}

const rows = [
    createData('TRANSIT VISA', '90 Days', 'R 2,626.00'),
    createData('', '180 Days', 'R 5,250.00'),
    createData('MULTIPLE ENTRIES', 'Single Entry', 'R350.00'),
    createData('', 'Double Entries', 'R 500.00')
];

export default function DenseTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 700 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Visa Type</TableCell>
                        <TableCell >Duration</TableCell>
                        <TableCell >Prices</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.type}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                {row.type}
                            </TableCell>
                            <TableCell >{row.duration}</TableCell>
                            <TableCell >{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

interface Step1FormProps {
    formData: {
        field1: string;
        field2: string;
        // ... add other fields from your form data
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VisaOne = () => {
    return (
        <div>
            <h3>GENERAL INFORMATION</h3>
            <DenseTable />
            <div className="content-box">

                <h3>Requirements</h3>
                <ul>
                    <li>A fully visa form </li>
                    <li>Two (2) Recent Passport Photos</li>
                    <li>A Valid Passport (Min - 6 Months)</li>
                    <li>Visa Fees Are Non-Refundable</li>
                    <li>Your Reasons for Visiting the DRC</li>
                </ul>
            </div>
            <MyAccordion />
            <MyModal />
        </div>
    );
}