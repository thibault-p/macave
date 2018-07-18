import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addBottle,
  removeBottle,
  hideDetails,
  enableSearch,
  disableSearch
} from "../../actions/index";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import BottleCounter from "../bottle-counter/BottleCounter";

const styles = theme => ({});

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    enableSearch: () => {
      dispatch(enableSearch());
    },
    disableSearch: () => {
      dispatch(disableSearch());
    }
  };
};

class SearchBar extends Component {
  SearchBar(props) {
    this.super(props);
  }

  handleStartSearch() {
    this.props.enableSearch();
  }

  renderDefaultAppBar() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="title" color="inherit">
            MaCave
          </Typography>
          <IconButton
            color="inherit"
            onClick={this.handleStartSearch.bind(this)}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }

  renderSearchAppBar() {
    return <div />;
  }

  render() {
    if (!this.props.search) {
      return this.renderDefaultAppBar();
    } else {
      return this.renderSearchAppBar();
    }
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar)
);
