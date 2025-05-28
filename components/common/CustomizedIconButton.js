import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Opacity } from "@mui/icons-material";

const BootstrapButton = styled(IconButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  border: "0px solid",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  borderColor: "transparent",
  boxShadow: "none",
  borderRadius: "16px",
  height: "48px",
  color: "#7a6eaa",
  "&:hover": {
    opacity: "0.65",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: "16px",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "&:focus": {
    boxShadow: "none",
  },
});

export default function CustomizedIconButton(props) {
  return (
    <BootstrapButton sx={{ p: { xs: "0px 8px", md: "0px 9px" } }} {...props}>
      {props.children}
    </BootstrapButton>
  );
}
