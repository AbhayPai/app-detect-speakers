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
    this.source = null;
    this.ambientPan = null;
    this.ambientAudio = null;
    this.ambientContext = null;
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
    this.ambientContext = new AudioContext();
    this.ambientAudio = new Audio('./Early-Morning-Bird-Song.wav');
    this.ambientPan = this.ambientContext.createStereoPanner();
    this.source = this.ambientContext.createMediaElementSource(this.ambientAudio);
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
    if (!this.ambientPan && !this.source && this.ambientAudio && this.ambientContext) {
      return;
    }

    if (this.state.audio) {
      return;
    }

    this.ambientContext.resume();
    this.ambientPan.pan.value = -1;
    this.source.connect(this.ambientPan);
    this.ambientPan.connect(this.ambientContext.destination);
    this.ambientAudio.play();

    this.ambientAudio.onplaying = () => {
      this.setState({
        audio: true,
        audioLeft: true
      });
    };

    this.ambientAudio.onended = () => {
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
    if (!this.ambientPan && !this.source && this.ambientAudio && this.ambientContext) {
      return;
    }

    if (this.state.audio) {
      return;
    }

    this.ambientContext.resume();
    this.ambientPan.pan.value = 1;
    this.source.connect(this.ambientPan);
    this.ambientPan.connect(this.ambientContext.destination);
    this.ambientAudio.play();

    this.ambientAudio.onplaying = () => {
      this.setState({
        audio: true,
        audioRight: true
      });
    };

    this.ambientAudio.onended = () => {
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
    if (!this.ambientPan && !this.source && this.ambientAudio && this.ambientContext) {
      return;
    }

    if (this.state.audio) {
      return;
    }

    this.ambientContext.resume();
    this.ambientPan.pan.value = 0;
    this.source.connect(this.ambientPan);
    this.ambientPan.connect(this.ambientContext.destination);
    this.ambientAudio.play();

    this.ambientAudio.onplaying = () => {
      this.setState({
        audio: true,
        audioStereo: true
      });
    };

    this.ambientAudio.onended = () => {
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
