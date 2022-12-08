import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: 10,
    color: "#fff",
    border: "none",
    background: "#F1CF73",
    "&:hover": {
      background: "#6A5B4D",
    },
    [theme.breakpoints.up("xs")]: {
      padding: "5px 10px",
    },
  },
}));
export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.btn}
        onClick={handleClickOpen}
      >
        Cadastrar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja cadastrar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.btn}>
            Cancelar
          </Button>
          <Link to="/cadastro">
            <Button onClick={handleClickOpen} autoFocus className={classes.btn}>
              Confirmar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
