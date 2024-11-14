import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function SearchInput() {
  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <Icon name="ios-search" size={20} color="#A9A9A9" style={styles.icon} />

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Search keywords..."
        placeholderTextColor="#A9A9A9"
      />

      {/* Filter Icon */}
      <Icon name="ios-options-outline" size={20} color="#A9A9A9" style={styles.filterIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Light gray background
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '#007BFF', // Border color
    borderWidth: 1,
  },
  icon: {
    marginRight: 8, // Space between icon and text input
  },
  input: {
    flex: 1, // Fills the remaining space
    fontSize: 16,
    color: '#333',
  },
  filterIcon: {
    marginLeft: 8, // Space between text input and filter icon
  },
});

export default SearchInput;
