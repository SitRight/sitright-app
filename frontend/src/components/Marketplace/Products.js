import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Products = () => { //export default allows for other modules to 
  //import in the grid function. 
  //create class based upon class outside of export default. 
  const classes = useStyles();

    <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
        </Grid>
    <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
        </Grid>
    <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
        </Grid>
    </Grid>
}

export default Products