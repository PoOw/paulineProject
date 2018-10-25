// @flow
import React from 'react';
import { type Store } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import type { BrowserHistory } from 'history/createBrowserHistory';

import theme from 'theme';
import Routes from './routes';
import { Root } from './components';

type Props = {
  history: BrowserHistory,
  persistor: Object,
  store: Store<State, *, *>,
};

const RootComponentWithRoutes = () => (
  <Root>
    <Routes />
  </Root>
);

class App extends React.Component<Props> {
  render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={this.props.persistor}>
            <ConnectedRouter history={history}>
              <Route path="/" component={RootComponentWithRoutes} />
            </ConnectedRouter>
          </PersistGate>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
