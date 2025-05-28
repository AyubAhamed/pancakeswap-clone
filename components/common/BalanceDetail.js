import BunnySingleSmallIcon from "@/assets/Icons/svg/BunnySingleSmallIcon";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const BalanceDetail = () => {
  const router = useRouter();
  return (
    <Button
      sx={{ fontSize: "16px", color: "#7a6eaa" }}
      variant="text"
      startIcon={
        router.asPath === "/" ? (
          <Image src="/Bitcoin.svg.webp" width={20} height={20} />
        ) : (
          <Image src="/avalanche-avax-logo.webp" width={20} height={20} />
        )
      }
    >
      $1.904
    </Button>
  );
};

export default BalanceDetail;
