import * as React from "react";
import Box from "@mui/material/Box";
import CustomizedButton from "@/components/common/CustomizedButton";
import {
  Card,
  MenuList,
  MenuItem,
  Divider,
  Typography,
  colors,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import GlobeIcon from "@/assets/Icons/svg/GlobeIcon";
import CustomizedIconButton from "@/components/common/CustomizedIconButton";

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
export default function LanguageDropdown(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      onMouseLeave={handleClose}
      py={"4px"}
      ml={"4px"}
      sx={{ position: "relative" }}
    >
  
      <CustomizedIconButton
        onMouseEnter={handleClick}
        aria-controls={open ? "account-menu" : undefined}
      >
        <GlobeIcon />
      </CustomizedIconButton>

      <Box
        sx={{
          position: "absolute",
          zIndex: 99,
          right: -60,
          display: open ? "block" : "none",
          pt: 1,
        }}
      >
        <MenuList
          component={Card}
          sx={{
            borderRadius: "16px",
            border: "1px solid #e7e3eb",
            maxHeight: "400px",
            overflow: "scroll",
          }}
        >
          {[
            "العربية",
            "বাংলা",
            "English",
            "Deutsch",
            "Ελληνικά",
            "Español",
            "Suomalainen",
            "Filipino",
            "Français",
            "हिंदी",
            "Magyar",
            "Bahasa Indonesia",
            "Italiano",
            "日本語",
            "한국어",
            "Nederlands",
            "Polski",
            "Português (Brazil)",
            "Português",
            "Română",
            "Русский",
            "Svenska",
            "தமிழ்",
            "Türkçe",
            "Українська",
            "Tiếng Việt",
            "简体中文",
            "繁體中文",
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                color: "#280d5f",
                "&:hover": {
                  opacity: "0.85",
                  transform: "translateY(1px)",
                  color: "text.primary",
                },
                p: "0px 8px",
                minHeight: "32px",
                width: "152px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography>{item}</Typography>
            </Box>
          ))}
        </MenuList>
      </Box>
    </Box>
  );
}
