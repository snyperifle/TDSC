'use client'
//======================================================
import { locations } from './data';
import { mapStyles } from './mapStyles';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationRoot, WholeCard, CardDataContainer, RangeNameText, PriceText, RegularText, InfoContainer, CardMapContainer } from './locationStyles';
//======================================================
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
//======================================================
const MyMarker = ({ text }: any) => (
    <LocationOnIcon fontSize='large' style={{color:'red'}}/>
)
//======================================================
export default function LocationPage() {

  const handleMarkerClick = (location) => {
    console.log('clicked')
    // window.open(
    //   'https://www.google.com/maps/place/MedPlus+LLC/@29.6754399,-95.5615433,17z/data=!3m2!4b1!5s0x8640c2aafdd00d8b:0x7f5d3c76c59201e6!4m5!3m4!1s0x8640c2aafe179287:0x6b6a33268ef3a113!8m2!3d29.6754353!4d-95.5593546'
    // )
  }

  return (
    <LocationRoot>
      {
        locations.map((location, i) => {
          const { range, cost, street, city, state, zip, phone, description, lat, lng } = location
          return (
            <WholeCard key={i}>
              <CardDataContainer>

                <RangeNameText>{range}</RangeNameText>
                <PriceText>{cost}</PriceText>
                <RegularText>{description}</RegularText>

                <InfoContainer>
                  <RegularText>{phone}</RegularText>
                  <RegularText>{street}</RegularText>
                  <RegularText>{city}, {state}, {zip}</RegularText>
                </InfoContainer>

              </CardDataContainer>
              <CardMapContainer>
                <GoogleMapReact
                  bootstrapURLKeys={{ 
                    key: String(apiKey) 
                  }}
                  defaultCenter={{lat, lng}}
                  defaultZoom={15}
                  options={{
                    disableDefaultUI: true,
                    keyboardShortcuts: false,
                    styles: mapStyles,
                  }}
                  onClick={() => handleMarkerClick(location)}
                >
                  <MyMarker
                    lat={lat}
                    lng={lng}
                    text={range}
                  />
                </GoogleMapReact>
              </CardMapContainer>
            </WholeCard>
          )
        })
      }
    </LocationRoot>
  )
}