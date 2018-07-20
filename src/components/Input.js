import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({
  value,
  onChange
}) => (
  <TextField
    label="Verb"
    value={value}
    onChange={onChange}
    autoFocus={true}
    fullWidth={true}
  />
  // <input autoFocus type="text" value={value} onChange={onChange} />
);

export default Input;
