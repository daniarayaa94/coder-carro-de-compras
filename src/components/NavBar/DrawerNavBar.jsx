import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { IconButton } from '@mui/material';

export default function DrawerNavBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Accesorios para Vehiculos","Animales y Mascotas","Antigüedades","Autos, Motos y Otros"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
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

          <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list("top")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

