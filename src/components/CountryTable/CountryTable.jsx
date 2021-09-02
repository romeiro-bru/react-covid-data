import React from 'react';
import './style.css';
import CountUp from 'react-countup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

export function CountryTable({ selectedCountry, data: {confirmed, deaths, lastUpdate }}) {
    if(!confirmed) {
        return <p>Casos de COVID-19 no mundo.<br/>Selecione um país para verificar os dados.</p>
    }

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          fontWeight: 800,
        },
        body: {
          fontSize: 15,
          padding: 10,
        },
      }))(TableCell);

    return(
        <section className="container table-container">
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>País</StyledTableCell>
                            <StyledTableCell>Infectados</StyledTableCell>
                            <StyledTableCell>Mortes</StyledTableCell>
                            <StyledTableCell>Ultima Atualização</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                            <TableRow>
                                <StyledTableCell align="center" component="th" scope="row">{selectedCountry}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">{confirmed.value}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">{deaths.value}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">{new Date(lastUpdate).toLocaleDateString()}</StyledTableCell>
                            </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer> 
        </section>
    )
}