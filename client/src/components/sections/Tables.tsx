import * as React from 'react';
import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useGetData} from "../../hooks/useGetData";
import {RowInterface, ColumnInterface, DataInterface} from "../../interfaces";

const TableData = () => {
const {data, loading, error} = useGetData();
if(error || !data) console.log('error while fetching data')
if(loading) console.log('Loading data')
console.log('============================', 'Hello', data)

// Assuming 'data' is an array of objects with 'name' property
// @ts-ignore
const curratedData: RowInterface[] = data?.map((item, index) => ({
    num: index,
    names: item.name,
    code: item.travel_document_number, // Replace with the actual property you want for 'code'
    citizenship: item.citizenship_at_birth, // Replace with the actual property you want for 'citizenship'
    duration: item.duration, // Replace with the actual property you want for 'duration'
    type: item.type_of_passport,
    status: item.sex
}));

const columns: readonly ColumnInterface[] = [
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



function createData(
    num: number,
    name: string,
    code: string,
    citizenship: string,
    duration: string,
    type: string,
    status: string
): DataInterface {
    return {num, name, code, citizenship, duration, type, status};
}

// @ts-ignore
    const rows = data?.map((item: any, index: number ) => {
    // @ts-ignore
        return createData(index, item.name, item.travel_document_number, item.citizenship_at_birth, item.name,
            item.type_of_passport, item.sex)
})


function StickyHeadTable() {
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

    // @ts-ignore
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

                            {rows?.filter((row: { name: any; }) => {
                                    const name = row.name.toLowerCase();
                                    return name.includes(searchQuery.toLowerCase());
                                })
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: { [x: string]: any; code: React.Key | null | undefined; num: number; }) => {
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
                    count={rows?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
// @ts-ignore
    return(
        <>
            <StickyHeadTable/>
        </>
    )
}

export default TableData;