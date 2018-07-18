// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { setQuery } from '../actions';

const mapStateToInputProps = (state) => ({
  value: state.query
});

const mapDispatchToInputProps = (dispatch) => ({
  onChange(event) {
    dispatch(setQuery(event.target.value));
  }
});

const QueryInput = connect(
  mapStateToInputProps,
  mapDispatchToInputProps
)(Input);

// class QueryInput extends Component {
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
//       <Input
//         value={state.query}
//         onChange={(event) => {
//           store.dispatch(setQuery(event.target.value));
//         }}
//       />
//     );
//   }
// }
// QueryInput.contextTypes = {
//   store: PropTypes.object
// };

export default QueryInput;