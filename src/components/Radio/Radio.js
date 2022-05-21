import React, { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import back from "../../assets/back-arrow.png";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import power from "../../assets/switch.png";
import a from "../../assets/a.mp3";
import b from "../../assets/b.mp3";
import './Radio.css';

const Radio = () => {
    const [stations, setStations] = useState([
        { name: 'Putin FM', number: '66.6', audioPath: a, imgPath: 'https://store-images.s-microsoft.com/image/apps.31097.13583576980634238.8e78e5da-edfe-42e3-833a-854ea38dfdef.47b40e89-4dba-4228-8e00-17cad557d715?mode=scale&q=90&h=300&w=300' },
        { name: 'Dribble FM', number: '101.2', audioPath: b, imgPath: 'https://play-lh.googleusercontent.com/oV1AVbkOV2M7rqOAENeuNAnBL6ftRpECFDiiKU4w19tX_rTHTnwJRrPcJ2yy270taMU' },
    ])
    const [playNow, setPlayNow] = useState('Radio Off')
    let audio = new Audio();
    const handleAudioPlay = (station) => {
        audio.pause();
        audio.currentTime = 0;
        setPlayNow(station.name)
        audio.src = station.audioPath
        audio.play();
    }
    return (
        <div className='total-dev-section shadow-lg'>
            <Container className='w-25 pt-5'>
                <div className="header-section">
                    <img style={{ height: '20px', width: '20px' }} src={back} />
                    <h4 className='text-white'>STATIONS</h4>
                    <img style={{ height: '20px', width: '20px' }} src={power} />
                </div>
                <Accordion>
                    {
                        stations.map((station, i) => (
                            <Accordion.Item eventKey={i} onClick={() => handleAudioPlay(station)}>
                                <Accordion.Header >
                                    <div className='d-flex justify-content-between w-100'>
                                        <div>{station.name}</div> <div>{station.number}</div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img style={{ height: '35px', width: '35px' }} src={minus} />
                                        <img style={{ height: '120px', width: '120px', borderRadius: '50%' }} src={station.imgPath} />
                                        <img style={{ height: '35px', width: '35px' }} src={plus} />
                                    </div>
                                    {/* <audio controls>
                                        <source src={station.audioPath} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio> */}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }

                    {/* <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className='d-flex justify-content-between w-100'>
                                <div>Dribble FM </div> <div>101.2</div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <img style={{ height: '35px', width: '35px' }} src={minus} />
                                <img style={{ height: '120px', width: '120px', borderRadius: '50%' }} src="" />
                                <img style={{ height: '35px', width: '35px' }} src={plus} />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item> */}
                </Accordion>
                <div className="footer-section">
                    <small className='play-text'>CURRENTLY PLAYING</small>
                    <div className='dirrible-text'>{playNow}</div>
                </div>
            </Container >



        </div >
    );
};

export default Radio;
