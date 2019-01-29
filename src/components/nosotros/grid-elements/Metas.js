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
    maxWidth: 400,
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
  texto: {
    fontSize: 16,
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
            <div>
              <ul className={classes.texto}>
                <li>Proporcionar la mejor calidad educativa para la Formación de los diferentes técnicos 
                  Aeronauticos.</li>
                <li>Captar el mayor número de aspirantes a ser Capacitados como Tripulantes de Cabina.</li>
                <li>Mantener actualizados los cursos implantados.</li>
                <li>Desarrollar nuevos cursos.</li>
                <li>Obtención del personal de instructores de tierra y aire 
                  con el mejor estándar posible.</li>
                <li>Definir la estructura organizativa para poder cumplir 
                  con los objetivos trazados.</li>
                <li>Mantener confortable nuestros espacios físicos.</li>
                <li>Efectuar los contactos necesarios con las instituciones 
                  Nacionales e Internacionales para el apoyo de todas las 
                  actividades de la Empresa en todos o en algunos programas 
                  de Instrucción.</li>
                <li>Mantener la vigencia de nuestra Certificación.</li>
              </ul>
            </div>
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
