import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'materialize-css/dist/css/materialize.min.css';
import Objetivos from './grid-elements/Objetivos'
import Estrategia from './grid-elements/Estrategia'
import Metas from './grid-elements/Metas'
import Mision from './grid-elements/Mision'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class GridAbout extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.root} spacing={0}>
        <Grid item md={3} xs={8}>
          <Mision />
        </Grid>
        <Grid item md={3} xs={8}>
          <Objetivos />
        </Grid>
        <Grid item md={3} xs={8}>
          <Estrategia />
        </Grid>
        <Grid item md={3} xs={8}>
         <Metas />
        </Grid>
      </Grid>
    );
  }
}

GridAbout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridAbout);