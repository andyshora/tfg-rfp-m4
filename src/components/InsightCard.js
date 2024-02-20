import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";

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
