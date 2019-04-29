import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
}));

class chooseIt extends Component {

  render(){
    return (
        <div>
          <Button variant="contained" color="secondary" className={useStyles.button}>
            Secondary
          </Button>
        </div>
      );
  }

  
}

export default chooseIt;
