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
    Grid,
    Chip
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SubOnIcon from '@mui/icons-material/ArrowDropUp';
import SubOffIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Clear';

import { tableCellClasses } from '@mui/material/TableCell';

// const Bench = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.3)" class="sc-uVWWZ oyaGW"><path d="M21 6H3v5h18V6zM2 13v2h2v4h2v-4h12v4h2v-4h2v-2H2z" fill="var(--on-surface-nLv3)" fill-rule="evenodd"></path></svg>
// const Assist = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="lime" class="sc-uVWWZ oyaGW"><path d="m10.5 13.01 1.5 1.5-2.5.5-.5-.5 1.5-1.5zM7.92 1v1l2 1h2l1 6 1.5 4.5-1 1-10-10L5.92 1h2zM8 10.51l1.5 1.5-2.5.5-.5-.5 1.5-1.5zm-2.5-2.5L7 9.51l-2.5.5-.5-.5 1.5-1.5zm5.93.19H9.08l1.41 1.41h1.18l-.24-1.41zM3 5.51l1.5 1.5-2.5.5-.5-.5L3 5.51zm7.91-.01H6.43l1.41 1.41h3.31l-.24-1.41z" fill="var(--secondary-default)" fill-rule="evenodd"></path></svg>
// const Goal = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="lime" class="sc-uVWWZ oyaGW"><path d="M8 1c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm-.01 1.73c-1.35 0-2.57.52-3.5 1.35l.92.55-.66 2.48-2.01.72V8c0 .67.13 1.31.36 1.9l.94-.48 1.55 1.73-.25 1.38c.78.46 1.69.73 2.66.73a5.29 5.29 0 0 0 5.26-5.28c0-1.51-.65-2.87-1.67-3.83l-.88.81-2.72-1.15.29-1.07c-.1-.01-.19-.01-.29-.01zm2.51 4.1 1.39 2.54-2.07 2.29-2.08-.81V7.83l2.76-1z" fill="var(--secondary-default)" fill-rule="evenodd"></path></svg>

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
    
    &::before {
      content: '';
      border: 1px solid rgba(255, 255, 255, 0.2);
      width: 1540px;
      height: 540px;
      position: absolute;
      left: 30px;
      top: 30px;
    }
`

const PitchBottomTextWrap = SC.div`
  position: absolute;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubTextWrap = SC.div`
  display: inline-flex;
  font-size: 0.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 10px;
`

const LiveScoreWrap = SC.div``
const ScoreWrap = SC.div`
  background: linear-gradient(-192deg, #cd2529 0%, #be2022 48.5%, #b70709 49%, #a00000 100%);
  border-radius: 5px;
  padding: 8px;
`
const PlayerOnPitch = SC.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    display: ${p => p.isHidden ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    color: #fff;
    width: 80px;
    padding: 4px;
    border-radius: 5px;
    transition: background 0.3s ease;
    background: ${p => p.isActive || p.isSub ? 'rgba(255,255,255,0.15)' : 'none'};
    border: ${p => p.isSub ? 'dashed 1px rgb(255 255 255 / 40%)' : 'dashed 1px rgba(255,255,255,0)'};

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

// const FormIconsWrap = SC.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
//   `
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

  const homeSubs = [
    createPlayer('Hall', '', 3.5, 1, ['winger'], 100),
    createPlayer('Ritchie', '', 3.5, 7, ['winger'], 100),
    createPlayer('Lascelles', '', 3.5, 7, ['leader', 'defensive rock'], 100)
  ]
  
  const awaySubs = [
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
  function subOn(player) {
    setActiveSubOn(player)
  }
  function getPlayersOnPitch(players, leftOffset) {
    return players.map((player, index) => (
        <PlayerOnPitch key={player.name} style={{ left: leftOffset + (140 * player.x), top: 40 + (50 * player.y) }} isActive={player.name === activeSubOff} isHidden={activeSubOff === player.name && activeSubOn}>
          <Avatar key={index} alt={player.name} src={`/assets/images/players/${player.image}`} />
          <Typography variant="h6" component="h6" gutterBottom>{player.name}</Typography>
          {player.name === activeSubOff ? <Button size="small" variant="subOffCancel" color="secondary" onClick={() => subOff('')} title={`Cancel sub`}><DeleteIcon /></Button> : <Button disabled={activeSubOn} onClick={() => subOff(player.name)} size="small" variant="subOff" color="secondary" title={`See the impact of replacing ${player.name}`}><KeyboardArrowDownIcon /></Button>}
        </PlayerOnPitch>
      ))
  }
  function getSubsTable(players, teamIndex) {
    return (
      <TableBody>
        {players.map((row) => (
            <StyledTableRow key={row.name} style={{ background: row.name === activeSubOn ? 'rgba(100, 255, 100, 0.2)' : '' }}>
                <StyledTableCell align="right"><Button disabled={activeSubOn} onClick={() => subOn(row.name)} variant="outlined" title={`See the impact of subbing in ${row.name}`}><KeyboardArrowUpIcon /></Button></StyledTableCell>
                <StyledTableCell width={1}>
                    <Avatar alt={row.name} src={`/assets/images/players/${row.image}`} /> 
                </StyledTableCell>
                <StyledTableCell align="left"  width={200}>{row.name} {row.name === activeSubOn ? <SubOnIcon style={{ color: "lime", top: 7, position: 'relative' }} /> : ''}</StyledTableCell>
                <StyledTableCell align="left">{row.tags.map((tag, i) => (
                  <Chip key={i} label={tag} color="primary"  style={{ textTransform: 'uppercase', color: 'white', background: "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)" }} />
                ))}</StyledTableCell>
                <StyledTableCell align="left" width={1}>{row.form}</StyledTableCell>
            </StyledTableRow>
        ))}
      </TableBody>
    )
  }
  function getSubCell(teamIndex) {
    if (!activeSubOn) {
      setActiveSubOff('');
      setActiveSubOn('');
      return
    }
    const subData = teamIndex === 0 ? homeSubs.filter(sub => sub.name === activeSubOn) : awaySubs.filter(sub => sub.name === activeSubOn);
    const subOffPlayer = teamIndex === 0 ? homePlayers.filter(player => player.name === activeSubOff) : awayPlayers.filter(player => player.name === activeSubOff);
    if (subData.length === 0 || subOffPlayer.length === 0 || !subOffPlayer || !Object.keys(subOffPlayer[0]).includes('x')) {
      setActiveSubOff('');
      setActiveSubOn('');
      return
    }
    const player = subData[0];
    const newX = subOffPlayer[0].x;
    const newY = subOffPlayer[0].y;

    const leftOffset = activeTeamIndex ? 40 : 60;
    return (
      (
        <PlayerOnPitch key={player.name} style={{ left: leftOffset + (140 * newX), top: 30 + (50 * newY) }} isActive={player.name === activeSubOff} isSub={true}>
          <Avatar alt={player.name} src={`/assets/images/players/${player.image}`} />
          <Typography variant="h6" component="h6" gutterBottom>{player.name}</Typography>
          <Button size="small" variant="subOffCancel" color="secondary" onClick={() => {subOff(''); subOn('');}} title={`Reset`}><DeleteIcon /></Button>
        </PlayerOnPitch>
      )
    )
  }
  return (
    <Container sx={{ minWidth: 900 }}>
        <Box sx={{ minHeight: 400, background: "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)" }}>
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
              {getPlayersOnPitch(homePlayers, 60)}
              {getPlayersOnPitch(awayPlayers, 40)}
              {activeSubOff && activeSubOn ? getSubCell(activeTeamIndex) : ''}
              </Pitch>
              <PitchBottomTextWrap>
                  {activeSubOn && activeSubOff ? (
                    <>
                      <SubTextWrap>
                        <SubOffIcon style={{ color: "#cc0f13" }} />{activeSubOff}
                      </SubTextWrap>
                      <SubTextWrap>{activeSubOn} <SubOnIcon style={{ color: "lime" }} />
                      </SubTextWrap>
                      <SubTextWrap>
                      <Button size="small" variant="outlined" color="primary" onClick={() => {subOff(''); subOn('');}} title={`Reset`}>Reset</Button>
                      </SubTextWrap>
                    </> ): ''}
                </PitchBottomTextWrap>
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
            {getSubsTable(activeTeamIndex ? awaySubs : homeSubs, activeTeamIndex)}
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}