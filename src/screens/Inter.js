import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Inter = ({navigation}) => {
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
        marginLeft:'23%'
        
        
      }}>
        <Text style={{

            fontSize:30,
            color:'white'


        }}>Career After 12th</Text>
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
    
    onPress={() => navigation.navigate('ArtStudents')}

    >
      <Text style={{
        fontSize:38,
        margin:5,
        marginLeft:50,
      }}>Art Students</Text>
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
    
    onPress={() => navigation.navigate('CommerceStudents')}

    >
      <Text style={{
        fontSize:32,
        margin:8,
        marginLeft:10

      }}>Commerce Students</Text>
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
    
    onPress={() => navigation.navigate('ScienceStudents')}
    
    >
      <Text style={{
        fontSize:35,
        margin:7,
        marginLeft:20

      }}>Science Students</Text>
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
    
    onPress={()=>navigation.navigate('Other')}
    
    >
      <Text style={{
        fontSize:35,
        margin:8,
        marginLeft:110

      }}
      
    
      
      >Other</Text>
    </TouchableOpacity>

    </View>
















    </View>
  )
}

export default Inter

const styles = StyleSheet.create({})