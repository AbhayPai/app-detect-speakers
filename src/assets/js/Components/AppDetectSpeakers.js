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
        this.ambientAudio = new Audio('../Early-Morning-Bird-Song.wav');
        this.ambientPan = this.ambientContext.createStereoPanner();
        this.source = this.ambientContext.
            createMediaElementSource(this.ambientAudio);
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
                <div className='container-fluid'>
                    <h1>Click to detect your speaker!!!</h1>
                    <a id='left' title='Detect Left' onClick={this.panToLeftHandler}
                        className='btn btn-primary text-white mr-2'
                    >
                        Detect Left Speaker
                    </a>
                    <a id='right' title='Detect RIght' onClick={this.panToRightHandler}
                        className='btn btn-primary text-white mr-2'
                    >
                        Detect Right Speaker
                    </a>
                    <a id='stereo' title='Detect Stereo' onClick={this.panToStereoHandler}
                        className='btn btn-primary text-white'
                    >
                        Detect Stereo Speaker
                    </a>
                </div>
            </Fragment>
        );
    }

    /*
     *  @panToLeftHandler()
     *  Custom Function
     */
    panToLeftHandler() {
        if (!this.ambientPan && !this.source && this.ambientAudio &&
            this.ambientContext) {
            return;
        }

        this.ambientContext.resume();
        this.ambientPan.pan.value = -1;
        this.source.connect(this.ambientPan);
        this.ambientPan.connect(this.ambientContext.destination);
        this.ambientAudio.play();
    }

    /*
     *  @panToRightHandler()
     *  Custom Function
     */
    panToRightHandler() {
        if (!this.ambientPan && !this.source && this.ambientAudio &&
            this.ambientContext) {
            return;
        }

        this.ambientContext.resume();
        this.ambientPan.pan.value = 1;
        this.source.connect(this.ambientPan);
        this.ambientPan.connect(this.ambientContext.destination);
        this.ambientAudio.play();
    }

    /*
     *  @panToStereoHandler()
     *  Custom Function
     */
    panToStereoHandler() {
        if (!this.ambientPan && !this.source && this.ambientAudio &&
            this.ambientContext) {
            return;
        }

        this.ambientContext.resume();
        this.ambientPan.pan.value = 0;
        this.source.connect(this.ambientPan);
        this.ambientPan.connect(this.ambientContext.destination);
        this.ambientAudio.play();
    }
}

/*
 *  @AppDetectSpeakers
 *  Only class to export from this file
 */
export default AppDetectSpeakers;
