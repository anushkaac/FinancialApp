import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: '$12.00', date: 'Mar 12, 2024' },
  { id: '2', name: 'Apple Store', amount: '$101.00', date: 'Mar 14, 2024' },
  { id: '3', name: 'Sephora', amount: '$120.00', date: 'Mar 15, 2024' },
  { id: '4', name: 'Shoppers Drug Mart', amount: '$12.00', date: 'Mar 16, 2024' },
  { id: '5', name: 'Pizza Hut', amount: '$24.00', date: 'Mar 17, 2024' },
  { id: '6', name: 'Cheesecake Factory', amount: '$45.00', date: 'Mar 18, 2024' },
  { id: '7', name: 'Nike', amount: '$250.00', date: 'Mar 19, 2024' },
  { id: '8', name: 'Tim Hortons', amount: '$7.89', date: 'Mar 20, 2024' },
  { id: '9', name: 'Whole Foods', amount: '$78.00', date: 'Mar 21, 2024' },
  { id: '10', name: 'Cineplex', amount: '$42.50', date: 'Mar 22, 2024' },
];

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.transactionInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#000',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default TransactionsList;
