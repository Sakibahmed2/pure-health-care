import { Box, Divider, List, Stack, Typography } from "@mui/material";

import assets from "@/assets";
import { TUserRole } from "@/types";
import { sidebarItems } from "@/utils/sidebarItems";
import Image from "next/image";
import Link from "next/link";
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
        {sidebarItems("admin" as TUserRole).map((item, index) => (
          <Items key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SidebarItems;
