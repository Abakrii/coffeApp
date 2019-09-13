import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";

const ChangeTheMode = ({ screenChanged, isListMode }) => (
  <TouchableOpacity style={styles.button} onPress={() => screenChanged()}>
    <Icon name={isListMode ? "list" : "map"} size={30} color="white" />
  </TouchableOpacity>
);

export default ChangeTheMode;
