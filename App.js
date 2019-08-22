import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (newGoal) => {
    if (newGoal !== "") {
      setGoals(currentGoals => [
        ...currentGoals,
        {
          key: Math.random().toString(),
          value: newGoal,
        }
      ]);
    }
    setIsAddMode(false);
  }

  const goalDeleteHandler = (goalKey) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey)
    })
  }

  return (
    <View style={styles.screen}>
      <View style={styles.addGoalButton}>
        <Button
          title={"Add New Goal"}
          onPress={() => setIsAddMode(true)}
        />
      </View>
      <GoalInput
        goalAdded={addGoalHandler}
        visible={isAddMode}
        goalCancel={() => setIsAddMode(false)}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) =>
          <GoalItem
            onDelete={() => goalDeleteHandler(itemData.item.key)}
            title={itemData.item.value}
          />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  addGoalButton: {
    marginBottom: 10
  }
});
