import { Button, Container, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Fade from "react-reveal/Fade";
import register from "../../img/register.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px auto",
    background: "#F5F5F5",  
    borderRadius: "10px",
    maxWidth: 600,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "10px 20px",
    maxWidth: 500,
    borderRadius: 10,
  },

  img: {
    display: "block",
    maxWidth: "100%",
    borderRadius: 10,
    paddingLeft: "10px",
    paddingBottom: 10,
  },
  labelForm: {
    margin: 20,
  },
  btn: {
    padding: 10,
    color: "#fff",
    background: "#F1CF73",
    "&:hover": {
      background: "#6A5B4D",
    },
    [theme.breakpoints.up("xs")]: {
      padding: "5px 10px",
    },
  },
  container:{
    border: "1px solid #F5F5F5",
  },
}));

export default function RegisterComponent() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={1} className={classes.root}>
        <Grid container item xs={12} sm={12} spacing={3}>
          <form noValidate autoComplete="off" className={classes.paper}>
            <Fade left>
              <img className={classes.img} alt="complex" src={register} />
            </Fade>
            <div className={classes.labelForm}>
              <Fade right>
                <div>
                  <TextField
                    id="standard-basic"
                    type="text"
                    label="Nome"
                    fullWidth
                    color="secondary"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    type="text"
                    label="Sobrenome"
                    fullWidth
                    color="secondary"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    type="email"
                    label="E-mail"
                    fullWidth
                    color="secondary"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    type="password"
                    label="Senha"
                    fullWidth
                    color="secondary"
                  />
                </div>
              </Fade>
              <br />
              <div></div>
              <Button
                variant="contained"
                color="default"
                className={classes.btn}
              >
                Enviar
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
