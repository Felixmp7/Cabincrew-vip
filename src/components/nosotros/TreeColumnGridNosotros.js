import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'materialize-css/dist/css/materialize.min.css';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GridAbout extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.root} spacing={16}>
        <Grid item md={3} xs={8}>
          <h3>Hola</h3>
        </Grid>
        <Grid item md={3} xs={8}>
          <h3>Hola</h3>
        </Grid>
        <Grid item md={3} xs={8}>
         <h3>Hola</h3>
        </Grid>
      </Grid>
    );
  }
}

GridAbout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridAbout);