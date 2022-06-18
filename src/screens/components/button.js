import React from "react";
import Button from "@mui/material/Button";

export default function PageButton({ onClick, title }) {
  return (
    <Button
      variant="contained"
      style={{
        borderRadius: 15,
        width: 130,
        fontSize: 18,
        fontWeight: 700,
        margin: 10,
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
