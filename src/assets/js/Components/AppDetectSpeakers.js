/*
 *  All Usable Libraries in this File
 */
import React, { Fragment } from 'react';

/*
 *  Extending React Component
 */
class AppDetectSpeakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false,
      audioLeft: false,
      audioRight: false,
      audioStereo: false
    };
    this.audioFile = null;
    this.nodePanner = null;
    this.audio = null;
    this.audioContext = null;
    this.panToLeftHandler = this.panToLeftHandler.bind(this);
    this.panToRightHandler = this.panToRightHandler.bind(this);
    this.panToStereoHandler = this.panToStereoHandler.bind(this);
  }

  /*
    *  @componentDidMount()
    *  React Lifecyle Function
    */
  componentDidMount() {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
    this.nodePanner = this.audioContext.createStereoPanner();
    this.audio = new Audio('./Early-Morning-Bird-Song.wav');
    this.audioFile = this.audioContext.createMediaElementSource(this.audio);
  }

  /*
    *  @render()
    *  React Lifecyle Function
    */
  render () {
    /*
      *  @JSX Syntax to display
      */
    return (
      <Fragment>
        <div className='content'>
          <div className='content--breadcrumb'>
            <h1 className='content--title'>Click below to detect your speaker!!!</h1>
          </div>
          <div className='content--column'>
            <a title='Detect Left' onClick={this.panToLeftHandler}
              className={this.state.audioLeft ? 'content--button active' : 'content--button'}
            >
              Detect Left Speaker
            </a>
          </div>
          <div className='content--column'>
            <a title='Detect RIght' onClick={this.panToRightHandler}
              className={this.state.audioRight ? 'content--button active' : 'content--button'}
            >
              Detect Right Speaker
            </a>
          </div>
          <div className='content--column'>
            <a title='Detect Stereo' onClick={this.panToStereoHandler}
              className={this.state.audioStereo ? 'content--button active' : 'content--button'}
            >
              Detect Stereo Speaker
            </a>
          </div>
        </div>
      </Fragment>
    );
  }

  /*
    *  @panToLeftHandler()
    *  Custom Function
    */
  panToLeftHandler() {
    if (!this.nodePanner && !this.audioFile && this.audio && this.audioContext) {
      return;
    }

    if (this.state.audio) {
      return;
    }

    this.audioContext.resume();
    this.nodePanner.pan.value = -1;
    this.audioFile.connect(this.nodePanner);
    this.nodePanner.connect(this.audioContext.destination);
    this.audio.play();

    this.audio.onplaying = () => {
      this.setState({
        audio: true,
        audioLeft: true
      });
    };

    this.audio.onended = () => {
      this.setState({
        audio: false,
        audioLeft: false
      });
    };
  }

  /*
    *  @panToRightHandler()
    *  Custom Function
    */
  panToRightHandler() {
    if (!this.nodePanner && !this.audioFile && this.audio && this.audioContext) {
      return;
    }

    if (this.state.audio) {
      return;
    }

    this.audioContext.resume();
    this.nodePanner.pan.value = 1;
    this.audioFile.connect(this.nodePanner);
    this.nodePanner.connect(this.audioContext.destination);
    this.audio.play();

    this.audio.onplaying = () => {
      this.setState({
        audio: true,
        audioRight: true
      });
    };

    this.audio.onended = () => {
      this.setState({
        audio: false,
        audioRight: false
      });
    };
  }

  /*
    *  @panToStereoHandler()
    *  Custom Function
    */
  panToStereoHandler() {
    if (!this.nodePanner && !this.audioFile && this.audio && this.audioContext) {
      return;
    }

    if (this.state.audio) {
      return;
    }

    this.audioContext.resume();
    this.nodePanner.pan.value = 0;
    this.audioFile.connect(this.nodePanner);
    this.nodePanner.connect(this.audioContext.destination);
    this.audio.play();

    this.audio.onplaying = () => {
      this.setState({
        audio: true,
        audioStereo: true
      });
    };

    this.audio.onended = () => {
      this.setState({
        audio: false,
        audioStereo: false
      });
    };
  }
}

/*
 *  @AppDetectSpeakers
 *  Only class to export from this file
 */
export default AppDetectSpeakers;
