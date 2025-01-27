import { View, Text,StyleSheet,ImageBackground,Pressable} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import  icedCoffeeImg from '../../assets/images/iced-coffee.png'

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        style={styles.image}

      >
        <Text style={styles.text}>Saurabh</Text>
        <Link href='/explore' style={{marginHorizontal:'auto'}} asChild>
            <Pressable>
                <Text>Explore</Text>
            </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    justifyContent:'center'
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    maarginBottom:'30px',
    backgroundColor:'rgba(0,0,0,0.2)'
  }

})


export default App