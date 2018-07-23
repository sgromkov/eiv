import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Results = ({
  verbs
}) => (
  <Table>
    <TableBody>
      {verbs.map((row, index) => (
        <TableRow key={index}>
          {row.map((cell, index) => (
            <TableCell key={index}>{cell}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default Results;
