import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sport = () => {
  return (
    <View style={{
      backgroundColor:'black',
      flex:1
    }}>


      <View style={{
        margin:50,
        
      }}>
    <Text style={{color:'white', fontSize:20}}>Common Selection Process in any Sports</Text>
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

export default Sport

const styles = StyleSheet.create({})