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

  setRedirect = () => {
    window.location = '/index';
  };


  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Coup Lobby
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Player
        </Typography>
        <Button className={classes.button} variant="dark" onClick={this.setRedirect}>
          Start
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
