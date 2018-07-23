import { connect } from 'react-redux';
import getVisibleVerbs from '../utils/getVisibleVerbs';
import Results from '../components/Results';

const mapStateToProps = (state) => ({
  verbs: getVisibleVerbs(state.list, state.query)
});

const FilteredResults = connect(
  mapStateToProps
)(Results);

export default FilteredResults;