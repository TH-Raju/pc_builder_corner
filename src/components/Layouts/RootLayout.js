import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

import CategoryIcon from "@mui/icons-material/Category";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { useSession, signOut } from "next-auth/react";
import AuthContext from "../../context/AuthContext";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import { customColor } from "../../../utils/colors";
const Navbar = ({ children }) => {
  const { data: categoryItem } = useGetCategoryQuery(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { user, setUser } = useContext(AuthContext);
  const { data } = useSession();
  const { data: session } = useSession();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleLogout = async () => {
    await signOut();
  };

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data, setUser]);

  const navItems = [
    {
      text: "PC Builder",
      icon: <ImportantDevicesIcon style={{ color: "#f1f8e9" }} />,
      path: "/pc-builder",
    },
  ];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" style={{backgroundColor:"#1A202E"}}>
        <Toolbar>
          {isXs || isSm ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href={"/"}>
                  <Button style={{ color: customColor.buttonSecondery,fontWeight:"600" }}>PC MART</Button>
                </Link>
              </Typography>
              <List
                component="nav"
                aria-labelledby="main navigation"
                sx={{ display: isLg ? "flex" : "none" }}
              >
                <Button
                  color="inherit"
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <CategoryIcon />
                  Categories
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  {categoryItem?.category?.map((c) => (
                    <>
                      <Link
                        style={{ textDecoration: "none" }}
                        href={`/category/${c._id}`}
                      >
                        <MenuItem onClick={handleClose}>
                          {c.categories_name}
                        </MenuItem>
                      </Link>
                    </>
                  ))}
                </Menu>
                {navItems.map((item) => (
                  <Link href={item.path} key={item.text}>
                    <Button style={{ color: "#f1f8e9" }}>
                      <ListItem button component="a">
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    </Button>
                  </Link>
                ))}
              </List>

              <div>
                {session?.user ? (
                  <Button style={{ color: "#fff" ,fontWeight:"600",backgroundColor:"red" }} onClick={handleLogout}>
                    <LogoutIcon />
                    Logout
                  </Button>
                ) : (
                  <Link href="/login">
                    <Button  style={{ color: "#fff" ,fontWeight:"600",backgroundColor:customColor.buttonColor }}>
                      <LoginIcon />
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        variant={isLg ? "permanent" : "temporary"}
        sx={{ display: isXs || isSm ? "block" : "none" }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <Link href={item.path} key={item.text}>
                <Button>
                  <ListItem button component="a">
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Button>
              </Link>
            ))}
          </List>
          <List>
            {session?.user ? (
              <Button onClick={handleLogout}>
                <ListItem button component="a">
                  <LogoutIcon />
                  <ListItemText primary={"Logout"} />
                </ListItem>
              </Button>
            ) : (
              <Link href="/login">
                <Button>
                  <ListItem button component="a">
                    <LoginIcon />
                    <ListItemText primary={"                  Login"} />
                  </ListItem>
                </Button>
              </Link>
            )}

            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ListItem button component="a">
                <CategoryIcon />
                <ListItemText primary={"                  Categories"} />
              </ListItem>
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {categoryItem?.category?.map((c) => (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/category/${c._id}`}
                  >
                    <MenuItem onClick={handleClose}>
                      {c.categories_name}
                    </MenuItem>
                  </Link>
                </>
              ))}
            </Menu>
          </List>
        </div>
      </Drawer>
      {children}
    </>
  );
};

export default Navbar;
