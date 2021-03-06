import { View, Image } from 'react-native'
import React from 'react'
import { StyleSheet , Dimensions} from 'react-native'

const Body = ({image}) => {
  return (
    <Image source={{uri: image}} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
  image:{
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").width,
    alignSelf:"center",
    resizeMode:"cover"
  }
})

export default Body