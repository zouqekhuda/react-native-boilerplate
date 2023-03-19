import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from '../../screens'
import RouteNames from '../constants/route-names';
const { authRoutes } = RouteNames
const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}
const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={authRoutes.loginScreen} component={AuthRoutes.AuthScreenNameOne} />
            <Stack.Screen name={authRoutes.signUpScreen} component={AuthRoutes.AuthScreenNameTwo} />
        </Stack.Navigator>
    );
}
export default AuthNavigation