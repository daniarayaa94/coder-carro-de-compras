import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

import ListItem from "@mui/material/ListItem";

import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerNavBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <ListItem>
        <Link to="/"> Home </Link>
      </ListItem>
      <ListItem>
        <Link to="/productos"> Productos </Link>
      </ListItem>
      <ListItem>
        <Link to="/nosotros"> Nosotros </Link>
      </ListItem>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
