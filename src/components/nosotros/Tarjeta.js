// Dependencies
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// PropTypes
import PropTypes from 'prop-types';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 'auto',
  },
  actions: {
    display: 'flex',
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5
  },
  iconContainer: {
    width: 40,
    borderRight: '2px solid black',
    paddingRight: 10,
    marginRight: 10,
  },
  Img: {
    width: '100%'
  },
  cardTitle: {
    fontSize: 22,
  },
  contenido: {
    backgroundColor: '#f0f0f0',
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

class Tarjeta extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActions className={classes.actions} disableActionSpacing>
          <CardContent style={{width: '80%', padding: 5}}>
            <div className={classes.cardHeader}>
              <div className={classes.iconContainer}>
                <img className={classes.Img} src={this.props.image} alt={this.props.title}/>
              </div>
              <span className={classes.cardTitle}>
                {this.props.title}
              </span>
            </div>
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
          <CardContent className={classes.contenido}>
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

Tarjeta.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tarjeta);
