import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";
import styles from "./Styles";
import MapView from "react-native-maps";
import PlaceMarker from "../../Components/PlaceMarker";
import Reviews from '../../Components/Reviews';
import Icon from "react-native-vector-icons/FontAwesome";

const PlaceContent = ({ navigation   }) => {
  const place = navigation.state.params.place;
  const reviews = navigation.state.params.reviews;
  console.log('review in place content' , reviews)



  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: place.image_url
        }}
      />
      <Text style={styles.name}>{place.name}</Text>
      <View style={styles.innerView}>
        <Text style={styles.review}>{place.review_count} Reviewssssss</Text>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Text style={styles.rating}>
            {place.rating + " "}
            <Icon name="star" size={20} color="#d7a05b" />
          </Text>
        </View>
      </View>
      <Text style={styles.address}>
        <Icon name="map-pin" size={20} color="#d7a05b" />
        {place.location.display_address.map(item => ` ${item} `)}
      </Text>
      <View style={styles.innerView}>
        {place.is_closed ? (
          <Text style={styles.open}>closed</Text>
        ) : (
          <Text style={styles.open}>open</Text>
        )}
        <Text style={styles.price}>{String(place.price)}</Text>
      </View>
      <TouchableOpacity style={styles.callView}>
        <Icon name="phone" size={30} color="#896038" />
        <Text style={styles.phoneNumber}> {place.display_phone}</Text>
      </TouchableOpacity>
      <View pointerEvents="none">
        <MapView
          style={styles.mapView}
          initialRegion={{
            ...place.coordinates,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.0005
          }}
        >
          <PlaceMarker place={place} />
        </MapView>
          <Reviews reviews={reviews} />
        

      </View>
    </ScrollView>
  );
};

export default PlaceContent;
