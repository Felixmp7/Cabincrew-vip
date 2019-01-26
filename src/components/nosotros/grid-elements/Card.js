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
import success from '../../../media/iconos/success.png';

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

class Tarjeta extends React.Component {
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
          image={success}
          title="success"
        />

        <CardActions className={classes.actions} disableActionSpacing>
          <CardContent className={classes.title}>
            <span className="card-title">
              Mision
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
            <Typography paragraph>CABIN CREW TRAINING AND V.I.P. SERVICES C.A, 
            tiene como Misión principal la de planificar, dirigir, coordinar, 
            ejecutar y supervisar actividades educativas para el desarrollo e 
            implementación de Cursos para la Formación de Profesionales y Técnicos
             del medio Aeronáutico.</Typography>
            <Typography paragraph>
              Así como también todas las actividades relacionadas con la actualización y
               el mejoramiento continuo de dicho personal con el objeto de integrar y mantener
                un grupo humano Profesional que apoye y de soporte sólido al desarrollo de la 
                Aviación Nacional e Internacional y de esta manera mantenernos en nuestra posicion
                 actual como la mejor opción de Centros de Instrucción en Capacitación de 
                 Profesionales Aeronáuticos.
            </Typography>
            <Typography paragraph>
              Para el fiel cumplimiento de su Misión se apoya en las actividades que:
            </Typography>
            <Typography paragraph>
              Describen el futuro deseable de la empresa.
              Proveen una guía direccional, adaptable a las circunstancias del momento, 
                para alcanzar los fines y objetivos de la Empresa.
              Sean cuantificables y como tales, capaces de ser analizadas y evaluadas.
              Se pueden fijar con plazos y limites funcionales.
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
