import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {
   // flex: 1,
    flexDirection: "column",
    justifyContent: "center",
   // alignItems: "stretch",
    
    
   
  },
  containerTwo:{
    ...StyleSheet.absoluteFillObject,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: "column",
  },
  map: {
   // flex: 1,
    ...StyleSheet.absoluteFillObject,
 
  },
  button: {
    position: "absolute",
    justifyContent: "flex-end"
  },
  name: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    color: "white",
    padding: 5,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.8
  }
});

export default styles;
