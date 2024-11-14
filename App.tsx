import React from 'react';
import { StyleSheet, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import WelcomeScreen from './android/app/src/screens/WelcomeScreen';
// import HomeScreen from './android/app/src/screens/HomeScreen';

function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="gray"
        barStyle="dark-content" 
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <WelcomeScreen />
          {/* <HomeScreen/> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

export default App;
