import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: 12.00, date: 'Mar 12, 2024' },
  { id: '2', name: 'Apple Store', amount: 101.00, date: 'Mar 14, 2024' },
  { id: '3', name: 'Sephora', amount: 120.00, date: 'Mar 15, 2024' },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00, date: 'Mar 16, 2024' },
  { id: '5', name: 'Pizza Hut', amount: 24.00, date: 'Mar 17, 2024' },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: 'Mar 18, 2024' },
  { id: '7', name: 'Nike', amount: 250.00, date: 'Mar 19, 2024' },
  { id: '8', name: 'Tim Hortons', amount: 7.89, date: 'Mar 20, 2024' },
  { id: '9', name: 'Whole Foods', amount: 78.00, date: 'Mar 21, 2024' },
  { id: '10', name: 'Cineplex', amount: 42.50, date: 'Mar 22, 2024' },
];

const totalExpenses = transactions.reduce((total, transaction) => total + transaction.amount, 0);
const highestSpending = Math.max(...transactions.map(t => t.amount));
const lowestSpending = Math.min(...transactions.map(t => t.amount));

const Summary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Transactions: {transactions.length}</Text>
        <Text style={styles.summaryText}>Balance: ${totalExpenses.toFixed(2)}</Text>
        <Text style={styles.summaryText}>High Spending: ${highestSpending.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Low Spending: ${lowestSpending.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryContainer: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    width: '90%',
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 18,
    color: '#000',
    marginVertical: 4,
  },
});

export default Summary;
