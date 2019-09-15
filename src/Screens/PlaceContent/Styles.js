import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    height: 250,
    flexDirection: "row",
    marginBottom: -30,
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 2 }
  },
  name: {
    flexDirection: "row",
    textAlign: "left",
    color: "white",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.8
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  mapView: {
    height: 250
  },
  review: {
    flex: 1,
    color: "brown",
    fontSize: 18
  },
  rating: {
    color: "#d7a05b",
    fontSize: 18,
    fontWeight: "bold",
    padding: 3
  },
  address: {
    fontSize: 18,
    padding: 5
  },
  open: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  closed: {
    backgroundColor: "red",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  price: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    color: "blue"
  },
  callView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderColor: "#896038",
    borderWidth: 2,
    margin: 10,
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 2 }
  },
  phoneNumber: {
    color: "#896038",
    fontSize: 25,
    fontWeight: "normal"
  }
});

export default styles;
