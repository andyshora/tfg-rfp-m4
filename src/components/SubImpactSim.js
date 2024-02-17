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
    Icon,
    Grid
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { tableCellClasses } from '@mui/material/TableCell';

const Pitch = SC.div`
    
    height: 600px;
    width: 600px;
    margin: 1rem auto;
    background: rgba(0, 0, 0, 0.1);
    background-size: 850px 540px;
    // filter: hue-rotate(115deg) grayscale(0.7) saturate(4) brightness(0.5);
`

const LiveScoreWrap = SC.div``
const ScoreWrap = SC.div`
  background: linear-gradient(-192deg, #cd2529 0%, #be2022 48.5%, #b70709 49%, #a00000 100%);
  border-radius: 5px;
`
const PlayerOnPitch = SC.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    color: #fff;
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
  
  function createPlayer(name, image = '', one = 0, two = 0, three = 0) {
    const img = image ? image : `${name.toLowerCase()}.jpg`;
    return { name, image: img, one, two, three };
  }

  const cityPlayers = [
    createPlayer('Ederson'),
    createPlayer('Gvardiol'),
    createPlayer('Ake'),
    createPlayer('Dias'),
    createPlayer('Walker'),
    createPlayer('Kovacic'),
    createPlayer('Rodri'),
    createPlayer('Doku'),
    createPlayer('Silva'),
    createPlayer('Foden'),
    createPlayer('Alvarez')
  ]

  console.log('cityPlayers', cityPlayers)
  
  const rows = [
    createPlayer('Kevin De Bruyne', 'kdb.jpg', 6.0, 24, 4.0),
    createPlayer('Oscar Bobb', 'bobb.jpg', 9.0, 37, 4.3),
    createPlayer('Matheus Nunes', 'nunes.jpg', 3.7, 67, 4.3),
    createPlayer('Rico Lewis', 'lewis.jpg', 3.7, 67, 4.3),
    createPlayer('Jack Grealish', 'grealish.jpg', 3.7, 67, 4.3),
  ];
export default function SubImpactSim() {
  return (
    <Container sx={{ mt: 2, minWidth: 900 }}>
        <Box padding={2} sx={{ minHeight: 400, background: "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)" }}>
            <Typography variant="h3" component="h3" gutterBottom>Sub Impact Simulator</Typography>
            <LiveScoreWrap>
              <Grid container spacing={2}>
                <Grid item xs={5.5} align="right"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}><Avatar style={{ marginRight: 10 }} alt="" src={`/assets/images/clubs/newcastle.png`} /><Typography component="span">Newcastle United</Typography></div></Grid>
                <Grid item xs={1}><ScoreWrap>2 - 1</ScoreWrap></Grid>
                <Grid item xs={5.5} align="left"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}><Typography component="span">Manchester City</Typography><Avatar style={{ marginLeft: 10 }} alt="" src={`/assets/images/clubs/city.png`} /></div></Grid>
              </Grid>
            </LiveScoreWrap>
            <Pitch>
              {cityPlayers.map((player, index) => (
                <PlayerOnPitch key={player.name}>
                  <Avatar key={index} alt={player.name} src={`/assets/images/players/${player.image}`} />
                  <Typography variant="h6" component="h6" gutterBottom>{player.name}</Typography>
                  <Button size="small" variant="contained" color="secondary" title={`See the impact of replacing ${player.name}`}><KeyboardArrowDownIcon /></Button>
                </PlayerOnPitch>
              ))}
            </Pitch>
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