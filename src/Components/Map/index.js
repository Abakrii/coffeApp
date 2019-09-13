import React from "react";
import MapView from "react-native-maps";
import PlaceMarker from "../PlaceMarker";

const Map = ({ places, navigation }) => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 48.13437,
      longitude: 11.55618,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }}
  >
    {places.map(place => (
      <PlaceMarker place={place} key={place.id} navigation={navigation} />
    ))}
  </MapView>
);

export default Map;
