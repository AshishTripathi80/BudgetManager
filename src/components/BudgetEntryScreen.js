import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addBudgetEntry } from "../actions/budgetActions";

const BudgetEntryScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");

  const dispatch = useDispatch();

  const saveBudgetEntry = () => {
    const entry = {
      itemName,
      plannedAmount: parseFloat(plannedAmount),
      actualAmount: parseFloat(actualAmount),
    };
    dispatch(addBudgetEntry(entry));
    // You can also save the data to AsyncStorage here if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Planned Amount"
        value={plannedAmount}
        onChangeText={(text) => setPlannedAmount(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Actual Amount"
        value={actualAmount}
        onChangeText={(text) => setActualAmount(text)}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={saveBudgetEntry} />
      <Button
        title="Show Items"
        onPress={() => navigation.navigate("BudgetListing")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default BudgetEntryScreen;
