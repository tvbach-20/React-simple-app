import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import styles from './style'

const Home = () => {
  const [variable, setVariable] = useState(0)
  const [disable, setDisable] = useState(true)
  const classes = styles();

  const handelPlus = () => {
    setVariable(variable + 1)
  }
  const handleMinus = (e) => {
    if(variable > 0) {
      setVariable(variable -1)
    }
  }

  useEffect(() => {
    if(variable === 0) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }, [variable])

  return (
    <div >
      <Button variant="contained" className={disable ? "disable" : ""} onClick={handleMinus} disabled={disable} color="secondary"> - </Button>
      <span className={classes.fixSize}>{ variable }</span>
      <Button variant="contained" color="primary" onClick={handelPlus}>+</Button>
    </div>
  )
}

export default Home;
