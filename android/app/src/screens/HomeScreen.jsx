import React from 'react'
import { View ,StyleSheet } from 'react-native'
import SearchInput from '../components/searchInput/SearchInput'

function HomeScreen() {
  return (
   <View style={styles.container}>
    <SearchInput/>
   </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginTop:2,
    marginLeft:17,
    marginRight:17,
  }
})
export default HomeScreen
