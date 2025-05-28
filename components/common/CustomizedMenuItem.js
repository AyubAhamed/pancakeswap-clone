import React from "react";
import { colors, MenuItem } from "@mui/material";
import Link from "next/link";
import Logout from "@mui/icons-material/Logout";
const CustomizedMenuItem = ({ href, label, color, hasLogoutIcon }) => {
  return (
    <Link
      href={href}
      target={hasLogoutIcon ? "_blank" : ""}
      style={{ textDecoration: "none" }}
    >
      <MenuItem
        sx={{
          py: "12px",
          color: color ? color : "text.primary",
          justifyContent: hasLogoutIcon ? "space-between" : undefined,
          width: "280px",
        }}
      >
        {label}
        {hasLogoutIcon && (
          <Logout fontSize="small" sx={{ color: "text.primary" }} />
        )}
      </MenuItem>
    </Link>
  );
};

export default CustomizedMenuItem;
