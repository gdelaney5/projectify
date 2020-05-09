import React, { useState } from 'react';
import {
  makeStyles,
  Container,
  Typography,
  Button
} from "@material-ui/core";
import { Jutsu } from 'react-jutsu';
import { dark } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "93vh",
    backgroundColor: theme.palette.paper.main,
  },
  textField: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',            
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,    
  }, 
  formField: {
    paddingTop: 10,
    paddingBottom: 10, 
    marginBottom: 10,
  }
}));

const VideoChat = () => {

  const classes = useStyles();

  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
      <Jutsu
        roomName={room}
        displayName={name}
        password={password}
        loadingComponent={<p>loading ...</p>} />
  ) : (
      <div className={classes.wrapper}>
        <Container maxWidth="sm">
          <Typography variant="h6" color="primary" gutterBottom>
            Video Chat
          </Typography>
          <form className={classes.textField}>
            <input className={classes.formField} id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <input className={classes.formField} id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input className={classes.formField} id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" onClick={handleClick} type='submit'>
              Start / Join
            </Button>
          </form>
        </Container> 
      </div>
  )
}

export default VideoChat;
