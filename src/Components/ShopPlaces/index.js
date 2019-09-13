import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";

const ShopPlaces = ({ place, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate("PlaceDetail", place) , console.log('this props', place)}
  >
    <Image
      style={styles.image}
      source={{
        uri: place.image_url
      }}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{place.name}</Text>

      <View style={styles.innerView}>
        <Text style={styles.review}>{place.review_count} Reviews test</Text>
        <Text style={styles.rating}>
          {place.rating + " "}
          <Icon name="star" size={20} color="#d7a05b" />
        </Text>
      </View>
      {place.is_closed ? (
        <Text style={styles.open}>closed</Text>
      ) : (
        <Text style={styles.open}>open</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default ShopPlaces;
