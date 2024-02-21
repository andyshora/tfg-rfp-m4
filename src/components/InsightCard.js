import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import PlayerIcon from "@mui/icons-material/Man4";
import TeamIcon from "@mui/icons-material/Groups";
import ManagerIcon from "@mui/icons-material/School";

import styled from "@emotion/styled";

const IconWrap = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0;
  display: none;
`;

function getIcon(type) {
  switch (type) {
    case "player":
      return (
        <IconWrap>
          <PlayerIcon
            style={{ width: 24, height: 24, color: "rgba(255, 255, 255, 0.2)" }}
          />
        </IconWrap>
      );
    case "team":
      return (
        <IconWrap>
          <TeamIcon
            style={{ width: 24, height: 24, color: "rgba(255, 255, 255, 0.2)" }}
          />
        </IconWrap>
      );
    case "manager":
      return (
        <IconWrap>
          <ManagerIcon
            style={{ width: 24, height: 24, color: "rgba(255, 255, 255, 0.2)" }}
          />
        </IconWrap>
      );
    default:
      return null;
  }
}

export const LoadMoreInsightsBox = ({ total = 0, onRefresh }) => {
  return (
    <Box
      sx={{
        display: total > 0 ? "flex" : "",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.1)",
        color: "white",
        cursor: "pointer",
        width: "100%",
        padding: "1rem 1rem",
        margin: "2rem 0",
        borderTop: "1px dashed rgba(255, 255, 255, 0.2)",
        borderBottom: "1px dashed rgba(255, 255, 255, 0.2)",
      }}
    >
      <Typography variant="body2">
        {total} new insight{total !== 1 ? "s" : ""} have arrrived
      </Typography>
      <Button
        variant="text"
        size="small"
        style={{ marginTop: 5 }}
        onClick={onRefresh}
      >
        <RefreshIcon style={{ width: 16, height: 16, marginRight: 5 }} />{" "}
        Refresh Feed
      </Button>
    </Box>
  );
};

export default function InsightCard({
  heading = "Heading",
  img = "",
  children = null,
  type = "player",
}) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", position: "relative" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color={"rgb(255 255 255 / 60%)"}>
            {children}
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 2 }}>
          <Typography
            variant="body2"
            color={"rgb(255 255 255 / 60%)"}
            style={{ fontStyle: "italic" }}
          >
            Source: TFG Insights
          </Typography>
        </CardActions>
        {getIcon(type)}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 86, minHeight: 140, background: "white" }}
        image={img}
        alt=""
      />
    </Card>
  );
}
