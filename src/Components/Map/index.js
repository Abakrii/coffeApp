import React , {useState, useEffect }from "react";
import MapView from "react-native-maps";
import {Dimensions, StyleSheet} from 'react-native'
import PlaceMarker from "../PlaceMarker";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
state = {
    isMapReady: false,
}


const Map = ({ places, navigation }) => {
    //console.log("places in mapView" , places)
    // initializing our state, disabled = false
    const [ disabled, setDisabled ] = useState(false)
  
    const handleLayout = event => {
      // setDisabled takes the argument and
      // makes it the new value of disabled
      setDisabled(true)    
    }
  
    return (
        <MapView
        onLayout={handleLayout}
        style={{  ...StyleSheet.absoluteFillObject,}}
          initialRegion={{
            latitude: 48.13437,
            longitude: 11.55618,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
        >
             {disabled &&
          places.map(place => (
            <PlaceMarker place={place} key={place.id} navigation={navigation} />
          ))
      }
        </MapView>
    )
  }



export default Map;
