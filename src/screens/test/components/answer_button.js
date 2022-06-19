import React from "react";
import { Button } from "@mui/material";
import { theme } from "../../../data/theme";

export default function AnswerButton({ onClick, title }) {
  return (
    <Button
      variant="contained"
      style={{
        borderRadius: 15,
        width: 300,
        fontSize: theme.size.button_text,
        fontWeight: 700,
        margin: 10,
        backgroundColor: theme.color.answer_button,
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
