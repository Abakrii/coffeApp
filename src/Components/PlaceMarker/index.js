import React from "react";
import { Marker } from "react-native-maps";
import { Image } from "react-native";

const PlacesMarker = ({ place, navigation }) => (
  <Marker
    onPress={() =>
      navigation.navigate("OutletDetail", place, { title: "Hello" })
    }
    coordinate={place.coordinates}
    title={place.name}
    description={place.name}
  >
    <Image
      style={{ height: 50, width: 50 }}
      source={require("../../Assets/coffee-icon.png")}
    />
  </Marker>
);

export default PlacesMarker;
