import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import React from 'react'

const CommerceStudents = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1,
        }}>

            <ScrollView>
                <View style={{
                    marginTop: 70,
                    marginLeft: 30
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}>UG Courses for Commerce Students</Text>
                </View>


                <View style={{
                    marginTop: 40,
                    marginLeft: 15
                }}>
                    <Text style={{

                        fontSize: 18,
                        color: 'white'



                    }}>
                       1. B.Com- Bachelor of Commerce {'\n'}{'\n'}
                       2. BBA- Bachelor of Business Administration{'\n'}{'\n'}
                       3. B.Com (Hons.){'\n'}{'\n'}
                       4. BA (Hons.) in Economics{'\n'}{'\n'}
                       4. Integrated Law Program- B.Com LL.B.{'\n'}{'\n'}
                       5. Integarted Law Program- BBA LL.B{'\n'}{'\n'}

                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default CommerceStudents

const styles = StyleSheet.create({})