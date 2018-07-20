import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import Row from './Row';

const Tbody = ({
  rows
}) => (
    <TableBody>
      {rows.map((item, index) => <Row key={index}>{item}</Row>)}
    </TableBody>
);

export default Tbody;
