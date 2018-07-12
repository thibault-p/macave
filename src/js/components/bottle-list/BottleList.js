import React from "react";
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

const mapStateToProps = state => {
    return { bottles: state.bottles };
}


const styles = theme => ({
    fab: {
      margin: theme.spacing.unit * 2,
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3,
    },
  });


const ConnectedBottleList = ({ bottles }) => {
    
    return (
        <Grid container spacing={16}>
            {bottles.map(bottle =>(
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Test
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Button variant="fab" color="primary" aria-label="add" className="absolute">
                <AddIcon />
            </Button>
        </Grid>
    );
}




export default withStyles(styles)(connect(mapStateToProps)(ConnectedBottleList));
