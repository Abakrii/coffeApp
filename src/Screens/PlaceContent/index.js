import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,Linking, Button, 
} from "react-native";
import styles from "./Styles";
import MapView from "react-native-maps";
import PlaceMarker from "../../Components/PlaceMarker";
import Reviews from '../../Components/Reviews';
import Icon from "react-native-vector-icons/FontAwesome";

const PlaceContent = ({ navigation   }) => {
  const place = navigation.state.params.place;
  const reviews = navigation.state.params.reviews;
 // console.log('review in place content' , reviews)
  console.log('Place Content Props' , place);



  viewMore = () => {
    Linking.canOpenURL(place.url).then(supported => {
      if (supported) {
        Linking.openURL(place.url);
      } else {
        console.log("Don't know how to open URI: " + place.url);
      }
    });
  };

  // inCall = ( ) =>{
  //   const url = place.display_phone
  //  this.link(url)
 
  // };



  inCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${place.display_phone}`; }
    else {phoneNumber = `telprompt:${place.display_phone}`; }
    Linking.openURL(phoneNumber);
 };
  
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
      <TouchableOpacity onPress={this.inCall} style={styles.callView} >
        <Icon name="phone" size={30} color="#896038" />
        <Text  style={styles.phoneNumber}> {place.display_phone} </Text>
      </TouchableOpacity>
      


      <TouchableOpacity style={styles.callView} onPress={this.viewMore}>
  
        <Text  style={styles.phoneNumber}> Click Here To Open Website URL </Text>
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
