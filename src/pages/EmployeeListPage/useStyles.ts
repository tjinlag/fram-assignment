import { makeStyles } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';

export default makeStyles({
  container: {
    width: 'calc(100% - 40px)',
    margin: 20,
  },
  title: {
    textAlign: 'center',
  },
  table: {
    minWidth: 650,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    marginTop: 10,
  },
  btnSubmit: {
    marginTop: 10,
  }
});
