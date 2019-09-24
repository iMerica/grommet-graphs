import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import { Sidebar } from './components/sidebar/Sidebar';
import { graphsTheme } from './theme';
import { Analytics } from './pages/analytics/Analytics';

export const App = () => (
  <Router>
    <Grommet theme={graphsTheme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            fill={size === 'large'}
            rows={['auto']}
            columns={['auto', 'flex']}
            areas={[
              { name: 'sidebar', start: [0, 0], end: [0, 0] },
              { name: 'main', start: [1, 0], end: [1, 0] },
            ]}
          >
            <Sidebar gridArea="sidebar" />
            <Box gridArea="main">
              <Switch>
                <Route path="/" exact component={Analytics} />
                {/* <Route path="/learn" component={Learn} />
          <Route path="/inference" component={Inference} /> */}
                {/* <Route component={NotFound} /> */}
              </Switch>
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  </Router>
);
