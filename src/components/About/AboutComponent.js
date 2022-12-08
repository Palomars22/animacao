import { Container, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

import casinha from "../../img/casinha.png";
import coracao from "../../img/coracao.png";
import sentado from "../../img/sentado.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "60px 20px",
    background: "#F5F5F5",
    marginTop: 5,
    [theme.breakpoints.down("xs")]: {
      padding: "20px 10px 20px 25px ",
    },
  },
  mainTitle: {
    padding: 20,
    color: "#6A5B4D",
    fontSize: "2.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
      textAlign: "center",
      h1: {},
    },
  },
  root: {
    maxWidth: 290,
    padding: 20,
    border: "2px solid #F1CF73",
    borderRadius: 10,
    margin: "5px auto",
    transitions: "all 0.3s",
    "&:hover": { transform: "scale(0.8)" },
  },
  media: {
    [theme.breakpoints.down("xs")]: {
      height: 230,
    },
    [theme.breakpoints.up("sm")]: {
      height: 250,
    },
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      width: 280,
      padding: 5,
    },
  },
  subtitle: {
    textAlign: "center",
    color: "#6A5B4D",
    fontSize: "1.5rem",
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function AboutComponent() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Container className={classes.mainContainer}>
      <Fade right>
        <div className={classes.mainTitle}>
          <h2>Sobre Nós</h2>
          <p> Venha fazer parte do nosso centro de adoções</p>
        </div>
      </Fade>

      <Zoom>
        <Grid container className={classes.container}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Link to="/cadastro">
                    <CardMedia
                      className={classes.media}
                      image={casinha}
                      title="Contemplative Reptile"
                    />
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>

            <p className={classes.subtitle}>Faça um amigo</p>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <CardMedia
                    className={classes.media}
                    image={sentado}
                    title="Contemplative Reptile"
                    onClick={handleClick}
                  />
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>
                      Faça parte do nosso grupo.
                    </Typography>
                  </Popover>
                </CardContent>
              </CardActionArea>
            </Card>
            <p className={classes.subtitle}>Receba Amor</p>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Link to="/banner">
                    {" "}
                    <CardMedia
                      className={classes.media}
                      image={coracao}
                      title="Contemplative Reptile"
                    />
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
            <p className={classes.subtitle}>Doe Amor</p>
          </Grid>
        </Grid>
      </Zoom>
    </Container>
  );
}
