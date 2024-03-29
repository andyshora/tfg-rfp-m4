import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import SubImpactSim from "./components/SubImpactSim";

import SkyTextFont from "./styles/fonts/sky-regular.woff";
import {
  Badge,
  Button,
  Grid,
  IconButton,
  Typography,
  CssBaseline,
  SwipeableDrawer,
} from "@mui/material";

import {
  AppWrap,
  FeedHandleWrap,
  FeedWrap,
  FeedStickyHeader,
  FeedGutter,
} from "./App.styles";
import InsightCard, { LoadMoreInsightsBox } from "./components/InsightCard";
import { tfgInsightsData, tfgInsightsData2 } from "./data";
import ChatIcon from "@mui/icons-material/Chat";

import "./styles/_vars-sports.css";
import "./styles/_global.css";

const fgLight = "#fff";
const skyPlPrimary = "#030c7e";
const skyPlSecondary = "#cc0f13";

const skysportsTheme = createTheme({
  palette: {
    primary: {
      main: fgLight,
    },
    secondary: {
      main: skyPlSecondary,
    },
    text: {
      primary: fgLight,
    },
    background: {
      default: skyPlPrimary,
    },
  },
  typography: {
    fontFamily: "Sky Text, Arial",
    h1: {
      fontSize: "3rem",
      fontWeight: 400,
      color: fgLight,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 400,
      color: fgLight,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 400,
      color: fgLight,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: fgLight,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: fgLight,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 400,
      color: fgLight,
    },
    body1: {
      fontSize: "1.375rem",
      fontWeight: 400,
      color: fgLight,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: fgLight,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
      color: fgLight,
      background:
        "linear-gradient(-192deg, #1d238a 0%, #222677 48.5%, #090f68 49%, #0e1151 100%)",
      textShadow: "0 1px 1px rgba(0, 0, 0, 0.3)",

      "&.MuiButton-secondary": {
        background:
          "linear-gradient(-192deg, #cd2529 0%, #be2022 48.5%, #b70709 49%, #a00000 100%)",
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1d258b",
          color: "white",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Sky Text';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Sky Text'), local('Sky Text'), url(${SkyTextFont}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "white",
          color: "black",
          fontSize: "1rem",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "subOff" },
          style: {
            textTransform: "none",
            width: 16,
            padding: "2px",
            minWidth: 36,
          },
        },
        {
          props: { variant: "subOffCancel" },
          style: {
            textTransform: "none",
            width: 16,
            padding: "2px",
            minWidth: 36,
          },
        },
      ],
    },
  },
});

export default function App() {
  const [feedDrawerOpen, setFeedDrawerOpen] = React.useState(false);
  const [newInsights, setNewInsights] = React.useState(tfgInsightsData2);
  const [allInsights, setAllInsights] = React.useState(tfgInsightsData);
  function toggleDrawer(open) {
    setFeedDrawerOpen(open);
  }
  function refreshInsights() {
    setNewInsights([]);
    setAllInsights([...newInsights, ...allInsights]);
  }
  return (
    <ThemeProvider theme={skysportsTheme}>
      <AppWrap>
        <CssBaseline />
        <div>
          <SubImpactSim />
        </div>
        <FeedHandleWrap>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => toggleDrawer(true)}
            variant="h5"
          >
            Open TFG Insights
            <IconButton aria-label="cart">
              <Badge badgeContent={allInsights.length} color="secondary">
                <ChatIcon style={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Typography>
        </FeedHandleWrap>
        <SwipeableDrawer
          anchor={"right"}
          open={feedDrawerOpen}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
          hideBackdrop={true}
          transitionDuration={{ enter: 500, exit: 500 }}
          variant="persistent"
          style={{
            background: "#0e1151",
          }}
        >
          <FeedWrap>
            <FeedStickyHeader>
              <div style={{ position: "absolute", right: "1rem", zIndex: 2 }}>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => toggleDrawer(false)}
                >
                  Close
                </Button>
              </div>
              <FeedGutter>
                <Typography variant="h4" component="h4" gutterBottom>
                  <span>TFG Insights Feed</span>
                </Typography>
              </FeedGutter>
              {newInsights && newInsights.length > 0 && (
                <LoadMoreInsightsBox
                  onRefresh={refreshInsights}
                  total={newInsights.length}
                />
              )}
            </FeedStickyHeader>
            <Grid container spacing={2}>
              {allInsights.map((insight, i) => (
                <Grid
                  item
                  xs={12}
                  key={`insight-${i}`}
                  style={{ padding: "0 1rem 1rem 2rem" }}
                >
                  <InsightCard
                    heading={insight.heading}
                    img={insight.img}
                    type={insight.type}
                  >
                    {insight.content}
                  </InsightCard>
                </Grid>
              ))}
            </Grid>
          </FeedWrap>
        </SwipeableDrawer>
      </AppWrap>
    </ThemeProvider>
  );
}
