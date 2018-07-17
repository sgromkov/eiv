import React from 'react';
import Column from './Column';

const Row = ({
  children
}) => (
  <tr>
    {children.map((item, index) => <Column key={index}>{item}</Column>)}
  </tr>
);

export default Row;
