import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import QueryInput from '../containers/QueryInput';
import VisibleTbody from '../containers/VisibleTbody';

const App = () => (
  <Grid container>
    <Grid item xs={12}>
      <Paper>
        <QueryInput />
        <Table>
          <VisibleTbody />
        </Table>
      </Paper>
    </Grid>
  </Grid>
);

export default App;
