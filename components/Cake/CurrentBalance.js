import BunnySingleSmallIcon from "@/assets/Icons/svg/BunnySingleSmallIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Stack,
  Typography,
  Box,
  Card,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import CountUp from "react-countup";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

const CurrentBalance = () => {
  const [openDetail, setOpenDetail] = React.useState(false);
  const router = useRouter();

  const matches = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    if (matches) setOpen(newOpen);
  };

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          position: "relative",
          alignItems: openDetail ? "flex-start" : "center",
          justifyContent: "center",
        }}
      >
        <Box width={"56px"} height={"56px"} mt={0}>
          <Box sx={{ position: "relative" }}>
            <svg
              width="70"
              height="70"
              viewBox="0 0 94 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="text"
            >
              <mask
                id="mask0_2730_10379"
                maskUnits="userSpaceOnUse"
                x="0"
                y="13"
                width="94"
                height="83"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M79.2405 25.0519C83.8143 26.3086 87.5523 27.5311 90.0188 28.5C90.0188 28.5 91.547 31.5169 92.0192 33.5001C94.4664 43.7761 94.6096 50.3705 92.6504 59.4058C89.9319 80.0135 70.3002 96 46.4861 96C21.3806 96 0.9234 78.2325 0.0308534 56.0141C0.0106819 56.0047 0.000489472 56 0.000489472 56L0.000489373 54.5C0.000489373 54.4991 0.000489406 54.4982 0.000489472 54.4972L0.000489472 42.5C0.000489472 42.5 -0.0350968 40.5478 0.500591 37C2.04954 26.7415 10.3691 21.5936 21.4403 19.5325C28.6688 15.3975 37.2638 13 46.4861 13C59.2639 13 70.8376 17.6025 79.2405 25.0519Z"
                  fill="black"
                ></path>
              </mask>
              <g mask="url(#mask0_2730_10379)">
                <rect
                  x="0.0483398"
                  y="-2.21118"
                  width="93.971"
                  height="107.147"
                  fill="red"
                ></rect>
                <rect
                  opacity="0.6"
                  x="0.000488281"
                  y="6"
                  width="94.0192"
                  height="99"
                  fill="url(#paint0_radial_2730_10379)"
                ></rect>
                <rect
                  opacity="0.5"
                  x="0.048584"
                  y="5.89844"
                  width="93.971"
                  height="99.0385"
                  fill="url(#paint1_radial_2730_10379)"
                ></rect>
              </g>
              <mask
                id="mask1_2730_10379"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="94"
                height="87"
              >
                <ellipse
                  cx="46.51"
                  cy="43.5"
                  rx="46.5095"
                  ry="43.5"
                  fill="#C4C4C4"
                ></ellipse>
              </mask>
              <g mask="url(#mask1_2730_10379)">
                <rect
                  x="0.309326"
                  y="-0.995605"
                  width="93.0189"
                  height="88"
                  fill="red"
                ></rect>
              </g>
              <ellipse
                opacity="0.5"
                cx="47.0044"
                cy="44.5"
                rx="44.0032"
                ry="43.5"
                fill="url(#paint2_linear_2730_10379)"
              ></ellipse>
              <ellipse
                opacity="0.5"
                cx="47.0044"
                cy="44.5"
                rx="44.0032"
                ry="43.5"
                fill="url(#paint3_linear_2730_10379)"
              ></ellipse>
              <path
                opacity="0.3"
                d="M46.5101 88C20.8236 88 0.000583608 68.3005 0.000584238 44C0.000584868 19.6995 20.8236 -2.30847e-06 46.5101 -1.48714e-06C72.1965 -6.65816e-07 93.0195 19.6995 93.0195 44C93.0195 68.3005 72.1965 88 46.5101 88ZM46.5101 3.00157C22.5759 3.00157 3.17334 21.3572 3.17334 44C3.17334 66.6428 22.5759 84.9984 46.5101 84.9984C70.4443 84.9984 89.8468 66.6428 89.8468 44C89.8468 21.3572 70.4443 3.00157 46.5101 3.00157Z"
                fill="url(#paint4_radial_2730_10379)"
              ></path>
              <defs>
                <radialGradient
                  id="paint0_radial_2730_10379"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(94.0887 48.0618) rotate(180) scale(82.979 78.3937)"
                >
                  <stop stopColor="#1E2226"></stop>
                  <stop offset="1" stopColor="#1E2026" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="paint1_radial_2730_10379"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(4.31999 87.4701) rotate(-45.3352) scale(31.3944 31.3922)"
                >
                  <stop stopColor="#FAFAFA"></stop>
                  <stop offset="1" stopColor="#FAFAFA" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient
                  id="paint2_linear_2730_10379"
                  x1="79.5925"
                  y1="76.5813"
                  x2="45.8367"
                  y2="45.2417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F5F5F5"></stop>
                  <stop offset="1" stopColor="#F5F5F5" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2730_10379"
                  x1="10.1562"
                  y1="8.60366"
                  x2="76.2911"
                  y2="78.3418"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#14151A"></stop>
                  <stop
                    offset="0.482052"
                    stopColor="#B4B4B4"
                    stop-opacity="0.536112"
                  ></stop>
                  <stop offset="1" stopColor="white"></stop>
                </linearGradient>
                <radialGradient
                  id="paint4_radial_2730_10379"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(61.013 34.6067) rotate(139.087) scale(72.1107 71.928)"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="0.461715" stopColor="#333333"></stop>
                  <stop offset="0.773943" stopColor="white"></stop>
                </radialGradient>
              </defs>
            </svg>
            <Box sx={{ position: "absolute", top: 3, left: 7, zIndex: 9 }}>
              <Image src="/avalanche-avax-logo.webp" width={57} height={57} />
            </Box>
          </Box>
        </Box>
        <Stack mt={1}>
          <Card
            sx={{
              borderRadius: { xs: "8px 8px 24px", md: "16px" },
              width: { xs: "100%", md: "250px" },
              backgroundColor: "#eeeaf4",
            }}
          >
            <Stack
              px={2}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent={"space-between"}
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 0, md: 3 }}
              onClick={() => {
                setOpenDetail(!openDetail);
                toggleDrawer(true);
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "16px", md: "28px" }, color: "#7645d9" }}
              >
                AVAXUSD
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  fontSize={{ xs: "12px", lg: "16px" }}
                  sx={{ color: "#280E5F" }}
                >
                  <CountUp start={20.0} end={581.861} decimals={4} />
                </Typography>
                <ExpandMoreIcon color="success" />
              </Stack>
            </Stack>
            {openDetail && (
              <Stack
                display={{ xs: "none", md: "block" }}
                onClick={() => router.push("/")}
                sx={{
                  "&:hover": { backgroundColor: "#d7caec", cursor: "pointer" },
                }}
              >
                <Divider />
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={3}
                  sx={{
                    p: "8px 39px 8px 16px",
                  }}
                >
                  <Stack
                    direction={"row"}
                    gap={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                    height={"100%"}
                  >
                    <Image src="/Bitcoin.svg.webp" width={24} height={24} />
                    <Typography sx={{ fontSize: "20px", color: "7a6daa" }}>
                      BTCUSD
                    </Typography>
                  </Stack>
                  <Typography
                    fontSize={{ xs: "12px", lg: "16px" }}
                    sx={{ color: "#280E5F" }}
                  >
                    $<CountUp start={20.0} end={581.861} decimals={4} />
                  </Typography>
                </Stack>
              </Stack>
            )}
          </Card>
        </Stack>
      </Stack>
      <Drawer
        anchor={"bottom"}
        open={open}
        sx={{ borderRadius: "32px" }}
        onClose={() => toggleDrawer(false)}
      >
        <Stack p={3} gap={"32px"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
          >
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Typography sx={{ fontSize: "20px", color: "common.black" }}>
                AVAXUSD
              </Typography>
              <Typography
                fontSize={{ xs: "12px", lg: "16px" }}
                sx={{ color: "primary.main" }}
              >
                $<CountUp start={20.0} end={581.861} decimals={4} />
              </Typography>
            </Stack>
            <IconButton color="success" onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            onClick={() => router.push("/")}
            sx={{
              "&:hover": { backgroundColor: "#d7caec", cursor: "pointer" },
            }}
          >
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              justifyContent={"center"}
              height={"100%"}
            >
              <Image src="/Bitcoin.svg.webp" width={24} height={24} />
              <Typography sx={{ fontSize: "20px", color: "7a6daa" }}>
                BTCUSD
              </Typography>
            </Stack>
            <Typography
              fontSize={{ xs: "12px", lg: "16px" }}
              sx={{ color: "#280E5F" }}
            >
              $<CountUp start={20.0} end={581.861} decimals={4} />
            </Typography>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};

export default CurrentBalance;
