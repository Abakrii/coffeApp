import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  map: {
    flex: 1
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
