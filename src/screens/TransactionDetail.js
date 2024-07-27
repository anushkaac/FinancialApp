import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.location}>North York, ON</Text>
        <Text style={styles.dateLabel}>Transaction Date</Text>
        <Text style={styles.date}>{transaction.date}</Text>
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
  detailContainer: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    width: '90%',
    alignItems: 'center',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  name: {
    fontSize: 18,
    marginVertical: 8,
    color: '#666',
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
  dateLabel: {
    fontSize: 14,
    marginTop: 20,
    color: '#666',
  },
  date: {
    fontSize: 16,
    color: '#000',
  },
});

export default TransactionDetail;
