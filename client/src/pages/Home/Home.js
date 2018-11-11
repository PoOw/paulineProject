// @flow
import * as React from 'react';
import Sound from 'react-sound';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import StyledLoader, {StyledTitle, buttonStyle, StyledAnswers} from './Home.style';

const apiToken = 'BQAntJkBKjV9wPxxjFuFay9hqPV3DuD2D3U8N11CiLiMK2Lv6CnMyXBp4RmfhqpgPxe2GjO3MSUvmHq8E04b74iKxN_QfbfvAqWcLc-1lAtg6K1VD2sVw8oBAg1t6w5RlR4hw5pzNvBN7fQC_m3SymbJmXk'


class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      songsLoaded: false,
      data: null,
      id: null,
    }
  }

  isCorrectAnswer = (id) => {
    console.log(id);
    const answeredCorrectly = id === this.state.id;
    this.setState({answeredCorrectly});
  }

  renderSuccessBox = () => {
    switch(this.state.answeredCorrectly) {
      case true:
        return (<div>Bonne réponse</div>);
      case false:
        return (<div>Mauvaise réponse</div>);
      default:
        return null;
    }
  }

  render () {
    if (this.state.songsLoaded) {
      const {total} = this.state.data;
      const {name} = this.state.data.items[0].track;
      const {preview_url} = this.state.data.items[0].track;
      const {items} = this.state.data;
      return (
        <React.Fragment>
          <StyledTitle>
            Il y a {total} résultats.<br/>
            Le titre de la première chanson est : {name}.
          </StyledTitle>
          <StyledAnswers>
          {items.map((item) => (
              <Button variant="contained" key={item.track.id} style={buttonStyle} color="primary" onClick={() => {this.isCorrectAnswer(item.track.id);}}>
                {item.track.name}
              </Button>
          ))}
          </StyledAnswers>
          {this.renderSuccessBox()}
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
      this.setState({songsLoaded: true, data, id: data.items[0].track.id});
    })
  }

}

export default Home;
