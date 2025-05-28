import React from "react";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Grid,
  Stack,
  Avatar,
  Typography,
  Box,
  Divider,
  Switch,
  FormControlLabel,
  colors,
  Button,
} from "@mui/material";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import BunnySmallicon from "@/assets/Icons/svg/BunnySmallicon";
import BunnyLargeIcon from "@/assets/Icons/svg/BunnyLargeIcon";
import { styled } from "@mui/material/styles";
import LanguageDropdown from "./LanguageDropdown";
import BalanceDetail from "@/components/common/BalanceDetail";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import Image from "next/image";

const allLinks = [
  {
    title: "SUPPORT",
    links: [
      {
        text: "Contact",
        url: "/contact",
      },
      {
        text: "Troubleshooting",
        url: "/troubleshooting",
      },
      {
        text: "Documentation",
        url: "/documentation",
      },
    ],
  },
  {
    title: "ABOUT",
    links: [
      {
        text: "Terms Of Service",
        url: "/terms-of-service",
      },
      {
        text: "Blog",
        url: "/blog",
      },
      {
        text: "Brand Assets",
        url: "/brand-assets",
      }
    ],
  },
];

const Links = () => {
  const router = useRouter();

  return (
    <Box>
      <Grid container direction={{ xs: "column", lg: "row" }}>
        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            alignItems={{ xs: "flex-start", md: "flex-start" }}
            gap={4}
          >
            {allLinks.map((item, index) => (
              <Stack key={index}>
                <Stack alignItems={{ xs: "flex-start", md: "flex-start" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "primary.main", fontSize: "16px" }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
                <Stack
                  gap={"2px"}
                  mt={1}
                  alignItems={{ xs: "flex-start", md: "flex-start" }}
                >
                  {item.links.map((link) => (
                    <Link
                      href={link.url}
                      key={link.text}
                      style={{ textDecoration: "none" }}
                    >
                      <MuiLink
                        variant="subtitle1"
                        component={"p"}
                        sx={{
                          color: "common.white",
                          fontWeight: 400,
                          cursor: "pointer",
                          textDecoration: "none",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {link.text}
                      </MuiLink>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ))}
            <Stack>
              <Stack alignItems={"center"} justifyContent={"center"} mt={"3px"}>
                <Link href={"/"} style={{ color: "black" }}>
                  <Image src="/market-logo.webp" height={35} width={200} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} mt={4} gap={{ xs: 0, md: 1 }}>
            <Avatar
              size="small"
              sx={{
                backgroundColor: "transparent",
                color: "common.textLight",
                borderRadius: "5px",
                height: "24px",
                width: "24px",
                p: 1,
                pl: 0,
              }}
              component={"a"}
              href="#"
            >
              <svg
                viewBox="0 0 20 20"
                width="20px"
                color="currentColor"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.28064 10.6416L2.20837 2.9165H7.01804L10.7664 7.69116L14.7709 2.938H17.4198L12.0472 9.3226L18.4177 17.4373H13.6224L9.56365 12.2738L5.23057 17.423H2.5673L8.28064 10.6416ZM14.3213 16.006L5.1575 4.34783H6.31855L15.4708 16.006H14.3213Z"
                  ></path>
                </g>
                <defs>
                  <clipPath>
                    <rect
                      width="17"
                      height="17"
                      transform="translate(1.5 1.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </Avatar>
            <Avatar
              size="small"
              sx={{
                background: "none",
                backgroundColor: "transparent",
                color: "common.textLight",
                borderRadius: "5px",
                height: "26px",
                width: "26px",
                p: 1,
              }}
              component={"a"}
              href="#"
            >
              <svg
                viewBox="0 0 20 20"
                width="20px"
                color="currentColor"
                fill="currentColor"
                mr="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0C4.478 0 0 4.478 0 9.99 0 15.511 4.478 20 10 20s10-4.488 10-10.01C20 4.477 15.522 0 10 0zm4.925 6.28c-.064.927-1.78 7.856-1.78 7.856s-.107.406-.48.416a.644.644 0 01-.49-.192c-.395-.33-1.29-.97-2.132-1.556a.953.953 0 01-.107.096c-.192.17-.48.416-.789.714a10.7 10.7 0 00-.373.352l-.01.01a2.214 2.214 0 01-.193.171c-.415.341-.458.053-.458-.096l.224-2.441v-.021l.01-.022c.011-.032.033-.043.033-.043s4.36-3.88 4.477-4.296c.01-.021-.021-.042-.074-.021-.288.096-5.31 3.273-5.864 3.625-.032.02-.128.01-.128.01l-2.441-.8s-.288-.117-.192-.383c.021-.053.053-.107.17-.181.544-.384 10-3.785 10-3.785s.267-.085.427-.032c.074.032.117.064.16.17.01.043.021.128.021.224 0 .054-.01.118-.01.224z"></path>
              </svg>
            </Avatar>
            <Avatar
              size="small"
              sx={{
                background: "none",
                backgroundColor: "transparent",
                color: "common.textLight",
                borderRadius: "5px",
                height: "26px",
                width: "26px",
                p: 1,
              }}
              component={"a"}
              href="#"
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                color="currentColor"
                fill="currentColor"
              >
                <path d="M12.09 13.412c-.448.447-1.408.607-2.09.607-.682 0-1.642-.16-2.09-.607a.27.27 0 00-.383 0 .27.27 0 000 .383c.714.704 2.068.757 2.473.757.405 0 1.76-.053 2.473-.767a.27.27 0 000-.384.28.28 0 00-.383.01zM8.753 11.034c0-.576-.47-1.045-1.045-1.045-.576 0-1.045.47-1.045 1.045 0 .576.47 1.045 1.045 1.045.576 0 1.045-.47 1.045-1.045z"></path>
                <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.467 10-10c-.01-5.522-4.478-10-10-10zm5.8 11.333c.02.138.032.287.032.437 0 2.25-2.612 4.062-5.832 4.062-3.22 0-5.832-1.813-5.832-4.062 0-.15.011-.299.032-.437A1.447 1.447 0 013.337 10 1.463 1.463 0 015.81 8.945c1.013-.736 2.41-1.194 3.966-1.237 0-.021.736-3.486.736-3.486 0-.064.042-.128.096-.16a.263.263 0 01.202-.043l2.42.523c.17-.342.523-.587.928-.587A1.04 1.04 0 0115.203 5a1.04 1.04 0 01-1.045 1.045 1.034 1.034 0 01-1.034-.992l-2.175-.469-.661 3.124c1.535.053 2.91.522 3.902 1.237a1.454 1.454 0 012.473 1.044 1.48 1.48 0 01-.863 1.344z"></path>
                <path d="M12.292 10c-.576 0-1.045.47-1.045 1.045s.47 1.045 1.045 1.045c.576 0 1.045-.47 1.045-1.045A1.06 1.06 0 0012.292 10z"></path>
              </svg>
            </Avatar>
            <Avatar
              size="small"
              sx={{
                background: "none",
                backgroundColor: "transparent",
                color: "common.textLight",
                borderRadius: "5px",
                height: "26px",
                width: "26px",
                p: 1,
              }}
              component={"a"}
              href="#"
            >
              <svg
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                color="currentColor"
                fill="currentColor"
              >
                <path d="M9 1.625c2.407 0 2.685.01 3.641.052.874.04 1.358.185 1.666.308.422.165.72.36 1.04.669.318.319.514.617.668 1.039.123.318.267.792.308 1.666.042.946.052 1.234.052 3.641s-.01 2.685-.052 3.641c-.04.874-.185 1.358-.308 1.666-.165.422-.36.72-.669 1.04a2.66 2.66 0 01-1.039.668c-.318.123-.792.267-1.666.308-.946.042-1.234.052-3.641.052s-2.685-.01-3.641-.052c-.874-.04-1.358-.185-1.666-.308a2.911 2.911 0 01-1.04-.669 2.659 2.659 0 01-.668-1.039c-.123-.318-.267-.792-.308-1.666-.042-.946-.052-1.234-.052-3.641s.01-2.685.052-3.641c.04-.874.185-1.358.308-1.666.165-.422.36-.72.669-1.04a2.658 2.658 0 011.039-.668c.318-.123.792-.267 1.666-.308.956-.042 1.234-.052 3.641-.052zM9 0C6.552 0 6.254.01 5.287.051c-.957.052-1.615.196-2.18.422a4.311 4.311 0 00-1.595 1.039A4.311 4.311 0 00.473 3.106c-.226.566-.37 1.224-.422 2.18C.011 6.255 0 6.553 0 9s.01 2.746.051 3.713c.042.957.196 1.615.422 2.18.226.597.535 1.091 1.039 1.595.504.504.998.813 1.594 1.039.576.226 1.224.37 2.18.422.957.04 1.266.051 3.714.051s2.746-.01 3.713-.051c.957-.042 1.615-.196 2.18-.422a4.311 4.311 0 001.595-1.039 4.311 4.311 0 001.039-1.594c.226-.576.37-1.224.422-2.18.04-.957.051-1.266.051-3.714s-.01-2.746-.051-3.713c-.042-.957-.196-1.615-.422-2.18a4.312 4.312 0 00-1.039-1.595A4.311 4.311 0 0014.894.473c-.576-.226-1.224-.37-2.18-.422C11.745.011 11.447 0 9 0z"></path>
                <path d="M9 4.382a4.618 4.618 0 100 9.236 4.618 4.618 0 000-9.236zm0 7.621A3.007 3.007 0 015.997 9 3.007 3.007 0 019 5.997 3.007 3.007 0 0112.003 9 3.007 3.007 0 019 12.003zM13.803 5.277a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z"></path>
              </svg>
            </Avatar>
            <Avatar
              size="small"
              sx={{
                background: "none",
                backgroundColor: "transparent",
                color: "common.textLight",
                borderRadius: "5px",
                height: "26px",
                width: "26px",
                p: 1,
              }}
              component={"a"}
              href="#"
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                color="currentColor"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.97 0C4.464 0 0 4.465 0 9.97c0 4.403 2.875 8.134 6.789 9.48.49.06.673-.245.673-.49v-1.712c-2.753.611-3.364-1.346-3.364-1.346-.428-1.162-1.101-1.468-1.101-1.468-.917-.611.061-.611.061-.611.979.06 1.53 1.04 1.53 1.04.917 1.528 2.323 1.1 2.874.856a2.13 2.13 0 01.611-1.346c-2.201-.245-4.526-1.1-4.526-4.954 0-1.101.367-1.957 1.04-2.691-.061-.184-.428-1.223.122-2.569 0 0 .857-.245 2.753 1.04.795-.245 1.651-.306 2.507-.306.857 0 1.713.122 2.508.306 1.896-1.285 2.752-1.04 2.752-1.04.55 1.346.184 2.385.123 2.63a3.956 3.956 0 011.04 2.691c0 3.853-2.325 4.648-4.527 4.893.367.306.673.918.673 1.835v2.752c0 .245.184.55.673.49A9.98 9.98 0 0020 9.97C19.939 4.464 15.474 0 9.97 0z"
                ></path>
              </svg>
            </Avatar>
            <Avatar
              size="small"
              sx={{
                background: "none",
                backgroundColor: "transparent",
                color: "common.textLight",
                borderRadius: "5px",
                height: "26px",
                width: "26px",
                p: 1,
              }}
              component={"a"}
              href="#"
            >
              <svg
                viewBox="0 0 20 16"
                width="20px"
                color="currentColor"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.93 1.644A16.491 16.491 0 0012.86.38a.062.062 0 00-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 00-4.573 0A10.54 10.54 0 007.2.412a.064.064 0 00-.065-.031 16.447 16.447 0 00-4.07 1.263.058.058 0 00-.028.023C.444 5.54-.266 9.319.083 13.05a.069.069 0 00.026.047 16.584 16.584 0 004.994 2.525.064.064 0 00.07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 00-.035-.088 10.917 10.917 0 01-1.56-.744.064.064 0 01-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 01.065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 01.066.008c.1.083.204.165.31.244a.064.064 0 01-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 00-.034.089c.3.582.643 1.135 1.02 1.66a.063.063 0 00.07.025 16.53 16.53 0 005.003-2.525.064.064 0 00.026-.046c.417-4.314-.699-8.061-2.957-11.384a.05.05 0 00-.026-.023zM6.684 10.778c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.111-.796 2.016-1.798 2.016zm6.646 0c-.986 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.111-.788 2.016-1.797 2.016z"></path>
              </svg>
            </Avatar>
            <Avatar
              size="small"
              sx={{
                background: "none",
                backgroundColor: "transparent",
                color: "common.textLight",
                borderRadius: "5px",
                height: "26px",
                width: "26px",
                p: 1,
              }}
              component={"a"}
              href="#"
            >
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                color="currentColor"
              >
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </Avatar>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "#383241", my: 4 }} />
      <Box display={{ xs: "none", sm: "block" }}>
        <Grid container>
          <Grid item xs={12}>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={{ xs: 2, md: 1 }}
            >
              <Stack direction={"row"}>
                <FormControlLabel
                  sx={{ mr: 1 }}
                  control={<MaterialUISwitch defaultChecked />}
                />
                <LanguageDropdown />
              </Stack>
              <Stack
                gap={1}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <BalanceDetail />

                <Button
                  variant="contained"
                  color="blueBlack"
                  className="primary-button-sm"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ color: "#1E1A28" }}
                >
                  <Box component={"span"}>Buy</Box>
                  <Box
                    component={"span"}
                    sx={{
                      ml: "4px",
                      display: { xs: "none", sm: "inline-block" },
                    }}
                  >
                    {" "}
                    {router.asPath === "/cake" ? "AVAX" : "BTC"}
                  </Box>
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Links;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 44,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(28px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#704FB0"
        )}" fillRule="evenodd" clipRule="evenodd" d="M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z"></path></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#666171",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#27262c",
    width: 26,
    height: 26,
    border: "3px solid #704fb0",
    marginTop: "5px",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 1.2,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#FFB137"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#666171",
    borderRadius: 40 / 2,
  },
}));
