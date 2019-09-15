import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";

import Rating from '../Rating';

const Reviews = ({ reviews }) => {
  return (

<View style={{ paddingHorizontal: 16 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "rgba(0,0,0,0.87)",
                  marginBottom: 5,
                  paddingVertical: 10
                }}
              >
                Reviews
              </Text>
              {reviews.map(review => (
                <View
                  key={review.time_created}
                  style={{ flexDirection: "row", paddingVertical: 10 }}
                >
                  <Image
                    source={{ uri: review.user.image_url }}
                    style={{
                      height: 40,
                      width: 40,
                      marginRight: 10
                    }}
                    borderRadius={20}
                  />
                  <View style={{ flex: 1 }}>
                    <Text>{review.user.name}</Text>
                    <Rating rating={review.rating} />
                    <Text>{`"${review.text}"`}</Text>
                  </View>
                </View>
              ))}
            </View>
  )
}

export default Reviews;