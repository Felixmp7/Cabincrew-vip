import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import options from '../../../media/iconos/options.png';

const styles = theme => ({
  card: {
    maxWidth: 400,
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
    justifyContent: 'flex-end',
  },
  title: {
    marginRight: 65,
    fontSize: 28,
  },
  expand: {
    transform: 'rotate(0deg)',
    //marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class Estrategia extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={options}
          title="options"
        />

        <CardActions className={classes.actions} disableActionSpacing>
          <CardContent className={classes.title}>
            <span className="card-title">
              Estrategia
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
            <Typography paragraph>Para el cabal cumplimiento de su Misión, la empresa se ha fijado 
              las siguientes estrategias:

              La definición de una organización capaz de definir las reglas y programas necesarios 
              para garantizar la completa operatividad de las mismas.
              La estructura jerarquía que permita el manejo de información y la adecuada toma de 
              decisiones.
              El establecimiento de objetivos y metas.
              Una continua supervisión de la organización, planes y programas, con el objeto de 
              mantener los más altos niveles de estándares en todas las actividades educativas, 
              para lograr y mantener la mejor calidad en los cursos que se ofrecen.
            </Typography>
            <Typography paragraph>
              Estas estrategias conllevan la definición de una estructura funcional centralizada 
              la cual pueda operar eficientemente con un limitado número de recursos humanos que 
              se enriquecerá con personal capacitado, dependiendo del volumen de las actividades 
              académicas en las que se vea envuelta, en función de que se maneje un adecuado clima 
              organizacional, sistemas y procedimientos requeridos para el desarrollo de sus actividades 
              para el logro de los objetivos y metas establecidas.

              Tal como lo permiten las Regulaciones Aeronauticas Venezolanas actuales 
              CABIN CREW TRAINING AND V.I.P SERVICES C.A, tiene la opción de crear núcleos en algunas 
              regiones del país donde considere conveniente el desarrollo Aeronáutico de la propia 
              región en particular y la del país en forma general.

              CABIN CREW TRAINING AND V.I.P SERVICES C.A, como Centro de Instrucción Aeronáutica del 
              país, mantiene una vigilancia constante sobre su organización, con el objeto de garantizar 
              el uso óptimo de los recursos humanos y materiales para cumplir cabalmente con las metas y 
              objetivos trazados.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Estrategia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Estrategia);
