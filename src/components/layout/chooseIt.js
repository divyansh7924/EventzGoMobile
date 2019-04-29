import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
}));

class chooseIt extends Component {
  const stt = useStyles();

  render(){
    return (
        <div>
          <Button variant="contained" color="secondary" className={stt.button}>
            Secondary
          </Button>
        </div>
      );
  }

  
}

export default chooseIt;
