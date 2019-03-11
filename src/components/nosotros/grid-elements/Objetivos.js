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
import list from '../../../media/iconos/list.png';

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

class Objetivos extends React.Component {
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
          image={list}
          title="list"
        />

        <CardActions className={classes.actions} disableActionSpacing>
          <CardContent className={classes.title}>
            <span className="card-title">
              Objetivos
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

              Dotar a la Empresa con los recursos técnicos necesarios para el mejor desarrollo 
              de sus actividades.

              Desarrollar Habilitaciones de Equipos Aeronauticos, nuevos cursos técnicos y todas
               aquellas actividades educativas que se consideren importantes para ampliar y solidificar 
               la actividad Aeronáutica en el país y en los paises que lo requieran.

              Mantener y ampliar las asesorías técnicas a las empresas del ramo en el ámbito nacional 
              e Internacional.

              Internacionalizar la Empresa mediante la captación de estudiantes de otros países, 
              aprovechando los factores de nuestra economía que permitan ofrecer buenas oportunidades 
              de estudio en el país.

              Mantener vigilancia sobre la organización y producir los cambios que sean 
              necesarios en la estructura, sistemas, normas y procedimientos para buscar 
              un desarrollo óptimo de sus actividades.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Objetivos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Objetivos);
