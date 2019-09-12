// import React from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//
// export class MapContainer extends react.Component {
// render() {
//     return (
//
//       <Map google={this.props.google}
//       style={{width: '100%', height: '100%', position: 'relative'}}
//       className={'map'}
//       zoom={14}>

// <Marker
//   title={'The marker`s title will appear as a tooltip.'}
//   name={'SOMA'}
//   position={{lat: 31.532569, lng: 35.099826}} />
// <Marker
//   name={'Dolores park'}
//   position={{lat: 31.33 lng: 35.06} />
// <Marker />

//
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAnEYlaIusL0y4uXrrvQNk65vFkGoTTum4')
// })(MapContainer)

import React from 'react'

import Map from './Map'

import Marker from './Marker'

const MapContainer = props => {
  if (!props.loaded) return <div>Loading...</div>

  return (
    <Map
      google={props.google}
      className="map"
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={14}
    >
      <Marker
        name="SOMA"
        position={{ lat: 31.33, lng: 35.06 }}
        title="The marker`s title will appear as a tooltip."
      />

      <Marker />
    </Map>
  )
}

export default MapContainer
