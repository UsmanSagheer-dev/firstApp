import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

function App() {
  return (
    <>

      <StatusBar backgroundColor="#4B0082" barStyle="light-content" />

      <ScrollView style={styles.container}>
        <View style={[styles.box]}>
          <View style={[styles.box, { flex: 1, backgroundColor: 'red' }]}>
            <Text style={styles.text}>Flex 1</Text>
          </View>
          <View style={[styles.box, { flex: 1, backgroundColor: 'green' }]}>
            <Text style={styles.text}>Flex 2</Text>
          </View>
        </View>
        <View style={[styles.box]}>
          <View style={[styles.box, { flex: 2, backgroundColor: 'purple' }]}>
            <Text style={styles.text}>Flex 3</Text>
          </View>
          <View style={[styles.box, { flex: 2, backgroundColor: 'orange' }]}>
            <Text style={styles.text}>Flex 4</Text>
          </View>
        </View>
        <View style={[styles.box]}>
          <View style={[styles.box, { flex: 2, backgroundColor: 'blue' }]}>
            <Text style={styles.text}>Flex 5</Text>
          </View>
          <View style={[styles.box, { flex: 2, backgroundColor: 'gray' }]}>
            <Text style={styles.text}>Flex 6</Text>
          </View>
        </View>
        <View style={[styles.box]}>
          <View style={[styles.box, { flex: 2, backgroundColor: 'purple' }]}>
            <Text style={styles.text}>Flex 3</Text>
          </View>
          <View style={[styles.box, { flex: 2, backgroundColor: 'orange' }]}>
            <Text style={styles.text}>Flex 4</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    borderRadius: 20,
    gap: 10,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
