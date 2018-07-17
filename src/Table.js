import React from 'react';
import Row from './Row';

const Table = ({
  children
}) => (
  <table>
    <tbody>
      {children.map((item, index) => <Row key={index}>{item}</Row>)}
    </tbody>
  </table>
);

export default Table;
