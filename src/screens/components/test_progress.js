import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TestProgress({ value }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", margin: 1.3, marginTop: 2 }}
    >
      <Box sx={{ width: "90%", mr: 1 }}>
        <LinearProgress
          sx={{ height: 15, borderRadius: 10 }}
          variant="determinate"
          value={value}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body1" color="text.secondary">
          {Math.round(value)}%
        </Typography>
      </Box>
    </Box>
  );
}
