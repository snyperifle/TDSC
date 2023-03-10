import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';
//======================================================
export const LocationRoot = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  marginTop: '40px',
});

export const WholeCard = styled(Card)({
  width: '80%',
  height: '50%',
  minHeight: '600px',
  borderRadius: '24px',
  backgroundColor: '#151a26',
  color: 'white',
  padding: '24px',
  margin: '24px',
  display: 'flex',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    height: '100%',
  },

})
export const CardDataContainer = styled('div')({
  width: '40%',
  // height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  '@media (max-width: 600px)': {
    width: '100%',

  },
});
export const RangeNameText = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '10px',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
});
export const RegularText = styled(Typography)({
  fontSize: '1rem',
  color: 'gainsboro',
  '@media (max-width: 600px)': {
    fontSize: '0.8rem',
  },
})
export const CardMapContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: '24px',
})
export const PriceText = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '10px',
  '@media (max-width: 600px)': {
    fontSize: '1rem',
  },
});
export const InfoContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'end',
});