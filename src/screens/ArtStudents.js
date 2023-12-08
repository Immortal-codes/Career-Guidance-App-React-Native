import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const ArtStudents = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1,
        }}>

            <ScrollView>
            <View style={{
                marginTop:60,
                marginLeft:70
            }}>
                <Text style={{
                    fontSize:20,
                    color:'white'
                }}>UG Courses for Arts Students</Text>
            </View>


            <View style={{
                marginTop:20,
                marginLeft:15
            }}>
                <Text style={{

                    fontSize:18,
                    color:'white'
                    


                }}>
                    1. BBA- Bachelor of Business Administration {'\n'}{'\n'}
                    2. BMS- Bachelor of Management Science{'\n'}{'\n'}
                    3. BFA- Bachelor of Fine Arts{'\n'}{'\n'}
                    4. BEM- Bachelor of Event Management{'\n'}{'\n'}
                    5. Integrated Law Course- BA + LL.B{'\n'}{'\n'}
                    6. BJMC- Bachelor of Journalism and Mass Communication{'\n'}{'\n'}
                    7. BFD- Bachelor of Fashion Designing{'\n'}{'\n'}
                    8. BSW- Bachelor of Social Work{'\n'}{'\n'}
                    9. BBS- Bachelor of Business Studies{'\n'}{'\n'}
                    10. BTTM- Bachelor of Travel and Tourism Management{'\n'}{'\n'}
                    11. Aviation Courses{'\n'}{'\n'}
                    12. B.Sc- Interior Design{'\n'}{'\n'}
                    13. B.Sc.- Hospitality and Hotel Administration{'\n'}{'\n'}
                    14. Bachelor of Design (B. Design){'\n'}{'\n'}
                    15. Bachelor of Performing Arts{'\n'}{'\n'}
                    16. BA in History{'\n'}{'\n'}{'\n'}

                </Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default ArtStudents

const styles = StyleSheet.create({})