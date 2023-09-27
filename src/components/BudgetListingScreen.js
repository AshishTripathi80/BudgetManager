import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const BudgetListingScreen = () => {
  const budgetEntries = useSelector((state) => state.budgetEntries);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry Listing</Text>
      <FlatList
        data={budgetEntries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <Text style={styles.itemName}>{item.itemName}</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.label}>Planned:</Text>
              <Text style={styles.amount}>{item.plannedAmount}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.label}>Actual:</Text>
              <Text style={styles.amount}>{item.actualAmount}</Text>
            </View>
          </View>
        )}
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
  entryContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
  },
  amount: {
    fontSize: 16,
  },
});

export default BudgetListingScreen;
