import React, { Component } from "react";
import { connect } from "react-redux";
import Chip from '@material-ui/core/Chip';
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
import SvgIcon from "@material-ui/core/SvgIcon";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import indigo from '@material-ui/core/colors/indigo';

const mapStateToProps = state => {
    return { 
        bottles: state.bottles 
    };
}


const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.unit * 11,
        height: '100%',
        textAlign: 'left',
    },
    card: {
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    button: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    },
    chip: {
        right: theme.spacing.unit / 2,
        position: 'absolute',
        backgroundColor: indigo[100]
    },
    coloredAvatar: {
        backgroundColor: indigo[500]
    },
    tagChip: {
        margin: theme.spacing.unit / 2
    }
  });


function  BottleIcon(props) {
    return (
        <SvgIcon {...props}>
            <path fill="#000000" d="M10,22A1,1 0 0,1 9,21V11C9,9 10,7.25 11,7V2.5A0.5,0.5 0 0,1 11.5,2H12.5A0.5,0.5 0 0,1 13,2.5V7C14,7.25 15,9 15,11V21A1,1 0 0,1 14,22H10Z" />
        </SvgIcon>
    );
}


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
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Card className={classes.card}>
                    <CardHeader
                        title={bottle.name}
                        subheader={bottle.year}
                    />
                    <CardMedia 
                        className={classes.media} 
                        image={bottle.image} />
                    <CardContent>
                        <Typography variant="caption" gutterBottom>
                            {bottle.subtitle}
                        </Typography>
                        {bottle.tags.map((tag, idx) => (
                           <Chip
                            key={idx}
                            label={tag}
                            className={classes.tagChip}/> 
                        ))}
                    </CardContent>
                    <CardActions>
                        <Chip 
                            className = {classes.chip}
                            avatar={
                                <Avatar className={classes.coloredAvatar}>
                                    <BottleIcon style={{color: 'white'}}/>
                                </Avatar>
                            }
                            label={bottle.quantity}
                        />
                        <Button size="small" color="primary" onClick={this.handleShowDetail.bind(this, bottle.id)}>
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
            <div
                className={classes.root}>
                <Grid 
                    container 
                    justify='center'>
                    <Grid item xs={11}>
                        <Grid container spacing={8}>
                            {this.state.bottles.map(bottle =>(
                                <Grid key={bottle.id} item xs={12} sm={6} md={4} lg={3}>
                                    {this.renderBottle(bottle)}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
                <Button className={classes.button} variant="fab" color="primary" aria-label="add" onClick={this.handleCreate}>
                    <AddIcon />
                </Button>
            </div>
        );
    }
}




export default withStyles(styles)(connect(mapStateToProps)(ConnectedBottleList));
