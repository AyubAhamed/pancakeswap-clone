import React from "react";
import { Card, Stack, Typography, Box } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const ExpireTradeCard = (props) => {

  return (
    <Card
      sx={{
        borderRadius: "16px",
        border: "1px solid",
        color: "#e7e3eb",
        width: "100%",
        minWidth: "320px",
        height: "340px",
        p: 0,
        m: 0,
        opacity: "0.7",
        "&:hover": {
          opacity: "1",
          transition: "opacity 300ms",
        },
      }}
    >
      {/* card status */}
      <Stack
        sx={{ color: "#bdc2c4", padding: 1, backgroundColor: "#e7e3eb" }}
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
            color="textDisabled"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"></path>
          </svg>
          <Typography sx={{ fontSize: "16px" }}>Expired</Typography>
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: "16px" }}>{props.id}</Typography>
        </Stack>
      </Stack>

      <Stack p={2}>
        <Stack alignItems={"center"} sx={{ position: "relative", height: 64 }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: props.direction == "up" ? "white" : "success.main",
              zIndex: 9,
              mt: '20px',
              fontSize: "20px",
              lineHeight: '16px',
              fontWeight: 600,
            }}
          >
            UP
          </Typography>
          <Typography
            sx={{
              color: props.direction == "up" ? "white" : "#7a6eaa",
              zIndex: 9,
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            <Typography component={"span"} sx={{ fontWeight: 600 }}>
              {props?.payout_up}{" "}
            </Typography>
            Payout
          </Typography>
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              color: props.direction == "up" ? "success.main" : "#EFF4F5",
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
            borderColor: "success.main",
            borderRadius: "16px",
          }}
        >
          <Typography color={"#7a6eaa"} fontSize={"12px"}>
            CLOSED PRICE
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              color={"success.main"}
              fontSize={"24px"}
              fontWeight={600}
            >
              ${props.closed_price}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"4px"}
              sx={{
                backgroundColor: props.direction == "up" ? "success.main" : "secondary.main",
                borderRadius: "4px",
                p: "4px 8px",
              }}
            >
               {props.direction == "up" ? (
                <ArrowUpward
                  fontSize="small"
                  sx={{ color: "white !important" }}
                />
              ) : (
                <ArrowDownward
                  fontSize="small"
                  sx={{ color: "white !important" }}
                />
              )}
              <Typography
                color={"common.white"}
                fontSize={"16px"}
                fontWeight={400}
              >
                ${props.change}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={{ color: "#280d5f", fontSize: "14px" }}>
              Locked Price
            </Typography>
            <Typography sx={{ color: "#280d5f", fontSize: "14px" }}>
              {props.locked_price}
            </Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{ color: "#280d5f", fontSize: "16px", fontWeight: 600 }}
            >
              Prize Pool
            </Typography>
            <Typography
              sx={{ color: "#280d5f", fontSize: "16px", fontWeight: 600 }}
            >
               {props.prize_pool}
            </Typography>
          </Stack>
        </Stack>

        <Stack alignItems={"center"} sx={{ position: "relative", height: 64 }}>
          <Typography
            sx={{
              color: props.direction == "up" ? "#7a6eaa" : "white",
              zIndex: 9,
              fontSize: "14px",
              fontWeight: 400,
              mt: '2px'
            }}
          >
            <Typography component={"span"} sx={{ fontWeight: 600 }}>
            {props?.payout_down}{" "}
            </Typography>
            Payout
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: props.direction == "up" ? "secondary.main" : "white",
              zIndex: 9,
              fontSize: "20px",
              lineHeight: '16px',
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
              color: props.direction == "down" ? "secondary.main" : "#EFF4F5",
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

export default ExpireTradeCard;
