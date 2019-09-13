// import { NativeModules } from "react-native";

export const getPlaces = () => {
  return fetch(
    "https://raw.githubusercontent.com/adamterlson/react-native-coffee/master/venue-search.json"
  ).then(response => response.json());
};

// export const fetchImagesForGallery = () => {
//   const CoffeeImages = NativeModules.UnsplashCoffeeImages;
//   return CoffeeImages.getCoffeeImages().then(data => {
//     //console.log(JSON.stringify(data));
//     return JSON.parse(data);
//   });
// };
