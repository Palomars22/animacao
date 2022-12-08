import { Card, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Fade from "react-reveal/Fade";

import Modal from "../Modal/Modal";
const useStyles = makeStyles((theme) => ({
  mainItem: {
    color: "#6A5B4D",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
      fontSize: "1.5rem",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
      fontSize: "1.8rem",
      margin: "0px auto",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(2),
      fontSize: "2rem",
      textAlign: "center",
      h1: {},
    },
  },
  mainContainer: {
    paddingTop: 40,
    paddingBottom: 40,
    border: "1px solid #F5F5F5",
  },

  btn: {
    marginTop: 10,
    marginLeft: 200,
    padding: 10,
    color: "#fff",
    background: "#F1CF73",
    [theme.breakpoints.up("xs")]: {
      marginLeft: 0,
      padding: "5px 10px",
    },
  },
}));

export default function BannerComponent() {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Card>
        <Grid container>
          <Grid item md={8} sm={12} lg={8} xs={12} className={classes.mainItem}>
            <Fade right>
              <h1>Doação Online</h1>
              <p>Adote seu melhor amigo</p>
              <Modal />
            </Fade>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
