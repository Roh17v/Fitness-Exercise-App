import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" mb="10px">
      <Stack alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="180px" height="40px" />
        <Typography>Made with ❤️ by Rohit Verma</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
