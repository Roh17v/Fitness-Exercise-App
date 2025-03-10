import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "144px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" fontSize="24px" gap="40px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            borderBottom: "3px solid #FF2625",
            color: "#3A1212",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
