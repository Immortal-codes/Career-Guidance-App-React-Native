import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const EducationScreen = ({navigation}) => {
  return (
    <View style={{
      backgroundColor:'black',
      flex:1,
 
    }}>

      <View style={{
        // backgroundColor:'white',
        height:50,
        width:360,
        marginTop:80,
        marginLeft:'10%'
        
        
      }}>
        <Text style={{

            fontSize:30,
            color:'white'


        }}>See Your Career Options</Text>
      </View>
     
     <View>

    <TouchableOpacity style={{
      backgroundColor:'white',
      height:60,
      width:300,
      marginTop:50,
      marginLeft:40,
      borderRadius:50,
      margin:30,

      // Shadow Styls

      shadowColor: '#F0E3E3',
      shadowOffset: { width: -11, height: 11, },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      borderRadius: 20
    
    }} 
    
    onPress={() => navigation.navigate('TenthStandard')}

    >
      <Text style={{
        fontSize:38,
        margin:5,
        marginLeft:40,
      }}>10th Standard</Text>
    </TouchableOpacity>


    <TouchableOpacity style={{
      backgroundColor:'white',
      height:60,
      width:300,
      marginTop:20,
      marginLeft:40,
      borderRadius:50,
      margin:30,

      // Shadow Styls

      shadowColor: '#F0E3E3',
      shadowOffset: { width: -11, height: 11, },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      borderRadius: 20
    }}
    
    onPress={() => navigation.navigate('Inter')}

    >
      <Text style={{
        fontSize:38,
        margin:5,
        marginLeft:40

      }}>12th Standard</Text>
    </TouchableOpacity>


    <TouchableOpacity style={{
      backgroundColor:'white',
      height:60,
      width:300,
      marginTop:20,
      marginLeft:40,
      borderRadius:50,
      margin:30,

      // Shadow Styls

      shadowColor: '#F0E3E3',
      shadowOffset: { width: -11, height: 11, },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      borderRadius: 20
    }}
    
    onPress={()=>navigation.navigate('Graduation')}
    

    >
      <Text style={{
        fontSize:40,
        margin:5,
        marginLeft:40

      }}>Gradudation</Text>
    </TouchableOpacity>


    {/* <TouchableOpacity style={{
      backgroundColor:'white',
      height:60,
      width:300,
      marginTop:20,
      marginLeft:40,
      borderRadius:50,
      margin:30,

      // Shadow Styls

      shadowColor: '#F0E3E3',
      shadowOffset: { width: -11, height: 11, },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      borderRadius: 20
    }}>
      <Text style={{
        fontSize:35,
        margin:8,
        marginLeft:20

      }}>Post-Gradudation</Text>
    </TouchableOpacity> */}

    </View>
















    </View>
  )
}

export default EducationScreen

const styles = StyleSheet.create({})