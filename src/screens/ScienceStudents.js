import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import React from 'react'

const ScienceStudents = () => {
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
                    }}>UG Courses for Science Students</Text>
                </View>


                <View style={{
                    marginTop: 40,
                    marginLeft: 15
                }}>
                    <Text style={{

                        fontSize: 18,
                        color: 'white'



                    }}>
                        1. BE/B.Tech- Bachelor of Technology{'\n'}{'\n'}
                        2. B.Arch- Bachelor of Architecture{'\n'}{'\n'}
                        3. BCA- Bachelor of Computer Applications{'\n'}{'\n'}
                        4. B.Sc.- Information Technology{'\n'}{'\n'}
                        5. B.Sc- Nursing{'\n'}{'\n'}
                        6. BPharma- Bachelor of Pharmacy{'\n'}{'\n'}
                        7. B.Sc- Interior Design{'\n'}{'\n'}
                        8. BDS- Bachelor of Dental Surgery{'\n'}{'\n'}
                        9. Animation, Graphics and Multimedia{'\n'}{'\n'}
                        10. B.Sc. – Nutrition & Dietetics{'\n'}{'\n'}
                        11. BPT- Bachelor of Physiotherapy{'\n'}{'\n'}
                        12. B.Sc- Applied Geology{'\n'}{'\n'}
                        13. BA/B.Sc. Liberal Arts{'\n'}{'\n'}
                        14. B.Sc.- Physics{'\n'}{'\n'}
                        15. B.Sc. Chemistry{'\n'}{'\n'}
                        16. B.Sc. Mathematics {'\n'}{'\n'}
                        
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ScienceStudents

const styles = StyleSheet.create({})