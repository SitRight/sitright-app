import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Improvement() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Posture Improvement</Title>
      <Typography component="p" variant="h1">
        400%
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Since February 1st, 2021
      </Typography>
    </React.Fragment>
  );
}