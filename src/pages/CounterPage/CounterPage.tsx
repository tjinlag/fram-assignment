import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './useStyles';

const COUNTER_INITIAL = 0;

const CounterPage = () => {
  const [value, setValue] = useState(COUNTER_INITIAL);
  const classes = useStyles();

  const handleIncrease = () => {
    setValue(value + 1);
  }

  const handleReset = () => {
    setValue(COUNTER_INITIAL);
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Counter: {value}</h1>
      <div className={classes.box}>
        <Button
          variant='outlined'
          color="primary"
          onClick={handleIncrease}
        >Increase</Button>
        <Button
          variant='outlined'
          color="primary"
          onClick={handleReset}
          style={{ marginLeft: 20 }}
          disabled={value === COUNTER_INITIAL}
        >Reset</Button>
      </div>
    </div>
  )
}

export default CounterPage;
