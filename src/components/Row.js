import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Row = ({
  children
}) => (
  <TableRow>
    {children.map((item, index) => <TableCell key={index}>{item}</TableCell>)}
  </TableRow>
);

export default Row;
