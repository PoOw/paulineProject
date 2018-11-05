// @flow
import * as React from 'react';
import Sound from 'react-sound';

import CircularProgress from '@material-ui/core/CircularProgress';

import StyledLoader, {StyledTitle} from './Home.style';

const apiToken = 'BQBkri1jlncGSHlJovFzo19x8aJEHzoLHr04irKm-fL-qFwqz85lhg7t8DFfhCVsJzxbgoyqVBxjkMFxlfkSIhe533URlEqJzFQP7rZYaw_s6yU5HR-EJ6BBII7w0z8r5TmzxUc_vC5gcFj6CLlTPa1LycU'

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
      const {preview_url} = this.state.data.items[0].track;
      return (
        <React.Fragment>
          <StyledTitle>
            Il y a {total} résultats.<br/>
            Le titre de la première chanson est : {name}.
          </StyledTitle>
          <Sound url={preview_url} playStatus={Sound.status.PLAYING}/>
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
