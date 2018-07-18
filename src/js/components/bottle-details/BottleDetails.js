import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBottle, removeBottle, hideDetails } from '../../actions/index';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import Image from 'material-ui-image'
import BottleCounter from '../bottle-counter/BottleCounter';

const mapStateToProps = state => {
    return {
        bottle: state.details.bottle,
        edit: state.details.edit
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addBottle: bottle => {dispatch(addBottle(bottle))},
        removeBottle: bottle => {dispatch(removeBottle(bottle))},
        hideDetails: () => dispatch(hideDetails()),
    };
};

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 4,
    },
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
    img: {
        overflow: 'hidden',
        width: '100%',
    },
  });


  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }


class BottleDetails extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(event) {
        this.props.addBottle();
    }

    handleRemove(event) {
        this.props.removeBottle();
    }

    handleClose(event) {
        this.props.hideDetails();
    }


    renderDetailsRead(bottle) {
        const {classes} = this.props;
        return (
            <Grid container spacing={16} className={classes.root}>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="display2" component="span">
                                {bottle.name}
                            </Typography>
                            <Typography variant="title" align="right"  component="span">
                                {bottle.year}
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="body1">
                                {bottle.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <img
                        className={classes.img}
                        src={bottle.image}
                    />
                    <BottleCounter />
                </Grid>
            </Grid>
        );
    }

    render() {
        const {classes} = this.props;
        return (
                <Dialog 
                    fullScreen
                    open={this.props.bottle !== null}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Détails
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {this.props.bottle &&
                        <div>
                            <DialogTitle id="form-dialog-title">
                                {this.props.bottle.name}
                            </DialogTitle>
                            <DialogContent>
                                {this.renderDetailsRead(this.props.bottle)}
                            </DialogContent>            
                        </div>            
                    }
                </Dialog>
        );
    }

}

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(BottleDetails)
);