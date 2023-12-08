import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const OtherGraduation = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1
        }}>

            <ScrollView>

            <View style={{
                margin: 50,

            }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Other Options in the List of Professional Courses After Graduation</Text>
            </View>

            <View style={{
                marginTop: 0,
                marginLeft: 10
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20
                }}>
                    1. MSc Forensic Science {'\n'}{'\n'}
                    2. MS in Engineering Management{'\n'}{'\n'}
                    3. Masters in Mass Communication{'\n'}{'\n'}
                    4. MBA in Fashion Designing{'\n'}{'\n'}
                    5. Postgraduate Diploma in Computer Application{'\n'}{'\n'}
                    6. Event Management Courses{'\n'}{'\n'}
                    7. Masters in Artificial Intelligence{'\n'}{'\n'}
                    8. Perfusion Technology Courses{'\n'}{'\n'}
                    9. Masters in Social Work{'\n'}{'\n'}
                    10. Library Science Course{'\n'}{'\n'}
                    11. Actuarial Science Course{'\n'}{'\n'}
                    12. Banking Courses{'\n'}{'\n'}

                </Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default OtherGraduation

const styles = StyleSheet.create({})