import { connect } from 'react-redux';
import { setQuery } from '../actions';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = (state, ownProps) => ({
  value: state.query,
  ...ownProps
});

const mapDispatchProps = (dispatch) => ({
  onChange(event) {
    dispatch(setQuery(event.target.value));
  }
});

const SearchField = connect(
  mapStateToProps,
  mapDispatchProps
)(TextField);

SearchField.defaultProps = {
  label: 'Your verb here',
  autoFocus: true,
  fullWidth: true
};

export default SearchField;