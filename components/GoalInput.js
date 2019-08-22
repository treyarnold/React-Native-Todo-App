import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a Goal"
          style={styles.input}
          onChangeText={(value) => setEnteredGoal(value)}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                setEnteredGoal("");
                props.goalCancel();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                props.goalAdded(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
      <View />
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  }
});

export default GoalInput;