import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import ShopPlaces from '../ShopPlaces';



const Shop = ({ isLoading, places, navigation , reviews }) =>


  // isLoading ? (
  //   <ActivityIndicator size="large" color="#774023" />
  // ) :
  (
    
    <FlatList
   
      data={places}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ShopPlaces place={item} navigation={navigation} reviews={reviews} />
      )}
    />
  );

export default Shop;
