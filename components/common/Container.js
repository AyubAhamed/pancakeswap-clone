import React from "react";
import { Container as MuiContainer } from "@mui/material";
const Container = ({ children }) => {
  return (
    <MuiContainer
      sx={{
        maxWidth: { lg: "1300px" },
        px: { xs: "24px", lg: "24px" },
        height: "100%",
      }}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
