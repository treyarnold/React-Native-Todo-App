import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { create } from "uuid-js";

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete}>
      <View style={styles.listItem} on>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom: 10,
    borderColor: "black",
    backgroundColor: "#ccc",
    borderWidth: 1
  },
});

export default GoalItem;