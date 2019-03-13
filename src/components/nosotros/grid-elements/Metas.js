import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import trophy from '../../../media/iconos/trophy.png';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 'auto',
  },
  prueba: {
    width: '100%',
    padding: '20px 0 5px 0',
    textAlign: 'center',
  },
  ima: {
    width: 200,
  },
  media: {
    width: 200,
    margin: '20px auto',
    paddingTop: '53%', // 16:9
  },
  actions: {
    display: 'flex',
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 28,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class Metas extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.prueba}>
          <img className={classes.ima} src={trophy} alt="list"/>
        </div>

        <CardActions className={classes.actions} disableActionSpacing>
          <CardContent>
            <span className={classes.cardTitle}>
              Metas
            </span>
          </CardContent>

          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Los objetivos que se ha planteado la Empresa para el
            corto y mediano plazo son los siguientes:</Typography>
            <Typography paragraph>
              Desarrollar cursos para la formación de Técnicos Aeronáuticos en las especialidades más
              importantes y que se consideren de mayor necesidad para el desarrollo de la Industria
              Aeronáutica Nacional e Internacional.

              Mantenerse como empresa líder del país en la Formación de Tripulantes de Cabina y de
              Instructores Aeronáuticos.
              Estructurar cursos de mejoramiento profesional en diferentes áreas y que en forma
              periódica puedan ser ofrecidos a todas las empresas de aviación que participan en
              la actividad diaria del país y del mundo.
              Garantizar el mejor aprovechamiento de los recursos con los cuales cuenta.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Metas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Metas);
