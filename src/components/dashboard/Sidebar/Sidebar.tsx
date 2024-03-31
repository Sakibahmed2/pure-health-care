import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { sidebarItems } from "@/utils/sidebarItems";
import { TUserRole } from "@/types";
import Items from "./Items";

const SidebarItems = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        py={2}
        mt={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component={"h1"}>
          PU
          <Box component="span" color="primary.main">
            RE
          </Box>{" "}
          health care
        </Typography>
      </Stack>
      <Divider />
      <List>
        {sidebarItems("doctor" as TUserRole).map((item, index) => (
          <Items key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SidebarItems;
