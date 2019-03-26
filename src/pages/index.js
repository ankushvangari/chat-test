import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },

  button: {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  justifyContent: 'center',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  },
});

const User = ({match}) => {
	 return (
    <form action="" id="form1">
      <input id="m" autocomplete="off" />
      <button id="Send" onclick="OnSend">Send</button>
    </form>
    )
}

class Index extends React.Component {
  state = {
    open: false,
    redirect: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() { 
    const { classes } = this.props;
    const { open } = this.state;

    return (
    	<Router>
      <Route path='/' exact strict render={
        ()=> { return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Coup
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          hello
        </Typography>
        <li><Link to="/lobby/kush">Kush</Link></li>
        <Button className={classes.button} variant="dark" href="/lobby/kush">
          Join
        </Button>
      </div>
    )}}/>
      <Route path='/lobby/:username' exact strict component={User}/>
      </Router>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
