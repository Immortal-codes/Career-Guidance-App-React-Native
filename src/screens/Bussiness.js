import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bussiness = () => {
  return (
    <View style={{
      backgroundColor:'black',
      flex:1
    }}>


      <View style={{
        margin:50,
        
      }}>
    
    
    <Text style={{color:'white', fontSize:20}}>There is no hard and fast rule for Starting the Bussiness,{'\n'} 
    You can start whenever you want , you simply do and learn its a on field game but still i provide you the Educational Path for the Bussiness</Text>

     <Text>{'\n'}</Text> 

    <Text style={{color:'white', fontSize:20}}>Educational Path For Business</Text>

      </View>

      <View style={{
        marginTop:0,
        marginLeft:10
      }}>
        <Text style={{
          color:'white',
          fontSize:20
          }}>
        1. Diploma in Digital Marketing {'\n'}{'\n'}
        2. Diploma in Business Administration {'\n'}{'\n'}
        3. Government Jobs{'\n'}{'\n'}
        4. Diploma in Fashion Technology{'\n'}{'\n'}
        5. Diploma in Interior Decoration{'\n'} {'\n'}
        6. Certificate in Cosmetology & Health{'\n'}{'\n'}
        7. Diploma in Graphic Designing {'\n'}{'\n'}
        8. Diploma in Hotel Management {'\n'}{'\n'}
        9. ITI (Diploma) {'\n'}{'\n'}
        10. Polythecnic {'\n'}{'\n'}
        
        </Text>
      </View>

    </View>
  )
}

export default Bussiness

const styles = StyleSheet.create({})