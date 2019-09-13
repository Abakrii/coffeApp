import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  name: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    padding: 5,
    fontSize: 20,
    fontWeight: "800",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
    color: "black"
  },
  review: {
    flex: 1,
    color: "brown"
  },
  rating: {
    flex: 1,
    color: "#d7a05b",
    fontSize: 20,
    fontWeight: "bold",
    padding: 3,
    justifyContent: "flex-end"
  },
  innerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  open: {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  closed: {
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold"
  }
});

export default styles;
