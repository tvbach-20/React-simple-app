import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import listData from './data'
import Todos from './Todos'

import styles from './style';
const View = () => {
  const classes = styles();
  const [content, setContent] = useState('');

  const handleOnchange = (e) => {
    const value = e.target.value;
    setContent(value);
  }

  const handlePressAddToDo = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo()
    }
  }

  const addTodo = () => {
    listData.push({work: content});
    setContent('');
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
            onChange={(e) => handleOnchange(e)}
          />
          <Button variant="contained" color="secondary" onClick={addTodo}>
            Create
          </Button>
        </div>
        <div className={classes.listTodos}>
          <ul className={classes.todos}>
            <Todos data={listData}/>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default View;
