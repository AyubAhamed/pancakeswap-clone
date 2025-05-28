import React from "react";
import {
  Box,
  Alert,
  Stack,
  Typography,
  IconButton,
  Collapse,
  Button,
  Divider,
} from "@mui/material";
import ArrowCircleIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ArrowForward from "@mui/icons-material/ArrowForward";

const CustomizedAlertTwo = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Collapse in={open}>
      <Box
        sx={{
          backgroundColor: { xs: "rgb(40, 13, 95)", md: "rgb(33, 49, 71)" },
        }}
      >
        <Stack
          direction={"row"}
          alignContent={"center"}
          justifyContent={"center"}
          sx={{ position: "relative" }}
        >
          <Alert
            icon={false}
            action={''}
            sx={{
              backgroundColor: "transparent",
              p: 0,
              px: 1,
              "& .MuiAlert-root": {
                p: { xs: 0, md: 0 },
              },
              "& .MuiAlert-message": {
                p: { xs: 0, md: 0 },
              },

            }}
            onClose={() => {}}
          >
            <Stack
              direction={"row"}
              alignContent={"center"}
              justifyContent={"center"}
              sx={{ width: "100%" }}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image alt="nft" src={"/info-strip-logo.png"} width={90} height={50} />
              </Box>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  backgroundColor: "rgb(40, 13, 95)",
                  height: "100%",
                  my: { xs: 0, md: 1 },
                  px: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                }}
                spacing={1}
              >
                <Typography
                  sx={{
                    color: "common.white",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  PancakeSwap's AI-Prediction Market is now live on Arbitrum.
                  <Typography
                    component={"span"}
                    sx={{ color: "rgb(255, 226, 56)", fontSize: "inherit" }}
                  >
                    {" "}
                    60,000 ARB
                  </Typography>
                  , in rewards and up to 100% Fund Protection.
                </Typography>
                <Button
                  sx={{
                    color: "#1fc7d4",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                  endIcon={
                    <ArrowForward
                      sx={{ fontSize: { xs: "12px", md: "6px" } }}
                    />
                  }
                >
                  Participate Now
                </Button>
                <Divider />
                <Typography
                  component={"span"}
                  sx={{
                    color: "#1fc7d4",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  Learn More
                </Typography>
              </Stack>
            </Stack>
          </Alert>
        </Stack>
      </Box>
    </Collapse>
  );
};

export default CustomizedAlertTwo;
