import React, { useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TrackCard = ({ track }) => {
    const audioRef = useRef(null);
    const [playData, setPlayData] = useState({ isPlaying: false, currentlyPlaying: null });
    const [c, setC] = useState("");

    const togglePlay = () => {
        if (track !== "") {
            playData.currentlyPlaying !== null && playData.currentlyPlaying.current.pause();
            audioRef.current.play();
            setPlayData({ isPlaying: true, currentlyPlaying: audioRef, })
        } else {
            setC("#BDBDBD");
        }
    }
    const togglePause = () => {
        playData.currentlyPlaying.current.pause();
        setPlayData({ isPlaying: false, currentlyPlaying: null, })
    }
    console.log(track === "")
    return (
        <>
            <Wrapper>
                <Footer>
                    <audio ref={audioRef}>
                        <source src={track} />
                    </audio>
                    {playData.currentlyPlaying === audioRef ?

                        <FontAwesomeIcon className="audio" icon={faStop} style={{ fontSize: '20px' }} onClick={togglePause} />
                        : <FontAwesomeIcon className="audio" icon={faPlay} style={{ color: c, fontSize: '20px' }} onClick={togglePlay} />}
                </Footer>
            </Wrapper>
        </>
    )
}

export default TrackCard;

const Wrapper = styled.div`
:hover{
  background: #f1f1f1;
}
`;

const Footer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;