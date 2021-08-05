import React, {Component} from 'react';
import { Player,BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import {Col, Container, Row} from "react-bootstrap";
import JEEFACETRANSFERAPI from '../webgl/jeelizFaceTransfer.module'
class SmartMedia extends Component {

    constructor() {
        super();
    }

    OpenWebglCamera=()=>{
        JEEFACETRANSFERAPI.init({
            canvasId:'canvasId',
            NNCPath:'models/',
            hysteresis:0.1,
            isMirror:true,
            callbackReady:(err)=>{
                if(err)
                {
                    console.log('Error');
                }
                else {

                    this.FaceMovement();

                }
            }
        })
    }

    FaceMovement=()=>{

        setInterval(()=>{
            // let movement = JEEFACETRANSFERAPI.get_morphTargetInfluences();
            if(JEEFACETRANSFERAPI.is_detected())
            {
                this.StartPlayer();

            }else {
                this.StopPlayer();
            }
        },3000)
    }

    StartPlayer=()=>{
        this.player.play();
    }

    StopPlayer=()=>{
        this.player.pause();
    }


    componentDidMount() {
        this.OpenWebglCamera();
    }

    render() {
        return (
            <div>
                <Container>
                    <div className='mt-5 frame-size'>
                        <Player ref={(player)=>this.player=player} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </div>

                    <div>
                        <canvas  id='canvasId' className='canvasclass'></canvas>
                    </div>

                </Container>
            </div>
        );
    }
}

export default SmartMedia;