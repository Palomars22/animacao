import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 70,
    background: "#000",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 20,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Fade right>
        <Typography variant="h6" className={classes.title}>
          Centro de Adoções 2022
        </Typography>
      </Fade>
    </Container>
  );
}
