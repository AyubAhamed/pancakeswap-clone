import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none !important",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 400,
  padding: "0px 12px",
  border: "0px solid",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  borderColor: "transparent",
  boxShadow: "none",
  borderRadius: "16px",
  height: "48px",
  color: "#7A6DAA",
  "&:hover": {
    backgroundColor: "#eff4f5",
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

export default function CustomizedButton(props) {
  return <BootstrapButton {...props}>{props.children}</BootstrapButton>;
}
