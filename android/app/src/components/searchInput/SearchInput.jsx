import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {Images} from '../../assets/images/images';
function SearchInput() {
  return (
    <View style={styles.container}>
     
      <Image source={Images.SEARCH_ICON} style={styles.icon} />

    
      <TextInput
        style={styles.input}
        placeholder="Search keywords..."
        placeholderTextColor="#868889"
       
      />

      <Image source={Images.FILTER} style={styles.filterIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '#007BFF',
    borderWidth: 1,
    marginTop:51,

  },
  icon: {
    marginRight: 8,
    width: 20,
    height: 20,

  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight:'900'
  },
  filterIcon: {
    width: 20,
    height: 20,
   
    marginLeft: 30,
  },
});

export default SearchInput;
