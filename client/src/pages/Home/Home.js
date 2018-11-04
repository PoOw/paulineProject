// @flow
import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import StyledLoader, {StyledTitle} from './Home.style';

const apiToken = 'BQDkyx2b7I9QUM0yuMjz_gVlF83Iihfn7TuVPMC9P-cB1zLApCcLuvJAwuh7KIE4cB_moITfebgO-Lu5GvXarH8ovy58W5ZHhZgrbYW0nHWDAfglq_yrTJzYuA1Q5QA9u73kLnx8U9wcRMfp_TPEg-JdXvQ'

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      songsLoaded: false,
      data: null
    }
  }

  render () {
    if (this.state.songsLoaded) {
      const {total} = this.state.data;
      const {name} = this.state.data.items[0].track;
      return (
        <React.Fragment>
          <StyledTitle>
            Il y a {total} résultats.<br/>
            Le titre de la première chanson est : {name}.
          </StyledTitle>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <StyledLoader>
            <CircularProgress/>
          </StyledLoader>
        </React.Fragment>
      );
    }
  }

  componentDidMount() {
    fetch('https://api.spotify.com/v1/me/tracks', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    })
    .then(response => response.json())
    .then((data) => {
      console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data);
      this.setState({songsLoaded: true, data: data});
    })
  }
}

export default Home;
