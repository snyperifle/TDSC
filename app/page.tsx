'use client'

import { styled, Typography } from '@mui/material';
import { fadeIn } from './utils';

//======================================================
// array of years since 1900
const years = Array.from(new Array(121), (val, index) => index + 1900);
// const backgroundVideoWidth = 2312
//======================================================
const HomeRoot = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
const VideoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  height: '100vh',
  width: 'calc(100vw - 17px)',
  '@media (max-width: 600px)': {
    width: '100vw',
  },
})
const Video = styled('video')({
  transform: 'scale(2)',
  objectFit: 'cover',
})
const TitleText = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  fontSize: '5rem',
  textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
  '@media (max-width: 600px)': {
    fontSize: '2rem',
  },

  animation: `${fadeIn} 3s`
})
//======================================================
export default function HomePage() {
  return (
    <HomeRoot>
      <VideoContainer>
        <Video 
          autoPlay
          muted
          loop 
        >
          <source 
            src='/Videos/pexels-range.mp4' 
            type='video/mp4'
          />
        </Video>
      </VideoContainer>
      <TitleText 
        variant='h1'
        >
          TEXAS DEFENSIVE SHOOTING CLUB
      </TitleText>
      { 
        years.map((year) => {
          // eslint-disable-next-line react/jsx-key
          return <div key={year}>{year}</div>
        })
      }
    </HomeRoot>
  )
}