import { TSidebarItems } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React from "react";

type TProps = {
  item: TSidebarItems;
};

const Items = ({ item }: TProps) => {
  return (
    <Link href={"/"}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>H</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default Items;
