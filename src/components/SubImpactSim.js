import * as React from "react";
import { styled } from "@mui/material/styles";
import chroma from "chroma-js";

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
  Chip,
  Tooltip,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubOnIcon from "@mui/icons-material/ArrowDropUp";
import SubOffIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Clear";
import InjuredIcon from "@mui/icons-material/Healing";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ChartIcon from "@mui/icons-material/Equalizer";

import { tableCellClasses } from "@mui/material/TableCell";

import InsightCard from "./InsightCard";

import {
  AchievementsWrap,
  FormCellWrap,
  PitchOverflowWrap,
  HomePitchOverlay,
  AwayPitchOverlay,
  Header,
  Pitch,
  PitchBottomTextWrap,
  SubTextWrap,
  LiveScoreWrap,
  MatchPredictionWrap,
  MatchPredictionBarWrap,
  ScoreWrap,
  GoalScorersWrap,
  PlayerOnPitch,
  HomeTeamWrap,
  AwayTeamWrap,
  HintWrap,
  InsightsChipsWrap,
  RadarWrap,
  LogoWrap,
  StatsWrap,
  PlayerInsightsWrap,
} from "./SubImpactSim.styles";

import {
  homePlayers,
  awayPlayers,
  homeSubs,
  awaySubs,
  goals,
  tfgInsightsData,
  tfgInsightsData2,
} from "../data/index";
import RadarChart from "./RadarChart";

import radarData from "../data/radar.json";

// index sub insights by player
const playerInsights = {};
const allTfgInsights = tfgInsightsData.concat(tfgInsightsData2);
homeSubs.concat(awaySubs).forEach((sub) => {
  playerInsights[sub.name] = allTfgInsights.filter(
    (insight) => insight.typeKey === sub.name
  );
});
// console.log("playerInsights", playerInsights);

const predictionColorScale = chroma.scale([
  "#FF0000",
  "#FFBF00",
  "#0bff48",
  "white",
]);

const Bench = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="rgba(255, 255, 255, 0.3)"
  >
    <path
      d="M21 6H3v5h18V6zM2 13v2h2v4h2v-4h12v4h2v-4h2v-2H2z"
      fill="var(--on-surface-nLv3)"
      fillRule="evenodd"
    ></path>
  </svg>
);
const Assist = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="lime">
    <path
      d="m10.5 13.01 1.5 1.5-2.5.5-.5-.5 1.5-1.5zM7.92 1v1l2 1h2l1 6 1.5 4.5-1 1-10-10L5.92 1h2zM8 10.51l1.5 1.5-2.5.5-.5-.5 1.5-1.5zm-2.5-2.5L7 9.51l-2.5.5-.5-.5 1.5-1.5zm5.93.19H9.08l1.41 1.41h1.18l-.24-1.41zM3 5.51l1.5 1.5-2.5.5-.5-.5L3 5.51zm7.91-.01H6.43l1.41 1.41h3.31l-.24-1.41z"
      fill="var(--secondary-default)"
      fillRule="evenodd"
    ></path>
  </svg>
);
const Goal = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="lime">
    <path
      d="M8 1c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm-.01 1.73c-1.35 0-2.57.52-3.5 1.35l.92.55-.66 2.48-2.01.72V8c0 .67.13 1.31.36 1.9l.94-.48 1.55 1.73-.25 1.38c.78.46 1.69.73 2.66.73a5.29 5.29 0 0 0 5.26-5.28c0-1.51-.65-2.87-1.67-3.83l-.88.81-2.72-1.15.29-1.07c-.1-.01-.19-.01-.29-.01zm2.51 4.1 1.39 2.54-2.07 2.29-2.08-.81V7.83l2.76-1z"
      fill="var(--secondary-default)"
      fillRule="evenodd"
    ></path>
  </svg>
);

// const FormIconsWrap = SC.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
//   `
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.default,
  },
  [`&.${tableCellClasses.body}`]: {
    height: 20,
    padding: 8,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.background.default,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  // remove cell border
  "td, th": {
    border: 0,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledHeaderTableRow = styled(TableRow)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.background.default,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.background.default,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.background.default,
  },
  "td, th": {
    backgroundColor: theme.palette.background.default,
    padding: 8,
  },
}));

const startingPredictions = [62, 27.5, 10.5];

export default function SubImpactSim() {
  const [activeTeamIndex, setActiveTeamIndex] = React.useState(1);
  const [activeSubOff, setActiveSubOff] = React.useState("");
  const [activeSubOn, setActiveSubOn] = React.useState("");
  const [activeSubRow, setActiveSubRow] = React.useState("");
  const [activeImpact, setActiveImpact] = React.useState([0, 0, 0]);
  const [showHints, setShowHints] = React.useState(true);

  function handleHintTapped() {
    setShowHints(false);
  }

  const preds = React.useMemo(() => {
    return [
      startingPredictions[0] + activeImpact[0],
      startingPredictions[1] + activeImpact[1],
      startingPredictions[2] + activeImpact[2],
    ];
  }, [activeImpact]);

  function subOff(player) {
    setActiveSubOff(player);
  }
  function subOn(player) {
    setActiveSubOn(player);

    const activePlayers = activeTeamIndex ? awaySubs : homeSubs;
    const activePlayer = activePlayers.filter((p) => p.name === player);

    if (activePlayer.length) {
      setActiveImpact(activePlayer[0].impactOnMatch);
    } else {
      setActiveImpact([0, 0, 0]);
    }
  }
  function selectPlayerStats(player) {
    if (activeSubRow === player) {
      setActiveSubRow("");
    } else {
      setActiveSubRow(player);
    }
  }
  function getPlayersOnPitch(players, leftOffset) {
    return players.map((player, index) => (
      <PlayerOnPitch
        key={player.name}
        style={{ left: leftOffset + 140 * player.x, top: 50 + 50 * player.y }}
        isActive={player.name === activeSubOff}
        isHidden={activeSubOff === player.name && activeSubOn}
      >
        <Avatar
          key={index}
          alt={player.name}
          src={`/assets/images/players/${player.image}`}
        />
        <Typography variant="h6" component="h6" gutterBottom>
          {player.name}
        </Typography>
        {player.name === activeSubOff ? (
          <Button
            size="small"
            variant="subOffCancel"
            color="secondary"
            onClick={() => subOff("")}
            title={`Cancel sub`}
          >
            <DeleteIcon />
          </Button>
        ) : (
          <Button
            disabled={!!activeSubOn}
            onClick={() => subOff(player.name)}
            size="small"
            variant="subOff"
            color="secondary"
            title={`See the impact of replacing ${player.name}`}
          >
            <KeyboardArrowDownIcon />
          </Button>
        )}
      </PlayerOnPitch>
    ));
  }
  function getSubsTable(players) {
    return (
      <TableBody>
        {players.map((row) => (
          <React.Fragment key={`subs-row-${row.name}`}>
            <StyledTableRow
              style={{
                background:
                  row.name === activeSubOn ? "rgba(100, 255, 100, 0.2)" : "",
              }}
            >
              <StyledTableCell align="right">
                <Tooltip
                  title={
                    !activeSubOff || activeSubOn
                      ? "Select a player to sub off first"
                      : `See the impact of subbing in ${row.name}`
                  }
                  variant="light"
                  placement="top"
                  color="secondary"
                  arrow
                >
                  <span>
                    <Button
                      color="primary"
                      disabled={!activeSubOff || activeSubOn}
                      onClick={() => subOn(row.name)}
                      variant="outlined"
                      title={""}
                    >
                      <KeyboardArrowUpIcon />
                    </Button>
                  </span>
                </Tooltip>
              </StyledTableCell>
              <StyledTableCell width={1}>
                <Avatar
                  alt={row.name}
                  src={`/assets/images/players/${row.image}`}
                />
              </StyledTableCell>
              <StyledTableCell align="left" width={200}>
                {row.name}{" "}
                {row.name === activeSubOn ? (
                  <SubOnIcon
                    style={{ color: "lime", top: 7, position: "relative" }}
                  />
                ) : (
                  ""
                )}
              </StyledTableCell>
              <StyledTableCell align="left" style={{ paddingLeft: 0 }}>
                <Tooltip
                  title="Open additional player stats"
                  variant="light"
                  placement="top"
                  color="secondary"
                  arrow
                >
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => selectPlayerStats(row.name)}
                  >
                    <ChartIcon />
                  </Button>
                </Tooltip>
              </StyledTableCell>
              <StyledTableCell align="left">
                <InsightsChipsWrap>
                  {playerInsights[row.name].map((insight, i) => (
                    <Tooltip
                      key={`insight-tfg-${row.name}-${i}`}
                      title={`${insight.heading}: ${insight.content}`}
                      variant="light"
                      placement="top"
                      color="secondary"
                      arrow
                    >
                      <Chip
                        label={
                          <LightbulbIcon
                            style={{
                              color: "white",
                              width: 14,
                              height: 14,
                              marginTop: 4,
                            }}
                          />
                        }
                        color="primary"
                        variant="outlined"
                        size="small"
                        style={{ marginRight: 3 }}
                      />
                    </Tooltip>
                  ))}
                </InsightsChipsWrap>
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.tags.map((tag, i) => (
                  <Chip
                    size="small"
                    key={i}
                    label={tag}
                    color="primary"
                    style={{
                      color: "white",
                      background:
                        "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)",
                    }}
                  />
                ))}
              </StyledTableCell>
              <StyledTableCell align="left">{row.quality}</StyledTableCell>
              <StyledTableCell
                align="left"
                width={250}
                style={{ paddingLeft: 0 }}
              >
                <Grid container spacing={0}>
                  {row.recentGames.map(
                    ([starting, rating, achievements = []], i) => {
                      const benchOrInjured =
                        starting === "bench" ? (
                          <Bench />
                        ) : (
                          <InjuredIcon
                            style={{
                              width: 16,
                              height: 16,
                              marginTop: 10,
                              opacity: 0.6,
                            }}
                          />
                        );
                      return (
                        <Grid item xs={3} key={i}>
                          <FormCellWrap>
                            {rating >= 0 ? (
                              <Chip label={rating} />
                            ) : (
                              benchOrInjured
                            )}

                            <AchievementsWrap>
                              {achievements.map((ach, i) => {
                                switch (ach) {
                                  case "goal":
                                    return (
                                      <Goal key={`${row.name}-ach-${i}`} />
                                    );
                                  case "assist":
                                    return (
                                      <Assist key={`${row.name}-ach-${i}`} />
                                    );
                                  default:
                                    return "";
                                }
                              })}
                            </AchievementsWrap>
                          </FormCellWrap>
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow
              style={{
                display: activeSubRow === row.name ? "table-row" : "none",
                background: "#00043B",
              }}
            >
              <StyledTableCell colSpan={8}>
                <StatsWrap>
                  <div style={{ position: "absolute", right: 0 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      onClick={() => setActiveSubRow("")}
                    >
                      Close
                    </Button>
                  </div>
                  <RadarWrap>
                    <Typography variant="h6" component="h6">
                      {row.name} vs Premier League midfielders
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      style={{ fontStyle: "italic" }}
                      gutterBottom
                    >
                      over the last 3 seasons (percentile)
                    </Typography>

                    <RadarChart data={radarData} player={awaySubs[0].name} />
                  </RadarWrap>
                  <PlayerInsightsWrap>
                    {playerInsights[row.name].length > 0 ? (
                      <Typography variant="h4">Live Player Insights</Typography>
                    ) : (
                      ""
                    )}
                    {playerInsights[row.name].map((insight, i) => (
                      <InsightCard
                        heading={insight.heading}
                        img={insight.img}
                        type={insight.type}
                      >
                        {insight.content}
                      </InsightCard>
                    ))}
                  </PlayerInsightsWrap>
                </StatsWrap>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow
              style={{ display: activeSubRow === row.name ? "block" : "none" }}
            ></StyledTableRow>
          </React.Fragment>
        ))}
      </TableBody>
    );
  }
  function getSubCell(teamIndex) {
    if (!activeSubOn) {
      setActiveSubOff("");
      setActiveSubOn("");
      return;
    }
    const subData =
      teamIndex === 0
        ? homeSubs.filter((sub) => sub.name === activeSubOn)
        : awaySubs.filter((sub) => sub.name === activeSubOn);
    const subOffPlayer =
      teamIndex === 0
        ? homePlayers.filter((player) => player.name === activeSubOff)
        : awayPlayers.filter((player) => player.name === activeSubOff);
    if (
      subData.length === 0 ||
      subOffPlayer.length === 0 ||
      !subOffPlayer ||
      !Object.keys(subOffPlayer[0]).includes("x")
    ) {
      setActiveSubOff("");
      setActiveSubOn("");
      return;
    }
    const player = subData[0];
    const newX = subOffPlayer[0].x;
    const newY = subOffPlayer[0].y;

    const leftOffset = activeTeamIndex ? 40 : 60;
    return (
      <PlayerOnPitch
        key={player.name}
        style={{ left: leftOffset + 140 * newX, top: 50 + 50 * newY }}
        isActive={player.name === activeSubOff}
        isSub={true}
      >
        <Avatar
          alt={player.name}
          src={`/assets/images/players/${player.image}`}
        />
        <Typography variant="h6" component="h6" gutterBottom>
          {player.name}
        </Typography>
        <Button
          size="small"
          variant="subOffCancel"
          color="secondary"
          onClick={() => {
            subOff("");
            subOn("");
            setActiveImpact([0, 0, 0]);
          }}
          title={`Reset`}
        >
          <DeleteIcon />
        </Button>
      </PlayerOnPitch>
    );
  }
  return (
    <div style={{ minWidth: 800 }}>
      <Box
        sx={{
          minHeight: 400,
          background:
            "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)",
        }}
      >
        <Header>
          <LogoWrap>
            <img
              src="/assets/images/skysports-pl-logo.svg"
              alt="Sky Sports Premier League"
            />
          </LogoWrap>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            style={{
              padding: "1.5rem 0 0",
              textAlign: "left",
            }}
          >
            Sub Impact
          </Typography>
        </Header>
        <PitchOverflowWrap>
          <Pitch
            style={{ transform: `translateX(${-activeTeamIndex * 800}px)` }}
          >
            <HomePitchOverlay
              style={{
                background:
                  activeTeamIndex === 0
                    ? "rgba(0, 0, 0, 0.1)"
                    : "rgba(0, 0, 0, 0)",
              }}
            >
              <svg
                width="800"
                height="600"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="penalty-box">
                  <rect
                    x="30"
                    y="170"
                    width="120"
                    height="260"
                    fill="none"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
                <g id="penalty-box-d">
                  <path
                    d="M 150 250 c 50 20 50 80 0 100"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
                <g id="six-yard-box">
                  <rect
                    x="30"
                    y="240"
                    width="30"
                    height="120"
                    fill="none"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
                <g id="center-circle">
                  <circle
                    cx="800"
                    cy="300"
                    r="80"
                    fill="none"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </HomePitchOverlay>
            <AwayPitchOverlay
              style={{
                background:
                  activeTeamIndex === 1
                    ? "rgba(0, 0, 0, 0.1)"
                    : "rgba(0, 0, 0, 0)",
              }}
            >
              <svg
                width="800"
                height="600"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="penalty-box">
                  <rect
                    x="650"
                    y="170"
                    width="120"
                    height="260"
                    fill="none"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
                <g id="penalty-box-d">
                  <path
                    d="M 650 250 c -50 20 -50 80 0 100"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
                <g id="six-yard-box">
                  <rect
                    x="740"
                    y="240"
                    width="30"
                    height="120"
                    fill="none"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
                <g id="center-circle">
                  <circle
                    cx="0"
                    cy="300"
                    r="80"
                    fill="none"
                    stroke="#2a3076"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </AwayPitchOverlay>
            {getPlayersOnPitch(homePlayers, 60)}
            {getPlayersOnPitch(awayPlayers, 40)}
            {activeSubOff && activeSubOn ? getSubCell(activeTeamIndex) : ""}
          </Pitch>
          <PitchBottomTextWrap>
            {activeSubOn && activeSubOff ? (
              <>
                <SubTextWrap>
                  <SubOffIcon style={{ color: "#cc0f13" }} />
                  {activeSubOff}
                </SubTextWrap>
                <SubTextWrap>
                  {activeSubOn} <SubOnIcon style={{ color: "lime" }} />
                </SubTextWrap>
                <SubTextWrap>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      subOff("");
                      subOn("");
                    }}
                    title={`Reset`}
                  >
                    Reset
                  </Button>
                </SubTextWrap>
              </>
            ) : (
              ""
            )}
          </PitchBottomTextWrap>
        </PitchOverflowWrap>
      </Box>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(0deg, transparent, #00000059)",
          borderRadius: 5,
        }}
      >
        <Container maxWidth="lg">
          <LiveScoreWrap>
            <Grid container spacing={2} style={{}}>
              <Grid item xs={5.5} align="right">
                <HomeTeamWrap
                  onClick={() => setActiveTeamIndex(0)}
                  style={{
                    background:
                      activeTeamIndex === 0
                        ? "linear-gradient(90deg, transparent 25%, rgba(255, 255, 255, 0.2))"
                        : "none",
                  }}
                >
                  <Avatar
                    style={{ marginRight: 10 }}
                    alt=""
                    src={`/assets/images/clubs/newcastle.png`}
                  />
                  <Typography component="span">Newcastle United</Typography>
                  <GoalScorersWrap>
                    {goals
                      .filter((g) => g.homeOrAway === 0)
                      .map((g, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          component="span"
                          style={{
                            fontSize: "0.6rem",
                            fontStyle: "italic",
                            marginLeft: 10,
                          }}
                        >
                          {g.scorer} {g.mins}'
                        </Typography>
                      ))}
                  </GoalScorersWrap>
                </HomeTeamWrap>
              </Grid>
              <Grid item xs={1} align="center">
                <ScoreWrap mins={62}>2 - 1</ScoreWrap>
              </Grid>
              <Grid item xs={5.5} align="left">
                <AwayTeamWrap
                  onClick={() => setActiveTeamIndex(1)}
                  style={{
                    background:
                      activeTeamIndex === 1
                        ? "linear-gradient(-90deg, transparent 25%, rgba(255, 255, 255, 0.2))"
                        : "none",
                  }}
                >
                  <Typography component="span">Manchester City</Typography>
                  <Avatar
                    style={{ marginLeft: 10 }}
                    alt=""
                    src={`/assets/images/clubs/city.png`}
                  />
                  <GoalScorersWrap>
                    {goals
                      .filter((g) => g.homeOrAway === 1)
                      .map((g, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          component="span"
                          style={{
                            fontSize: "0.6rem",
                            fontStyle: "italic",
                            marginRight: 10,
                          }}
                        >
                          {g.scorer} {g.mins}'
                        </Typography>
                      ))}
                  </GoalScorersWrap>
                </AwayTeamWrap>
              </Grid>
            </Grid>
          </LiveScoreWrap>
        </Container>
      </div>
      <Container maxWidth="lg">
        <MatchPredictionWrap>
          <Grid
            container
            spacing={2}
            style={{
              background: "linear-gradient(0deg, transparent, #00000059)",
              borderRadius: 5,
            }}
          >
            <Grid item xs={4} align="center">
              <MatchPredictionBarWrap
                delta={activeImpact[0]}
                deltaShowing={activeSubOff && activeSubOn}
                deltaColor={
                  activeImpact[0] > 0
                    ? "white"
                    : predictionColorScale(activeImpact[0] / 100).css()
                }
              >
                <div
                  style={{
                    width: `${preds[0]}%`,
                    background: predictionColorScale(preds[0] / 100).css(),
                  }}
                ></div>
              </MatchPredictionBarWrap>
              <Typography
                variant="h6"
                component="h6"
                style={{
                  fontFamily: "monospace",
                  marginTop: 4,
                  fontSize: "0.8rem",
                }}
              >
                Home Win: {preds[0]}%
              </Typography>
            </Grid>
            <Grid item xs={4} align="center">
              <MatchPredictionBarWrap
                delta={activeImpact[1]}
                deltaShowing={activeSubOff && activeSubOn}
                deltaColor={
                  activeImpact[1] > 0
                    ? "white"
                    : predictionColorScale(activeImpact[1] / 100).css()
                }
              >
                <div
                  style={{
                    width: `${preds[1]}%`,
                    background: predictionColorScale(preds[1] / 100).css(),
                  }}
                ></div>
              </MatchPredictionBarWrap>
              <Typography
                variant="h6"
                component="h6"
                style={{
                  fontFamily: "monospace",
                  marginTop: 4,
                  fontSize: "0.8rem",
                }}
              >
                Draw: {preds[1]}%
              </Typography>
            </Grid>
            <Grid item xs={4} align="center">
              <MatchPredictionBarWrap
                delta={activeImpact[2]}
                deltaShowing={activeSubOff && activeSubOn}
                deltaColor={
                  activeImpact[2] > 0
                    ? "white"
                    : predictionColorScale(activeImpact[2] / 100).css()
                }
              >
                <div
                  style={{
                    width: `${preds[2]}%`,
                    background: predictionColorScale(preds[2] / 100).css(),
                  }}
                ></div>
              </MatchPredictionBarWrap>
              <Typography
                variant="h6"
                component="h6"
                style={{
                  fontFamily: "monospace",
                  marginTop: 4,
                  fontSize: "0.8rem",
                }}
              >
                Away Win: {preds[2]}%
              </Typography>
            </Grid>
          </Grid>
        </MatchPredictionWrap>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ mt: 2 }} padding={2}>
          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <StyledHeaderTableRow>
                  <StyledTableCell align="center" width={1}>
                    Sub In
                  </StyledTableCell>
                  <StyledTableCell width={1}>&nbsp;</StyledTableCell>
                  <StyledTableCell align="left">&nbsp;</StyledTableCell>
                  <StyledTableCell align="left">Stats</StyledTableCell>
                  <StyledTableCell align="left">Insights</StyledTableCell>
                  <StyledTableCell align="left">Traits</StyledTableCell>
                  <StyledTableCell align="left">
                    <Tooltip
                      title="Player quality rank in the Premier League relative to others in the same position. For players aged under 23, we benchmark relative to other U23s in the same position."
                      variant="light"
                      placement="top"
                      color="secondary"
                      arrow
                    >
                      <>Quality Rank</>
                    </Tooltip>
                  </StyledTableCell>
                  <StyledTableCell align="left">Form</StyledTableCell>
                </StyledHeaderTableRow>
              </TableHead>
              {getSubsTable(
                activeTeamIndex ? awaySubs : homeSubs,
                activeTeamIndex
              )}
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <HintWrap
        onClick={handleHintTapped}
        style={{ opacity: showHints ? 1 : 0, top: 610 }}
      >
        <div>
          <Typography variant="caption" component="p" gutterBottom>
            Select team
          </Typography>
        </div>
        <Typography variant="caption" component="em" gutterBottom>
          Hint: select Man City
        </Typography>
      </HintWrap>
      <HintWrap
        onClick={handleHintTapped}
        style={{ opacity: showHints ? 1 : 0, top: 220 }}
      >
        <div>
          <Typography variant="caption" component="p" gutterBottom>
            Select player to sub off
          </Typography>
        </div>
        <Typography variant="caption" component="em" gutterBottom>
          Hint: replace Silva
        </Typography>
      </HintWrap>
      <HintWrap
        onClick={handleHintTapped}
        style={{ opacity: showHints ? 1 : 0, top: 700 }}
      >
        <div>
          <Typography variant="caption" component="p" gutterBottom>
            Select replacement
          </Typography>
        </div>
        <Typography variant="caption" component="em" gutterBottom>
          Hint: bring on Kevin De Bruyne
        </Typography>
      </HintWrap>
    </div>
  );
}
