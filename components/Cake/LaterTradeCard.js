import React from "react";
import { Card, Stack, Typography, Box, Button } from "@mui/material";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ minutes, seconds }) => {
  return (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

const LaterTradeCard = (props) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "#e7e3eb",
        width: "100%",
        minWidth: '320px',
        height: "340px",
        p: 0,
        m: 0,
      }}
    >
      {/* card status */}
      <Stack
        sx={{
          color: "white !important",
          padding: 1,
          backgroundColor: "#e7e3eb",
          color: "#280d5f",
        }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <svg
            viewBox="0 0 24 24"
            mr="4px"
            width="21px"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z"></path>
          </svg>
          <Typography sx={{ fontSize: "16px" }}>Later</Typography>
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: "16px" }}>#303649</Typography>
        </Stack>
      </Stack>
      <Stack p={2}>
        <Stack alignItems={"center"} sx={{ position: "relative", height: 64 }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#bdc2c4",
              zIndex: 9,
              mt: 2.5,
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            UP
          </Typography>
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              color: "#EFF4F5",
            }}
          >
            <svg
              height="65px"
              width="240px"
              viewBox="0 0 240 65"
              color="text"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <g filter="url(#filter0_i)">
                <path
                  d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z"
                  fill="var(--colors-success)"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_i"
                  x="10.0001"
                  y="1.03125"
                  width="224"
                  height="62.9688"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </Box>
        </Stack>
        <Stack
          sx={{
            p: 2,
            border: "2px solid",
            borderColor: "#bdc2c4",
            borderRadius: "16px",
          }}
        >
          <Typography
            sx={{
              color: "#280d5f",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Entry Start
          </Typography>

          <Typography
            sx={{
              color: "#280d5f",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
           ~<Countdown renderer={renderer} date={Date.now() + props.start_at} />
          </Typography>
        </Stack>
        <Stack alignItems={"center"} sx={{ position: "relative", height: 64 }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#bdc2c4",
              zIndex: 9,
              mt: 1.5,
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Down
          </Typography>

          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              top: -1,
              color: "#EFF4F5",
            }}
          >
            <svg
              height="65px"
              width="240px"
              viewBox="0 0 240 65"
              color="text"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <g filter="url(#filter0_i)">
                <path
                  d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
                  fill="var(--colors-tertiary)"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_i"
                  x="10.0001"
                  y="1"
                  width="224"
                  height="62.9688"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default LaterTradeCard;
