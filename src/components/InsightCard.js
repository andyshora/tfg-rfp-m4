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
import { Refresh } from "@mui/icons-material";

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
        <Refresh style={{ width: 16, height: 16, marginRight: 5 }} /> Refresh
        Feed
      </Button>
    </Box>
  );
};

export default function InsightCard({
  heading = "Heading",
  img = "",
  children = null,
}) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
