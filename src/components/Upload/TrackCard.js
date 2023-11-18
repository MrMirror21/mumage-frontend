import React, { useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";

const TrackCard = ({track, playData, setPlayData, setTrack}) => {
  const audioRef = useRef(null);

  const togglePlay = () => {
    playData.currentlyPlaying !== null && playData.currentlyPlaying.current.pause();
    audioRef.current.play();
    setPlayData({isPlaying: true, currentlyPlaying: audioRef,})
  }
  const togglePause = () => {
    playData.currentlyPlaying.current.pause();
    setPlayData({isPlaying: false, currentlyPlaying: null,})
  }
  return (
    <>
      <Wrapper>
        <Card  onClick={() => setTrack(track)}>
            <Header>
              <AlbumCover src={track.album.images[2].url}/>
            </Header>
            <Body>
              <Title>{track.name}</Title>
              <Info>{track.album.artists[0].name} - {track.album.name}</Info>
            </Body>
            <Footer>
              <audio ref = {audioRef}>
                <source src={track.preview_url} />
              </audio>
              {playData.currentlyPlaying === audioRef ? <PauseIcon onClick={togglePause} width='25px'/> : <PlayIcon onClick={togglePlay} width='40px' fill='#313338' />}
            </Footer>
        </Card>
      </Wrapper>
    </>
  )
}

export default TrackCard

const Wrapper = styled.div`
:hover{
  background: #f1f1f1;
}
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 5px;
  width: 600px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AlbumCover = styled.img``;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const Info = styled.div`
  color: #8b8b8b;
`;
const Footer = styled.div`
  width: 100px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
`;