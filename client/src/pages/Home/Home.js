// @flow
import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import StyledLoader from './Home.style';


const Home = () => (
  <React.Fragment>
    <StyledLoader>
      <CircularProgress/>
    </StyledLoader>
  </React.Fragment>
);

export default Home;
