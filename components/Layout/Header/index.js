import {
  Box,
  Stack,
  Typography,
  Button,
  AppBar,
  Divider,
  Fab,
  Toolbar,
  ListItem,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BunnyLargeIcon from "@/assets/Icons/svg/BunnyLargeIcon";
import CustomizedMenu from "@/components/common/CustomizedMenu";
import CustomizedMenuItem from "@/components/common/CustomizedMenuItem";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomizedIconButton from "@/components/common/CustomizedIconButton";
import SettingIcon from "@/assets/Icons/svg/SettingIcon";
import NotificationBell from "@/assets/Icons/svg/NotificationBell";
import BNBDropdown from "./BNBDropdown";
import LanguageDropdown from "./LanguageDropdown";
import BalanceDetail from "@/components/common/BalanceDetail";
import BunnySmallicon from "@/assets/Icons/svg/BunnySmallicon";
import TradeIcon from "@/assets/Icons/svg/TradeIcon";
import BasketIcon from "@/assets/Icons/svg/BasketIcon";
import EarnIcon from "@/assets/Icons/svg/EarnIcon";
import NFTIcon from "@/assets/Icons/svg/NFTIcon";
import GameColorIcon from "@/assets/Icons/svg/GameColorIcon";
import Image from "next/image";

const TradeListItems = () => {
  return (
    <>
      <CustomizedMenuItem href="/swap" label="Swap" />
      <CustomizedMenuItem href="/liquidity" label="Liquidity" />
      <CustomizedMenuItem
        href="/perpetual"
        label="Perpetual"
        hasLogoutIcon={true}
      />
      <CustomizedMenuItem
        href="/options"
        label="Options"
        hasLogoutIcon={true}
      />
      <CustomizedMenuItem href="/bridge" label="Bridge" hasLogoutIcon={true} />
      <CustomizedMenuItem href="/limit" label="Limit (Deprecated)" />
      <CustomizedMenuItem href="/trading-reward" label="Trading Reward" />
    </>
  );
};

const EarnItemList = () => {
  return (
    <>
      <CustomizedMenuItem href="/farms" label="Farms" />
      <CustomizedMenuItem href="/cake-staking" label="CAKE Staking" />
      <CustomizedMenuItem href="/pools" label="Pools" />
      <CustomizedMenuItem href="/position-manager" label="Position Manager" />
      <CustomizedMenuItem href="/liquid-staking" label="Liquid Staking" />
      <CustomizedMenuItem href="/simple-staking" label="Simple Staking" />
    </>
  );
};

const GameItemList = () => {
  return (
    <>
      <CustomizedMenuItem
        href="/quests"
        label="Gaming Marketplace"
        hasLogoutIcon={true}
      />
      <CustomizedMenuItem
        href="/prediction"
        color={"primary.main"}
        label="Prediction (BETA)"
      />
      <CustomizedMenuItem href="/lottery" label="Lottery" />
      <CustomizedMenuItem href="/quests" label="Quests" hasLogoutIcon={true} />
      <CustomizedMenuItem href="/pottery" label="Pottery (BETA)" />
    </>
  );
};

const NFTItemList = () => {
  return (
    <>
      <CustomizedMenuItem href="/overview" label="Overview" />
      <CustomizedMenuItem href="/collection" label="Collection" />
      <CustomizedMenuItem href="/interview" label="Interview" />
    </>
  );
};

const MoreItemList = () => {
  return (
    <>
      <CustomizedMenuItem href="/info" label="Info" />
      <CustomizedMenuItem href="/ifo" label="IFO" />
      <CustomizedMenuItem href="/affiliate-program" label="Affiliate Program" />
      <CustomizedMenuItem href="/voting" label="Voting" />
      <Divider />
      <CustomizedMenuItem href="/leaderboard" label="Leaderboard" />
      <Divider />
      <CustomizedMenuItem href="/blog" label="Blog" hasLogoutIcon={true} />
      <CustomizedMenuItem href="/docs" label="Docs" hasLogoutIcon={true} />
    </>
  );
};

const Header = (props) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            padding: "0px 16px",
            backgroundColor: "white !important",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={4}
            >
              <Stack alignItems={'center'} justifyContent={'center'} mt={'3px'}>
                <Link href={"/"} style={{ color: "black" }}>
                  <Image src="/market-logo-2.webp" height={35} width={200} />
                </Link>
              </Stack>

              <Stack
                direction={"row"}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <CustomizedMenu list={TradeListItems}>
                  <Box color={"text.primary"}>Trade</Box>
                </CustomizedMenu>

                <CustomizedMenu>
                  <Link href={"/buy"} style={{ textDecoration: "none" }}>
                    <Box color={"text.primary"}>Buy</Box>
                  </Link>
                </CustomizedMenu>

                <CustomizedMenu list={EarnItemList}>
                  <Box color={"text.primary"}>Earn</Box>
                </CustomizedMenu>

                <CustomizedMenu list={GameItemList}>
                  <Stack
                    alignItems={"center"}
                    direction={"row"}
                    gap={"8px"}
                    sx={{ color: "#7645D9", fontWeight: 600 }}
                  >
                    Game
                    <CircleIcon
                      sx={{ fontSize: "10px", color: "success.main" }}
                    />
                  </Stack>
                </CustomizedMenu>
                <CustomizedMenu list={NFTItemList}>
                  <Box color={"text.primary"}>NFT</Box>
                </CustomizedMenu>
                <CustomizedMenu>
                  <Link href={"/v4"} style={{ textDecoration: "none" }}>
                    <Box color={"text.primary"}>V4</Box>
                  </Link>
                </CustomizedMenu>
                <CustomizedMenu list={MoreItemList}>
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"text.primary"}
                  >
                    <MoreHorizIcon />
                  </Stack>
                </CustomizedMenu>
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <BalanceDetail />
              </Box>

              <LanguageDropdown />

              <CustomizedIconButton>
                <SettingIcon />
              </CustomizedIconButton>

              <CustomizedIconButton>
                <NotificationBell />
              </CustomizedIconButton>

              <BNBDropdown />
              <Button
                variant="contained"
                color="blueBlack"
                className="primary-button-sm"
              >
                <Stack
                  flexWrap={"wrap"}
                  width={"100%"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box component={"span"}>Connect</Box>
                  <Box
                    component={"span"}
                    sx={{
                      ml: "4px",
                      display: { xs: "none", sm: "inline-block" },
                    }}
                  >
                    Wallet
                  </Box>
                </Stack>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </AppBar>

      <AppBar
        position="fixed"
        color="primary"
        sx={{
          display: { xs: "block", md: "none" },
          top: "auto",
          bottom: 0,
          backgroundColor: "white !important",
        }}
      >
        <Toolbar>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            pt={"4px"}
          >
            <Stack>
              <MobileFooterList
                icon={<TradeIcon />}
                title="Trade"
                url="/trade"
              />
            </Stack>
            <Stack>
              <MobileFooterList icon={<BasketIcon />} title="Buy" url="/buy" />
            </Stack>
            <Stack>
              <MobileFooterList icon={<EarnIcon />} title="Earn" url="/earn" />
            </Stack>
            <Stack display={{ xs: "none", sm: "block" }}>
              <MobileFooterList
                icon={<GameColorIcon />}
                title="Game"
                url="/Game"
              />
            </Stack>
            <Stack>
              <MobileFooterList icon={<NFTIcon />} title="NFT" url="/NFT" />
            </Stack>
            <Stack>
              <MobileFooterList icon={<MoreHorizIcon />} title="" url="" />
            </Stack>
            <Stack display={{ xs: "block", sm: "none" }}>
              <MobileFooterList
                icon={<GameColorIcon />}
                title="Game"
                url="/Game"
              />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const MobileFooterList = (props) => {
  return (
    <Link href={props.url} style={{ textDecoration: "none" }}>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#7a6eaa",
          fontWeight: 400,
          m: 0,
          p: 0,
        }}
      >
        {props.icon}
        <Typography mt={1} sx={{ fontSize: "10px" }}>
          {props.title}
        </Typography>
      </ListItem>
    </Link>
  );
};
