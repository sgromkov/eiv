import { connect } from 'react-redux';
import getVisibleRows from '../utils/getVisibleRows';
import Results from '../components/Results';

const mapStateToProps = (state) => ({
  verbs: getVisibleRows(state.list, state.query)
});

const FilteredResults = connect(
  mapStateToProps
)(Results);

export default FilteredResults;