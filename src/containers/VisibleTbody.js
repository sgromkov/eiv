// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getVisibleRows from '../utils/getVisibleRows';
import Tbody from '../components/Tbody';

const mapStateToTbodyProps = (state) => ({
  rows: getVisibleRows(state.list, state.query)
});

const VisibleTbody = connect(
  mapStateToTbodyProps
)(Tbody);

// class VisibleTbody extends Component {
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     const { store } = this.context;
//     const state = store.getState();

//     return (
//       <Tbody rows={getVisibleRows(state.list, state.query)} />
//     );
//   }
// }
// VisibleTbody.contextTypes = {
//   store: PropTypes.object
// };

export default VisibleTbody;