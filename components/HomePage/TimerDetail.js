import BigYellowClock from "@/assets/Icons/svg/BigYellowClock";
import { Stack, Avatar, Card, Typography, Box } from "@mui/material";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ minutes, seconds }) => {
  return (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

const TimerDetail = () => {
  return (
    <Stack>
      <Stack
        direction={"row"}
        gap={1}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Stack mr={2}>
          <Stack direction={"row"} sx={{ position: "relative" }}>
            <Stack mt={{ xs: 0, md: 1 }}>
              <Card
                sx={{
                  borderRadius: { xs: "8px 8px 8px 24px", md: "16px" },
                  pr: { xs: 8, md: 8 },
                  pl: { xs: 1, md: 1 },
                  py: { xs: 0, md: '4px' },
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  gap={{ xs: 0, md: 1 }}
                >
                  <Typography
                    sx={{ fontSize: "20px", color: "#7645d9", fontWeight: 500 }}
                  >
                    <Countdown renderer={renderer} date={Date.now() + 100000} />
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    mt={{ xs: "0px", md: "4px" }}
                    ml={{ xs: "32px", md: "0px" }}
                    sx={{ color: "#280d5f" }}
                  >
                    5m
                  </Typography>
                </Stack>
              </Card>
            </Stack>
            <Box>
              <Box
                sx={{
                  position: "absolute",
                  right: -10,
                  top: { xs: -12, md: -12 },
                }}
              >
                <Box width={"64px"}>
                  <BigYellowClock width={"inherit"} />
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>

        <Stack sx={{ display: { xs: "none", sm: "block" } }}>
          <Avatar
            size="small"
            sx={{
              backgroundColor: "#7a6eaa",
              color: "white",
              borderRadius: "16px",
              height: "32px",
              width: "32px",
              p: 1,
            }}
            component={"a"}
            href="#"
          >
            <Stack alignItems={"center"} justifyContent={"center"}>
              <svg
                viewBox="0 0 24 24"
                width="24px"
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
              </svg>
            </Stack>
          </Avatar>
        </Stack>
        <Stack sx={{ display: { xs: "none", sm: "block" } }}>
          <Avatar
            size="small"
            sx={{
              backgroundColor: "#7a6eaa",
              color: "white",
              borderRadius: "16px",
              height: "32px",
              width: "32px",
              p: 1,
            }}
            component={"a"}
            href="#"
          >
            <svg
              viewBox="0 0 48 48"
              color="white"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z"></path>
            </svg>
          </Avatar>
        </Stack>
        <Stack sx={{ display: { xs: "none", md: "block" } }}>
          <Avatar
            size="small"
            sx={{
              backgroundColor: "#E9EAEB",
              color: "white",
              borderRadius: "16px",
              height: "32px",
              width: "32px",
              p: 1,
            }}
            component={"a"}
            href="#"
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              color="white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
            </svg>
          </Avatar>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TimerDetail;
