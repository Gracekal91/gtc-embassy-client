import * as React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Link} from "react-router-dom";


interface Column {
    id: 'num' | 'name' | 'code' | 'citizenship' | 'duration' | 'type' | 'status';
    label: string;
    minWidth?: number;
    width?: number;
    align?: 'left';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {id: 'num', label: 'No', width: 40},
    {id: 'name', label: 'Names', minWidth: 100},
    {id: 'code', label: 'Passport Number', minWidth: 100},
    {
        id: 'citizenship',
        label: 'Citizenship',
        minWidth: 100,
        align: 'left',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'duration',
        label: 'Date',
        minWidth: 100,
        align: 'left',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'type',
        label: 'Type',
        minWidth: 100,
        align: 'left',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {id: 'status', label: 'Status', width: 100},
];

interface Data {
    num: number,
    name: string;
    code: string;
    citizenship: string;
    duration: string;
    type: string;
    status: string
}

function createData(
    num: number,
    name: string,
    code: string,
    citizenship: string,
    duration: string,
    type: string,
    status: string
): Data {
    return {num, name, code, citizenship, duration, type, status};
}

const rows = [
    createData(1, 'Paul', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(2, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service', 'in progress'),
    createData(3, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'received'),
    createData(4, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(5, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary', 'in progress'),
    createData(6, 'Paull', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(7, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service', 'received'),
    createData(8, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'pending for payment'),
    createData(9, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(10, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary', 'accepted'),
    createData(11, 'Paull', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(12, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service', 'rejected'),
    createData(13, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(14, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(15, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary', 'in progress'),
    createData(16, 'Paull', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(17, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service', 'in progress'),
    createData(18, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(19, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary', 'in progress'),
    createData(20, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary', 'in progress'),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchQuery, setSearchQuery] = useState('');
    const [updatedRow, setUpdatedRow] = useState([])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRedirect = (id: number) =>{
        return window.location.href = `/visas/${id}`;
    }

    return (
        <>
            <Paper sx={{width: '98%', overflow: 'hidden', marginLeft: '15px'}}>
                <TableContainer sx={{maxHeight: 500}}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            padding: '8px',
                            border: 'none',
                            margin: '.3rem',
                            background: '#b7d0eb',
                            width: '250px',
                            borderRadius: '3px'
                        }}
                    />
                    <Table stickyHeader aria-label="sticky table" size='small' style={{position: 'relative'}}>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {rows
                                .filter(row => {
                                    const name = row.name.toLowerCase();
                                    return name.includes(searchQuery.toLowerCase());
                                })
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    console.log('ROW', row)
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}
                                                  style={{cursor: 'pointer'}}
                                                  onClick={() => handleRedirect(row.num)}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (

                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'status' ?
                                                            <span className="progress"></span> : ''}
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}

                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}