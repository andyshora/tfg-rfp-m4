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
    Grid,
    Chip
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Cancel';

import { tableCellClasses } from '@mui/material/TableCell';

const PitchOverflowWrap = SC.div`
    position: relative;
    overflow: hidden;
    width: 800px;
    margin: 0 auto;
`

const HomePitchOverlay = SC.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 1s ease;
`

const AwayPitchOverlay = SC.div`
    position: absolute;
    top: 0;
    left: 800px;
    width: 50%;
    height: 100%;
    
`

const Pitch = SC.div`
    position: relative;
    height: 600px;
    width: 1600px;
    margin: 1rem auto;
    background: rgba(0, 0, 0, 0.1);
    transition: all 1s ease;
`

const LiveScoreWrap = SC.div``
const ScoreWrap = SC.div`
  background: linear-gradient(-192deg, #cd2529 0%, #be2022 48.5%, #b70709 49%, #a00000 100%);
  border-radius: 5px;
  padding: 8px;
`
const PlayerOnPitch = SC.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    color: #fff;

    padding: 4px;
    border-radius: 5px;

    background: ${p => p.isActive ? 'rgba(255,255,255,0.15)' : 'none'};
    

    > .MuiAvatar-root, > .MuiTypography-root {
      opacity: ${p => p.isActive ? 0.4 : 1};
    }
`

const HomeTeamWrap = SC.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
`

const AwayTeamWrap = SC.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.background.default
    },
    [`&.${tableCellClasses.body}`]: {
      height: 20,
      padding: 8
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
        backgroundColor: theme.palette.background.default,
        padding: 8
    },
  }));
  
  function createPlayer(name, image = '', x = 0, y = 0, tags = [], form = 0) {
    const img = image ? image : `${name.toLowerCase()}.jpg`;
    return { name, image: img, x, y, tags, form };
  }

  

  const homePlayers = [
    createPlayer('Dubravka', '', 0, 4),
    createPlayer('Burn', '', 1, 0),
    createPlayer('Botman', '', 1, 2.5),
    createPlayer('Schar', '', 1, 5.5),
    createPlayer('Trippier', '', 1, 8),
    createPlayer('Longstaff', '', 2, 1.5),
    createPlayer('Guimaraes', '', 2.5, 4),
    createPlayer('Miley', '', 2, 6),
    createPlayer('Gordon', '', 3.5, 1),
    createPlayer('Isak', '', 4, 4),
    createPlayer('Almiron', '', 3.5, 7)
  ]

  const awayPlayers = [
    createPlayer('Ederson', '', 10, 4),
    createPlayer('Gvardiol', '', 9, 8),
    createPlayer('Ake', '', 9, 5.5),
    createPlayer('Dias', '', 9, 2.5),
    createPlayer('Walker', '', 9, 0),
    createPlayer('Kovacic', '', 8, 6),
    createPlayer('Rodri', '', 8, 2),
    createPlayer('Doku', '', 7, 7),
    createPlayer('Silva', '', 7, 4),
    createPlayer('Foden', '', 7, 1),
    createPlayer('Alvarez', '', 6, 4)
  ]
  
  const rows = [
    createPlayer('Kevin De Bruyne', 'kdb.jpg', 7, 4, ['playmaker'], '-'),
    createPlayer('Oscar Bobb', 'bobb.jpg', 7, 7, ['inverted winger'], 100),
    createPlayer('Matheus Nunes', 'nunes.jpg', 7, 4, ['box-to-box'], 100),
    createPlayer('Rico Lewis', 'lewis.jpg', 8, 2, ['inverted full-back'], 100),
    createPlayer('Jack Grealish', 'grealish.jpg', 7, 7, ['playmaker', 'winger'], 45),
  ];

export default function SubImpactSim() {

  const [activeTeamIndex, setActiveTeamIndex] = React.useState(1);
  const [activeSubOff, setActiveSubOff] = React.useState('');
  const [activeSubOn, setActiveSubOn] = React.useState('');

  function subOff(player) {
    setActiveSubOff(player)
  }
  return (
    <Container sx={{ mt: 2, minWidth: 900 }}>
        <Box padding={2} sx={{ minHeight: 400, background: "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)" }}>
            <Typography variant="h3" component="h3" gutterBottom>Sub Impact Simulator</Typography>
            <LiveScoreWrap>
              <Grid container spacing={2}>
                <Grid item xs={5.5} align="right">
                  <HomeTeamWrap onClick={() => setActiveTeamIndex(0)} style={{ background: activeTeamIndex === 0 ? 'linear-gradient(90deg, transparent 25%, rgba(255, 255, 255, 0.2))' : 'none' }}>
                    <Avatar style={{ marginRight: 10 }} alt="" src={`/assets/images/clubs/newcastle.png`} />
                    <Typography component="span">Newcastle United</Typography>
                  </HomeTeamWrap>
                </Grid>
                <Grid item xs={1}><ScoreWrap>2 - 1</ScoreWrap></Grid>
                <Grid item xs={5.5} align="left">
                  <AwayTeamWrap onClick={() => setActiveTeamIndex(1)} style={{ background: activeTeamIndex === 1 ? 'linear-gradient(-90deg, transparent 25%, rgba(255, 255, 255, 0.2))' : 'none' }}>
                    <Typography component="span">Manchester City</Typography>
                    <Avatar style={{ marginLeft: 10 }} alt="" src={`/assets/images/clubs/city.png`} />
                  </AwayTeamWrap>
                </Grid>
              </Grid>
            </LiveScoreWrap>
            <PitchOverflowWrap>
              <Pitch style={{ transform: `translateX(${-activeTeamIndex * 800}px)` }}>
                <HomePitchOverlay style={{ background: activeTeamIndex === 0 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)' }} />
                <AwayPitchOverlay style={{ background: activeTeamIndex === 1 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)' }} />
              {homePlayers.map((player, index) => (
                  <PlayerOnPitch key={player.name} style={{ left: 60 + (140 * player.x), top: 30 + (50 * player.y) }} isActive={player.name === activeSubOff}>
                    <Avatar key={index} alt={player.name} src={`/assets/images/players/${player.image}`} />
                    <Typography variant="h6" component="h6" gutterBottom>{player.name}</Typography>
                    {player.name === activeSubOff ? <Button size="small" variant="contained" color="secondary" onClick={() => subOff('')} title={`Cancel sub`}><DeleteIcon /></Button> : <Button onClick={() => subOff(player.name)} size="small" variant="contained" color="secondary" title={`See the impact of replacing ${player.name}`}><KeyboardArrowDownIcon /></Button>}
                  </PlayerOnPitch>
                ))}
                {awayPlayers.map((player, index) => (
                  <PlayerOnPitch key={player.name} style={{ left: 40 + (140 * player.x), top: 30 + (50 * player.y) }} isActive={player.name === activeSubOff}>
                    <Avatar key={index} alt={player.name} src={`/assets/images/players/${player.image}`} />
                    <Typography variant="h6" component="h6" gutterBottom>{player.name}</Typography>
                    {player.name === activeSubOff ? <Button size="small" variant="contained" color="secondary" onClick={() => subOff('')} title={`Cancel sub`}><DeleteIcon /></Button> : <Button onClick={() => subOff(player.name)} size="small" variant="contained" color="secondary" title={`See the impact of replacing ${player.name}`}><KeyboardArrowDownIcon /></Button>}
                  </PlayerOnPitch>
                ))}
              </Pitch>
            </PitchOverflowWrap>
        </Box>
      
      <Box sx={{ mt: 2 }} padding={2}>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <StyledHeaderTableRow>
                    <StyledTableCell align="center" width={1}>Sub In</StyledTableCell>
                    <StyledTableCell width={1}>&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">Traits</StyledTableCell>
                    <StyledTableCell align="left">Form</StyledTableCell>
                </StyledHeaderTableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell align="right"><Button variant="outlined" title={`See the impact of subbing in ${row.name}`}><KeyboardArrowUpIcon /></Button></StyledTableCell>
                    <StyledTableCell width={1}>
                        <Avatar alt={row.name} src={`/assets/images/players/${row.image}`} /> 
                    </StyledTableCell>
                    <StyledTableCell align="left"  width={200}>{row.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.tags.map((tag, i) => (
                      <Chip key={i} label={tag} color="primary"  style={{ textTransform: 'uppercase', color: 'white', background: "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)" }} />
                    ))}</StyledTableCell>
                    <StyledTableCell align="left" width={1}>{row.form}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}