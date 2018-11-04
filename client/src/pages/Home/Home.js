// @flow
import * as React from 'react';
import StyledHome from './Home.style';

import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => (
  <React.Fragment>
    <StyledHome>
      <CircularProgress/>
    </StyledHome>
  </React.Fragment>
);

export default Home;
