import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import ForestIcon from "@mui/icons-material/Forest";

import SettingsIcon from "@mui/icons-material/Settings";

import Logo from "../../utils/images/icons/logo.jpg";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      //   className="bg-sky-200 h-screen"
    >
      <List className="flex flex-col items-center">
        <ListItem disablePadding className=" border-b-4 border-sky-700 p-2">
          {/* <p className=" gradient-text text-lg font-bold">Call Up!</p> */}
          <img
            src={Logo}
            className="w-24 h-20 mx-2 rounded-lg border-4 border-sky-700"
          />{" "}
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon className="text-sky-700" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-sky-700 ">
                Heim
              </p>
              {/* <ListItemText primary="Home" /> */}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/aboutus">
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon className="text-sky-700" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-sky-700 ">
                Über uns
              </p>
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/services">
            <ListItemButton>
              <ListItemIcon>
                <SecurityIcon className="text-sky-700" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-sky-700 ">
                Sicherheitsdienste
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/career">
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon className="text-sky-700" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-sky-700 ">
                Karriere
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/contactus">
            <ListItemButton>
              <ListItemIcon>
                <CallIcon className="text-sky-700" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-sky-700 ">
                Kontaktiere uns
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="  z-20  ">
      <div className=" top-4 right-4">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className=" flex w-screen justify-between">
              <div className="flex justify-center items-center">
                <img
                  src={Logo}
                  className="w-24 h-20  rounded-lg mx-5 border-4 border-sky-700  m-5"
                />
              </div>
              <Button onClick={toggleDrawer(anchor, true)} className="">
                <MenuIcon fontSize="large" className="text-sky-700" />
              </Button>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
