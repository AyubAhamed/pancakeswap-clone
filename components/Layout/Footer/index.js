import React from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import MuiContainer from "@mui/material/Container";
import Links from "./Links";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#27262c",
          p: { xs: "40px 16px", sm: "56px 40px 32px" },
        }}
      >
        <MuiContainer
          sx={{ maxWidth: { md: "100%", lg: "1200px" }, p: "0px !important" }}
        >
          <Links />
        </MuiContainer>
      </Box>
    </Box>
  );
};

export default Footer;
