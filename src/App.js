import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';

import "./styles/_vars-sports.css"
import "./styles/_global.css"

import SkyTextFont from './styles/fonts/sky-regular.woff';

const fgLight = "#fff"
const skyPlPrimary = "#030c7e"
const skyPlSecondary = "#cc0f13"

const skysportsTheme = createTheme({
  "palette": {
      "primary": {
          "main": fgLight,
      },
      "secondary": {
          "main": skyPlSecondary
      },
      "text": {
          "primary": fgLight
      },
      "background": {
          "default": skyPlPrimary
      },
  },
  typography: {
    fontFamily: 'Sky Text, Arial',
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
  },
});

export default function App() {
  
  return (
    <ThemeProvider theme={skysportsTheme}>
      <CssBaseline />
      <Typography variant="h1" component="h1" gutterBottom>Hello World</Typography>
      <Typography>This is a test</Typography>
      <Button variant="contained">Hello world</Button>
    </ThemeProvider>
  )
}