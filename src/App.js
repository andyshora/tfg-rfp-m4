import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import SubImpactSim from "./components/SubImpactSim";
import { Grid, Container, Box } from "@mui/material";

import "./styles/_vars-sports.css";
import "./styles/_global.css";

import SkyTextFont from "./styles/fonts/sky-regular.woff";

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
  return (
    <ThemeProvider theme={skysportsTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Box textAlign="center">
              <SubImpactSim />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
