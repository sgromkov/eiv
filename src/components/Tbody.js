import React from 'react';
import Row from './Row';

const Tbody = ({
  rows
}) => (
    <tbody>
      {rows.map((item, index) => <Row key={index}>{item}</Row>)}
    </tbody>
);

export default Tbody;
