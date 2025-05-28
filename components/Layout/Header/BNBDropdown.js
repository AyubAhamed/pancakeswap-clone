import * as React from "react";
import Box from "@mui/material/Box";
import CustomizedButton from "@/components/common/CustomizedButton";
import { Card, MenuList, MenuItem, Divider, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const list = [
  {
    label: "BNB Chain",
    image: "/BNBChianIcon.png",
    text: "BNB Chain",
  },
  {
    label: "Ethereum",
    image: "/dropdown-1.png",
  },
  {
    label: "Polygon zkEVM",
    image: "/dropdown-2.png",
  },
  {
    label: "zkSync Era",
    image: "/dropdown-3.png",
  },
  {
    label: "Arbitrum One",
    image: "/dropdown-4.png",
  },
  {
    label: "Linea",
    image: "/dropdown-5.png",
  },
  {
    label: "Base",
    image: "/dropdown-6.png",
  },
  {
    label: "opBNB",
    image: "/BNBChianIcon.png",
  },
  {
    label: "Aptos",
    image: "/dropdown-7.png",
  },
];
export default function BNBDropdown(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box onMouseLeave={handleClose} py={"4px"} mx={"4px"} mr={1}>
      <CustomizedButton
        onMouseEnter={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className="primary-button-sm"
        sx={{
          color: "#280d5f",
          backgroundColor: "#eff4f5",
          pl: "0px !important",
          "&:hover": {
            opacity: "0.65",
          },
        }}
        startIcon={
          <Box>
            <Image alt="nft" src={"/avalanche-avax-logo.webp"} width={32} height={32} />
          </Box>
        }
      >
        <Stack
          flexWrap={"wrap"}
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            component={"span"}
            sx={{
              ml: "6px",
              display: { xs: "none !important", md: "block !important" },
            }}
          >
            Avalanche C
          </Box>
          <Box
            component={"span"}
            sx={{ ml: "2px", display: { xs: "none", lg: "inline-block" } }}
          >
            Chain
          </Box>
        </Stack>
      </CustomizedButton>

      {/* <Box
        sx={{
          position: "absolute",
          zIndex: 99,
          // right: 0,
          display: open ? "block" : "none",
          pt: 2,
        }}
      >
        <MenuList
          component={Card}
          sx={{
            borderRadius: "16px",
            border: "1px solid #e7e3eb",
            // maxHeight: "400px",
            // overflow: "scroll",
          }}
        >
          <MenuItem>Select a Network</MenuItem>

          <Divider />

          {list.map((item, index) => (
            <MenuItem
              sx={{
                py: "8px",
                width: "280px",
                gap: "16px",
              }}
            >
              <Image alt="nft" src={item.image} width={24} height={24} />

              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Box> */}
    </Box>
  );
}
