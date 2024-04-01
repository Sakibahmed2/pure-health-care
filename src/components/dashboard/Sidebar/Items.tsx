import { TSidebarItems } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TProps = {
  item: TSidebarItems;
};

const Items = ({ item }: TProps) => {
  const linkPath = `/dashboard/${item.path}`;

  const pathname = usePathname();

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderRight: "5px solid #1B9C85",
                bgcolor: "#F4F7FE",
                "& svg": {
                  color: "#1B9C85",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default Items;
