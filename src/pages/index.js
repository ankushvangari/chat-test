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
import {BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { connectP1, connectP2, connectP3, connectP4, setUser } from './client';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



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

  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const User = ({match}) => {
	 return (
    <div>
    <form action="" id="form1">
      <input id="m" autocomplete="off" />
      <button id="Send" onclick="OnSend">Send</button>
    </form>
</div>
    )
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    if (this.state.player1 != 'Player 1 has joined the lobby') {
      connectP1((err, player1) => this.setState({ 
        player1
      })); 
    }
    if (this.state.player2 != 'Player 2 has joined the lobby') {
      connectP2((err, player2) => this.setState({ 
        player2
      })); 
    } 
    else if (this.state.player3 != 'Player 3 has joined the lobby'){
      connectP3((err, player3) => this.setState({ 
        player3
      })); 
    }
    else if (this.state.player4 != 'Player 4 has joined the lobby') {
      connectP4((err, player4) => this.setState({ 
        player4
      }));  
    }  
  }

  state = {
    open: false,
    redirect: false,
    player1: "Waiting for Player 1",
    player2: "Waiting for Player 2",
    player3: "Waiting for Player 3",
    player4: "Waiting for Player 4",
    user: "",
    lobby: false,
    inLobby: false,
    connectedUsers: []
  };



  handleClose = () => {
    this.setState({
      open: false,
    });
  };

	handleSubmit = (e)=>{
    e.preventDefault();
    if (this.state.lobby === false && this.state.connectedUsers.length < 4) {
    setUser(this.state.user, (err, lobby, connectedUsers) =>  this.setState({ 
      lobby, connectedUsers
    }));
  }
  }

  handleChange = (e)=>{
		this.setState({user:e.target.value})
  }

  render() { 
    const { classes } = this.props;
    
    if (this.state.lobby === true && this.state.inLobby === false) {
      this.setState({inLobby:true})
      return <Router><Redirect to='/lobby/' /></Router>
    }

    return (
    	<Router>
      <Route path='/' exact strict render={
        ()=> { return (
          <div>
      <div className={classes.root}>
      <p className="App-intro">
      This is the timer value: {this.state.timestamp}
      </p>
        <Typography variant="h4" gutterBottom>
          Coup
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          hello
        </Typography>
        <li><Link to="/lobby/kush">Kush</Link></li>
				<form onSubmit={this.handleSubmit} >

					<label htmlFor="user">
						<h2>Got a nickname?</h2>
					<input
						type="text"
						id="user"
						value={this.state.user}
						onChange={this.handleChange}
						placeholder={'MYCoolUSername'}
						/>
            </label>

</form>
        <Button className={classes.button} variant="dark" onClick={this.handleSubmit}>
          Join
        </Button>
      </div>
  </div>
    )}}/>
      <Route path='/lobby/' exact strict render={
        ()=> {
          return (
            <div className={classes.list}>
            <List component="nav">
              <ListItem button>
                <ListItemText primary={this.state.connectedUsers[0]} />
              </ListItem>
              <ListItemLink href="#simple-list">
                <ListItemText primary={this.state.connectedUsers[1]} />
              </ListItemLink>
              <ListItem button>
                <ListItemText primary={this.state.connectedUsers[2]} />
              </ListItem>
              <ListItemLink href="#simple-list">
                <ListItemText primary={this.state.connectedUsers[3]} />
              </ListItemLink>
            </List>
          </div>
          )
        }
      }/>

      </Router>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
