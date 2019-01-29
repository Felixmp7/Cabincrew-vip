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
import trophy from '../../../media/iconos/trophy.png';

const styles = theme => ({
  card: {
    maxWidth: 350,
  },
  media: {
    width: 200,
    margin: '20px auto',
    paddingTop: '57%', // 16:9
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

class Metas extends React.Component {
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
          image={trophy}
          title="trophy"
        />

        <CardActions className={classes.actions} disableActionSpacing>
          <CardContent className={classes.title}>
            <span className="card-title">
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
            <Typography paragraph>Con la finalidad de evaluar el cumplimiento de los objetivos descritos, 
            la Empresa se ha propuesto cumplir las siguientes metas:</Typography>
            <Typography paragraph>
              Proporcionar la mejor calidad educativa para la Formación de los diferentes técnicos 
              Aeronauticos.

              Captar el mayor número de aspirantes a ser Capacitados como Tripulantes de Cabina.

              Mantener actualizados los cursos implantados.

              Desarrollar nuevos cursos como: Oficial de Operaciones o 
              Despachador de Vuelo, Ampliar cada día nuestro pensum 
              ofrecido en el curso de Inglés Técnico Aeronáutico en 
              diferentes niveles y seguir ofreciendo los cursos de 
              Mejoramiento Profesional, especialmente en el área de 
              Seguridad Operacional, Factores Humanos y Seguridad e 
              la Aviación Civil (AVSEC), SMS, etc.

              Obtención del personal de instructores de tierra y aire 
              con el mejor estándar posible para lograr con esto, la 
              motivación necesaria y ofrecer cursos de estandarización 
              y recurrencia, aplicando el mayor esfuerzo para obtener 
              la mejor calidad en los cursos ofrecidos.

              Definir la estructura organizativa para poder cumplir 
              con los objetivos trazados.

              Mantener confortable nuestros espacios físicos, los 
              cuales son necesarios para el desarrollo de las 
              actividades en forma cómoda.

              Efectuar los contactos necesarios con las instituciones 
              Nacionales e Internacionales para el apoyo de todas las 
              actividades de la Empresa en todos o en algunos programas 
              de Instrucción.

              Mantener la vigencia de nuestra Certificación, para ofrecer 
              la continuidad en la programación de los cursos.
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
