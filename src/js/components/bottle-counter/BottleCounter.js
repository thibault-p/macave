import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutline";
import { withStyles } from "@material-ui/core/styles";
import { addBottle, removeBottle } from "../../actions/index";
import BottleIcon from "./BottleIcon";

const styles = theme => ({});

const mapStateToProps = state => {
  return {
    volume: state.details.bottle.quantity,
    id: state.details.bottle.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBottle: bottleId => {
      dispatch(addBottle(bottleId));
    },
    removeBottle: bottleId => {
      dispatch(removeBottle(bottleId));
    }
  };
};

class BottleCounter extends Component {
  BottleCounter(props) {
    this.super(props);
  }

  handleAdd() {
    this.props.addBottle(this.props.id);
  }

  handleRemove() {
    this.props.removeBottle(this.props.id);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems="center" spacing={16}>
        <Grid item xs={3}>
          <BottleIcon style={{ fontSize: 80 }} />
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ fontSize: 80 }} align="right">
            {this.props.volume}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item xs={12}>
              <IconButton
                onClick={this.handleAdd.bind(this)}
                aria-label="Add"
                className={classes.button}
              >
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <IconButton
                disabled={this.props.volume === 0}
                aria-label="Remove"
                onClick={this.handleRemove.bind(this)}
                className={classes.button}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BottleCounter)
);
