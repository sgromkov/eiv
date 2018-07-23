import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchField from '../containers/SearchField';
import FilteredResults from '../containers/FilteredResults';

const App = () => (
  <Paper>
    <SearchField />
    <FilteredResults />
  </Paper>
);

export default App;
