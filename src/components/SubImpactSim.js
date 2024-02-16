import * as React from 'react';
import { styled } from '@mui/material/styles';
import SC from '@emotion/styled';

import {
    Avatar,
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
    Paper,
    Icon
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { tableCellClasses } from '@mui/material/TableCell';

const Pitch = SC.div`
    width: 100%;
    max-width: 600px;
    min-width: 400px;
    height: 0;
    padding-top: 40%;
    margin: 1rem auto;
    background: url('/assets/images/pitch.png') no-repeat center center;
    background-size: 100% 100%;
    filter: hue-rotate(115deg) grayscale(0.7) saturate(4) brightness(0.5);
`

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
  
  function createData(name, image, one, two, three) {
    return { name, image, one, two, three };
  }
  
  const rows = [
    createData('Kevin De Bruyne', 'kdb.jpg', 6.0, 24, 4.0),
    createData('Oscar Bobb', 'bobb.jpg', 9.0, 37, 4.3),
    createData('Matheus Nunes', 'nunes.jpg', 3.7, 67, 4.3),
    createData('Rico Lewis', 'lewis.jpg', 3.7, 67, 4.3),
    createData('Jack Grealish', 'grealish.jpg', 3.7, 67, 4.3),
    
  ];
export default function SubImpactSim() {
  return (
    <Container sx={{ mt: 2, minWidth: 900 }}>
        <Box padding={2} sx={{ minHeight: 400, background: "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)" }}>
            <Typography variant="h1" component="h1" gutterBottom>Sub Impact Simulator</Typography>
            <Typography>Analyse the potential impact of substitutions right now</Typography>

            <Pitch />
        </Box>
      
      <Box sx={{ mt: 2 }} padding={2}>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <StyledHeaderTableRow>
                    <StyledTableCell align="center" width={1}>Sub In</StyledTableCell>
                    <StyledTableCell width={1}>&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">A</StyledTableCell>
                    <StyledTableCell align="right">B</StyledTableCell>
                </StyledHeaderTableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell align="right"><Button variant="outlined" title={`See the impact of subbing in ${row.name}`}><KeyboardArrowUpIcon /></Button></StyledTableCell>
                    <StyledTableCell width={1}>
                        <Avatar alt={row.name} src={`/assets/images/players/${row.image}`} /> 
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.one}</StyledTableCell>
                    <StyledTableCell align="right">{row.two}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}