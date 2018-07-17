import React from 'react';

const Input = ({
  value,
  onChange
}) => (
  <input autoFocus type="text" value={value} onChange={onChange} />
);

export default Input;
