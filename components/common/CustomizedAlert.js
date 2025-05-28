import React from "react";
import {
  Box,
  Alert,
  Stack,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import ArrowCircleIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const CustomizedAlert = () => {
  const [open, setOpen] = React.useState(true);


  return (
    <Collapse in={open}>
      <Box sx={{ backgroundColor: { xs: "rgb(40, 13, 95)", md: "#7a6eaa" } }}>
        <Stack
          direction={"row"}
          alignContent={"center"}
          justifyContent={"center"}
          sx={{ position: "relative" }}
        >
          <Alert
            icon={false}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
              backgroundColor: "transparent",
              p: 0,
              px: 1,
              "& .MuiAlert-root": {
                p: { xs: 0, md: 0 },
              },
              "& .MuiAlert-message": {
                p: { xs: 0, md: 0 },
                px: { xs: 1, md: 0 },
                pr: { xs: 5, md: 0 },
              },
              "& .MuiAlert-action": {
                p: 0,
                "& .MuiIconButton-root": {
                  position: "absolute",
                  color: "white !important",
                  top: 22,
                  right: { xs: 8, md: 10 },
                },
              },
            }}
            onClose={() => {}}
          >
            <Stack
              direction={"row"}
              alignContent={"center"}
              justifyContent={"center"}
              sx={{ width: "100%", minHeight: "70px" }}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image alt="nft" src={"/info-strip-logo.png"} width={90} height={65} />
              </Box>
              <Stack
                direction={"row"}
                alignContent={"center"}
                justifyContent={"space-between"}
                sx={{
                  backgroundColor: "rgb(40, 13, 95)",
                  my: { xs: 0, md: 1 },

                  px: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                }}
              >
                <Typography
                  sx={{
                    color: "common.white",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  In the event of any
                  <Typography
                    component={"span"}
                    sx={{ color: "rgb(255, 226, 56)", fontSize: "inherit" }}
                  >
                    {" "}
                    token distribution
                  </Typography>
                  , we will distribute
                  <Typography
                    component={"span"}
                    sx={{ color: "rgb(255, 226, 56)", fontSize: "inherit" }}
                  >
                    {" "}
                    100%{" "}
                  </Typography>
                  of the proceeds to the
                  <Typography
                    component={"span"}
                    sx={{ color: "rgb(255, 226, 56)", fontSize: "inherit" }}
                  >
                    {" "}
                    CAKE community.{" "}
                  </Typography>
                  <Typography
                    component={"span"}
                    sx={{
                      color: "#1fc7d4",
                      textDecoration: "underline",
                      fontSize: "inherit",
                    }}
                  >
                    Learn More
                  </Typography>
                </Typography>
                <IconButton color="blueBlack" sx={{ p: 0, ml: 2 }}>
                  <ArrowCircleIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Alert>
        </Stack>
      </Box>
    </Collapse>
  );
};

export default CustomizedAlert;
