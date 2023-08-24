import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'num' | 'name' | 'code' | 'citizenship' | 'duration' | 'type';
    label: string;
    minWidth?: number;
    width?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {id: 'num', label: 'No', width: 40},
    { id: 'name', label: 'Names', minWidth: 100 },
    { id: 'code', label: 'Passport Number', minWidth: 100 },
    {
        id: 'citizenship',
        label: 'Citizenship',
        minWidth: 100,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'duration',
        label: 'Date',
        minWidth: 100,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'type',
        label: 'Type',
        minWidth: 100,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
];

interface Data {
    num: number,
    name: string;
    code: string;
    citizenship: string;
    duration: string;
    type: string;
}

function createData(
    num: number,
    name: string,
    code: string,
    citizenship: string,
    duration: string,
    type: string
): Data {
    return { num, name, code, citizenship, duration, type };
}

const rows = [
    createData(1, 'Paul', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(2, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service'),
    createData(3, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(4, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(5, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary'),
    createData(6, 'Paull', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(7, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service'),
    createData(8, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(9, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(10, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary'),
    createData(11, 'Paull', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(12, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service'),
    createData(13, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(14, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(15, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary'),
    createData(16, 'Paull', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(17, 'Jean Degaule', 'OB78R63', 'Belgium', '12-10-2023', 'Service'),
    createData(18, 'Karl Kyle', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(19, 'Peter King', 'OB78463', 'Ukraine', '12-11-2023', 'Ordinary'),
    createData(20, 'Kyle', 'OB78463', 'American', '12-11-2023', 'Ordinary'),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '98%', overflow: 'hidden', marginLeft: '15px' }}>
            <TableContainer sx={{ maxHeight: 500 }} >
                <Table stickyHeader aria-label="sticky table" size='small'>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
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
    );
}