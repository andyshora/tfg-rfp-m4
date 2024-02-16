import * as React from 'react';
import { styled } from '@mui/material/styles';

import {
    Button,
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.background.default
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&': {
        backgroundColor: theme.palette.background.default
    },
    '&:nth-of-type(odd)': {
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    // remove cell border
    'td, th': {
        border: 0
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledHeaderTableRow = styled(TableRow)(({ theme }) => ({
    '&': {
        backgroundColor: theme.palette.background.default
    },
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.background.default
    },
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default
    },
    'td, th': {
        backgroundColor: theme.palette.background.default
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function SubImpactSim() {
  return (
    <Container sx={{ mt: 2 }}>
        <Box padding={2} sx={{ background: "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)" }}>
            <Typography variant="h1" component="h1" gutterBottom>Sub Impact Simulator</Typography>
            <Typography>Analyse the potential impact of substitutions right now</Typography>
        </Box>
      
      <Box sx={{ mt: 2 }} padding={2}>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <StyledHeaderTableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                </StyledHeaderTableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}