import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import listData from './data'

import styles from './style';
const View = () => {
  const classes = styles();
  const [content, setContent] = useState('');



  const handlePressAddToDo = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

    }
  }

  return (
    <div className={classes.todoApp}>
      <Container maxWidth="sm">
        <h1 className={classes.title}>todos</h1>
        <div className={classes.groupForm}>
          <TextField
            required
            id="filled-required"
            label="Required"
            value={content}
            variant="filled"
            onKeyPress={(e) => handlePressAddToDo(e)}
          />
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default View;
