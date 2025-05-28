import * as React from "react";
import Box from "@mui/material/Box";
import CustomizedButton from "./CustomizedButton";
import { Card, MenuList, Paper } from "@mui/material";

export default function CustomizedMenu(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box onMouseLeave={handleClose} py={"4px"} sx={{ position: "relative" }}>
      {props.isOwnButton ? (
        <div onMouseEnter={handleClick}>{props.children}</div>
      ) : (
        <CustomizedButton
          onMouseEnter={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {props.children}
        </CustomizedButton>
      )}
      {props.list && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 99,
            top: 46,
            display: open ? "block" : "none",
            pt: "14px",
          }}
        >
          <MenuList
            component={Card}
            sx={{
              borderRadius: "16px",
              border: "1px solid #e7e3eb",
            }}
          >
            {props.list()}
          </MenuList>
        </Box>
      )}
    </Box>
  );
}
