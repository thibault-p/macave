import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const mapStateToProps = state => {
    return { 
        bottles: state.bottles 
    };
}

const mapDispatchToProps = state => {
    return {
        
    };
}


const styles = theme => ({
    root: {
        textAlign: 'left',
        'margin': theme.spacing.unit * 5,
    },
    card: {
        maxWidth: 345,
    },
    button: {
        position: 'absolute',
        right: theme.spacing.unit * 5,
        bottom: theme.spacing.unit * 5
    }
  });



class ConnectedBottleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bottles: props.bottles
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleShowDetail = this.handleShowDetail.bind(this);
    }

    handleCreate() {
        console.log('hey!', this);
    }

    handleShowDetail(event) {
        console.log('Show details', event);
    }


    renderBottle(bottle) {
        const { classes } =this.props;
        return (
            <Slide direction="up" in="true" mountOnEnter unmountOnExit>
                <Card className={classes.card}>
                    <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {bottle.name}
                        </Typography>
                        <Typography component="p">
                            {bottle.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button variant="contained" size="small" color="primary" onClick={this.handleShowDetail.bind(this, bottle.id)}>
                        Détails
                    </Button>
                    </CardActions>
                </Card>
            </Slide>
        );
    }



    render() {
        const { classes } =this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={16}>
                    {this.state.bottles.map(bottle =>(
                        <Grid key={bottle.id} item xs={12} sm={3}>
                            {this.renderBottle(bottle)}
                        </Grid>
                    ))}
                    <Button className={classes.button} variant="fab" color="primary" aria-label="add" onClick={this.handleCreate}>
                        <AddIcon />
                    </Button>
                </Grid>
            </div>
        );
    }
}




export default withStyles(styles)(connect(mapStateToProps)(ConnectedBottleList));
