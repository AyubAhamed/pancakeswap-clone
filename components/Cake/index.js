import CustomizedAlert from "@/components/common/CustomizedAlertTwo";
import React from "react";
import { Box, IconButton, Stack, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import CurrentBalance from "./CurrentBalance";
import TimerDetail from "./TimerDetail";
import Carousel from "react-multi-carousel";
import ExpireTradeCard from "./ExpireTradeCard";
import LiveTradeCard from "./LiveTradeCard";
import NextTradeCard from "./NextTradeCard";
import LaterTradeCard from "./LaterTradeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, Virtual } from "swiper/modules";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import MultiCardIcon from "@/assets/Icons/svg/MultiCardIcon";
import { Resizable } from "re-resizable";
import Image from "next/image";

const style = {
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const cardList = [
  {
    status: "Expired",
    id: "304353",
    direction: "up",
    payout_down: "1.96x",
    payout_up: "2.96x",
    closed_price: "564.2349",
    locked_price: "564.1199",
    prize_pool: "2.9154 AVAX",
    change: "0.1150",
  },
  {
    status: "Expired",
    id: "304354",
    direction: "down",
    payout_down: "1.83x",
    payout_up: "2.83x",
    closed_price: "563.0026",
    locked_price: "564.2349",
    prize_pool: "2.6689 AVAX",
    change: "1.2323",
  },
  {
    status: "Expired",
    id: "304355",
    direction: "up",
    payout_down: "1.87x",
    payout_up: "2.87x",
    closed_price: "563.3270",
    locked_price: "563.0026",
    prize_pool: "3.1673 AVAX",
    change: "0.3244",
  },
  {
    status: "Live",
    id: "304356",
    direction: "up",
    payout_down: "2.12x",
    payout_up: "1.12x",
    closed_price: "563.6062",
    locked_price: "563.3270",
    prize_pool: "4.0853 AVAX",
    change: "0.2792",
  },
  {
    status: "Next",
    id: "304357",
    direction: "null",
    payout_down: "6.02x",
    payout_up: "2.02x",
    closed_price: null,
    locked_price: null,
    prize_pool: "0.3010 AVAX",
    change: null,
  },
  {
    status: "Later",
    id: "304357",
    direction: null,
    payout_down: null,
    payout_up: null,
    closed_price: null,
    locked_price: null,
    prize_pool: null,
    change: null,
    start_at: 700000,
  },
  {
    status: "Later",
    id: "304357",
    direction: null,
    payout_up: null,
    closed_price: null,
    locked_price: null,
    prize_pool: null,
    change: null,
    start_at: 500000,
  },
];

const HomePage = () => {
  const [swiperRef, setSwiperRef] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    swiperRef?.slideTo(3, 0);
  }, [swiperRef]);

  const nextSlide = () => {
    swiperRef.slideTo(swiperRef?.activeIndex + 1, 0);
  };

  const previousSlide = () => {
    swiperRef.slideTo(swiperRef?.activeIndex - 1, 0);
  };

  return (
    <Box>
      <Stack
        sx={{
          background: "linear-gradient(180deg, #cbd7ef, #9a9fd0)",
          position: "relative",
        }}
      >
        <Stack my={8} mb={12}>
          <Stack
            p={2}
            pt={2}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <CurrentBalance />
            <Stack>
              <Stack display={{ xs: "none", md: "block" }}>
                <Stack
                  sx={{
                    backgroundColor: "white !important",
                    width: { xs: "100%", md: "fit-content" },
                    borderRadius: { xs: 0, md: "22px" },
                    height: { xs: "70px", md: "30px" },
                  }}
                  // gap={0}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <IconButton color="success" onClick={previousSlide}>
                    <ArrowBack />
                  </IconButton>
                  <Box display={{ xs: "none", md: "block" }}>
                    <Image src="/card-stack.png" height={48} width={48} />
                  </Box>
                  <IconButton color="success" onClick={nextSlide}>
                    <ArrowForward />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
            <TimerDetail />
          </Stack>
          <Stack mt={5}>
            <Swiper
              onSwiper={setSwiperRef}
              spaceBetween={20}
              centeredSlides={true}
              modules={[Mousewheel, FreeMode]}
              mousewheel={true}
              freeMode={true}
              className="mySwiper"
              breakpoints={{
                660: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1224: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {cardList.map((item) =>
                item.status === "Expired" ? (
                  <SwiperSlide>
                    <ExpireTradeCard {...item} />
                  </SwiperSlide>
                ) : item.status === "Live" ? (
                  <SwiperSlide>
                    <LiveTradeCard {...item} />
                  </SwiperSlide>
                ) : item.status === "Next" ? (
                  <SwiperSlide>
                    <NextTradeCard {...item} />
                  </SwiperSlide>
                ) : item.status === "Later" ? (
                  <SwiperSlide>
                    <LaterTradeCard {...item} />
                  </SwiperSlide>
                ) : (
                  ""
                )
              )}
            </Swiper>
          </Stack>
        </Stack>

        <Stack display={{ xs: "block", md: "none" }}>
          <Stack
            sx={{
              backgroundColor: "white !important",
              width: { xs: "100%", md: "fit-content" },
              borderRadius: { xs: 0, md: "22px" },
              height: { xs: "70px", md: "30px" },
            }}
            // gap={0}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton color="success" onClick={previousSlide}>
              <ArrowBack />
            </IconButton>
            <Box display={{ xs: "none", md: "block" }}>
              <Image src="/card-stack.png" height={48} width={48} />
            </Box>
            <Stack display={{ xs: "block", md: "none" }}>
              <AntTabs2
                value={value}
                onChange={handleChange}
                aria-label="ant example"
              >
                <AntTab2
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      color="currentColor"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z"
                      ></path>
                    </svg>
                  }
                />
                <AntTab2
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      mr="10px"
                      color="text"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      ></path>
                    </svg>
                  }
                />
                <AntTab2
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      color="currentColor"
                      fill="currentColor"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                    </svg>
                  }
                />
              </AntTabs2>
            </Stack>
            <IconButton color="success" onClick={nextSlide}>
              <ArrowForward />
            </IconButton>
          </Stack>
        </Stack>

        <Stack display={{ xs: "none", md: "block" }}>
          <Stack px={2}>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab
                iconPosition="start"
                icon={
                  value == 0 ? (
                    <svg
                      viewBox="0 0 24 24"
                      mr="10px"
                      color="text"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      ></path>
                    </svg>
                  ) : (
                    ""
                  )
                }
                label="Trading Chart View"
              />
              <AntTab
                iconPosition="start"
                icon={
                  value == 1 ? (
                    <svg
                      viewBox="0 0 24 24"
                      mr="10px"
                      color="text"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      ></path>
                    </svg>
                  ) : (
                    ""
                  )
                }
                label="Chain Link Chat"
              />
            </AntTabs>
          </Stack>
        </Stack>
        <Stack display={{ xs: "none", md: "block" }}>
          <Resizable
            style={style}
            className="container"
            handleWrapperStyle={{
              width: "100%",
            }}
            maxHeight={"400px"}
            minHeight={"24px"}
            handleWrapperClass="resize"
            enable={{
              top: true,
              right: false,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            defaultSize={{
              height: 0,
            }}
          >
            <Stack
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              my={1}
            >
              <Stack
                width={"80px"}
                height={"4px"}
                borderRadius={8}
                sx={{ backgroundColor: "primary.main", py: "2px" }}
              ></Stack>
            </Stack>
            {value == 0 && (
              <Stack height={"calc(100% - 22px)"}>
                <img
                  src="/chart_1.png"
                  alt="chart"
                  width={"100%"}
                  height={"100%"}
                />
              </Stack>
            )}
            {value == 1 && (
              <Stack height={"calc(100% - 22px)"}>
                <img
                  src="/chart_2.png"
                  alt="chart"
                  width={"100%"}
                  height={"100%"}
                />
              </Stack>
            )}
            {value == 2 && <Stack>Charts 2</Stack>}
          </Resizable>
        </Stack>
        <Stack display={{ xs: "block", md: "none" }} mt={1}>
          {value == 0 && (
            <Stack height={"calc(100% - 22px)"}>
              <img
                src="/chart_1.png"
                alt="chart"
                width={"100%"}
                height={"100%"}
              />
            </Stack>
          )}
          {value == 1 && (
            <Stack height={"calc(100% - 22px)"}>
              <img
                src="/chart_2.png"
                alt="chart"
                width={"100%"}
                height={"100%"}
              />
            </Stack>
          )}
          {value == 2 && <Stack>Charts 2</Stack>}
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid transparent",
  background: "#eeeaf4",
  borderRadius: "24px 24px 0px 0px",
  width: "fit-content",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontSize: "16px",
    fontWeight: theme.typography.fontWeightRegular,
    color: "#7a6eaa",
    "&:hover": {
      color: "#280d5f",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#280d5f",
      backgroundColor: "white",
      borderRadius: "24px 24px 0px 0px",
      minHeight: "44px",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#280d5f",
    },
  })
);

const AntTabs2 = styled(Tabs)({
  borderBottom: "1px solid transparent",
  background: "#eeeaf4",
  borderRadius: "16px",
  width: "fit-content",
  minHeight: "36px",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});

const AntTab2 = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    minHeight: "36px",
    fontSize: "16px",
    fontWeight: theme.typography.fontWeightRegular,
    padding: "6px 16px",
    color: "#7a6eaa",
    "&:hover": {
      color: "#280d5f",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#280d5f",
      backgroundColor: "white",
      borderRadius: "16px",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#280d5f",
    },
  })
);
