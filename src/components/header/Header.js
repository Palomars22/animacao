import { Container, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "#6A5B4D",
    },
    link: {
      [theme.breakpoints.down(668)]: {
        display: "none",
      },
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const openMenu = Boolean(menu);
  return (
    <div className={classes.root} elevation={3}>
      <AppBar position="static" color="default">
        <Container maxWidth="lg">
          <Fade left>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="default"
                aria-label="menu"
                onClick={(e) => setMenu(e.currentTarget)}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                open={openMenu}
                anchorEl={menu}
                onClose={() => setMenu(null)}
              >
                <Link to="/">
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/banner">
                  <MenuItem>Banner</MenuItem>
                </Link>
                <Link to="/sobre">
                  <MenuItem>Sobre</MenuItem>
                </Link>
                <Link to="/cadastro">
                  <MenuItem>Cadastro</MenuItem>
                </Link>
              </Menu>
              <Typography variant="h6" className={classes.title}>
                Centro de Adoções
              </Typography>
              <Link to="/" className={classes.link}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/banner" className={classes.link}>
                <Button color="inherit">Banner</Button>
              </Link>
              <Link to="/sobre" className={classes.link}>
                <Button color="inherit">Sobre</Button>
              </Link>
              <Link to="/cadastro" className={classes.link}>
                <Button color="inherit">Cadastro</Button>
              </Link>
            </Toolbar>
          </Fade>
        </Container>
      </AppBar>
    </div>
  );
}
