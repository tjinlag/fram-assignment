import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';
import useStyles from '../useStyles';

type IProps = {
  onSubmit: (name: string, email: string, position: string) => void;
}

const Form = ({ onSubmit } : IProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const handlePositionChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPosition(e.currentTarget.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name, email, position);
    setName('');
    setEmail('');
    setPosition('');
  }

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={handleNameChange}
        className={classes.input}
        placeholder='name'
      />
      <Input
        value={email}
        onChange={handleEmailChange}
        className={classes.input}
        placeholder='email'
      />
      <Input
        value={position}
        onChange={handlePositionChange}
        className={classes.input}
        placeholder='position'
      />
      <Button
        variant='outlined'
        color='primary'
        type='submit'
        className={classes.btnSubmit}
      >Submit</Button>
    </form>
  )
}

export default Form;
