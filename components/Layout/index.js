import { Stack, Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isBannerPresent, setIsBannerPresent] = React.useState(true);
  return (
    <Stack sx={{ position: "relative" }}>
      <Header />
      <Box>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
