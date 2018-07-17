import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBottle, removeBottle } from '../../actions/index';
import Paper from '@material-ui/core/Paper';

const mapDispatchToProps = dispatch => {
    return {
        addBottle: bottle => dispatch(addBottle(bottle)),
        removeBottle: bottle => dispatch(removeBottle(bottle)),
    };
};

class BottleDetails extends Component {
    constructor() {
        super();
        this.state = {
            bottle: null
        };
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
        this.setState()
    }

    render() {
        return (
            <Paper>sfsdf</Paper>
        );
    }

}

export default connect(mapDispatchToProps)(BottleDetails);