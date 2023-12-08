import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native-gesture-handler'
const Graduation = ({ navigation }) => {
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
              marginLeft:'5%'
              
              
            }}>
              <Text style={{
      
                  fontSize:25,
                  color:'white'
      
      
              }}>Career Options After Graduation</Text>
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
          
          onPress={() => navigation.navigate('ArtGraduate')}
      
          >
            <Text style={{
              fontSize:28,
              margin:12,
              marginLeft:7,
            }}>After Graduation in Arts</Text>
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
          
          onPress={() => navigation.navigate('ScienceGraduate')}
      
          >
            <Text style={{
              fontSize:24,
              margin:15,
              marginLeft:5
      
            }}>After Graduation in Science</Text>
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
          
          onPress={()=>navigation.navigate('CommerceGradute')}
          
      
          >
            <Text style={{
              fontSize:21,
              margin:15,
              marginLeft:9
      
            }}>After Graduation in Commerce</Text>
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
          
          onPress={()=>navigation.navigate('OtherGraduation')}

          >
            <Text style={{
              fontSize:25,
              margin:15,
              marginLeft:5
      
            }}>Other Professional Courses</Text>
          </TouchableOpacity>
      
          </View>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
          </View>
    )
}

export default Graduation

const styles = StyleSheet.create({})