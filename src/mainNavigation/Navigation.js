// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import EducationScreen from '../screens/EducationScreen';
import TenthStandard from '../screens/TenthStandard';
import Inter from '../screens/Inter';
import ArtStudents from '../screens/ArtStudents';
import CommerceStudents from '../screens/CommerceStudents';
import ScienceStudents from '../screens/ScienceStudents';
import Other from '../screens/Other';
import Graduation from '../screens/Graduation';
import ArtGraduate from '../screens/ArtGraduate';
import ScienceGraduate from '../screens/ScienceGraduate';
import CommerceGraduate from '../screens/CommerceGraduate';
import OtherGraduation from '../screens/OtherGraduation';

const Stack = createStackNavigator();

const navigation = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen initialRouteName="WelcomeScreen" name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="EducationScreen" component={EducationScreen} />
        <Stack.Screen name="TenthStandard" component={TenthStandard} />
        <Stack.Screen name="Inter" component={Inter} />
        <Stack.Screen name="ArtStudents" component={ArtStudents} />
        <Stack.Screen name="CommerceStudents" component={CommerceStudents} />
        <Stack.Screen name="ScienceStudents" component={ScienceStudents} />
        <Stack.Screen name="Other" component={Other} />
        <Stack.Screen name="Graduation" component={Graduation} />
        <Stack.Screen name="ArtGraduate" component={ArtGraduate} />
        <Stack.Screen name="ScienceGraduate" component={ScienceGraduate} />
        <Stack.Screen name="CommerceGradute" component={CommerceGraduate} />
        <Stack.Screen name="OtherGraduation" component={OtherGraduation} />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default navigation;
