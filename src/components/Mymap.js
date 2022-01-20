import React, { useState,useEffect } from 'react'
import { GoogleMap, useJsApiLoader,Marker ,InfoWindow} from '@react-google-maps/api';
import  db from '../firebase-config';
const containerStyle = {
  width: '465px',
  height: '500px'
};


function Mymap(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })
  const center={
    lat:props.lat,
    lng:props.lng
};
// const ref1=db.ref(`${props.id}/BUSES/${props.number}/LOCATION`);
//         ref1.once('value',(snapshot)=>{
//             let loc=snapshot.val();
//             let l=loc['longitude'];
//             let r=loc['latitude'];
//             setCenter({lat:l,lng:r});
//             console.log(center);
//         })
//         ref1.on('child_changed',(snapshot)=>{
//             let loc=snapshot.val();
//             let l=loc['longitude'];
//             let r=loc['latitude'];
//             setCenter({lat:l,lng:r});
//             console.log(center);
//         })

  
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <><Marker
        title="Location"
        id={1}
        position={center}
        draggable={false}
        >
        </Marker>
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Mymap)