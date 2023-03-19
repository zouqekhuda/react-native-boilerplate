import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from '../../screens'
import RouteNames from '../constants/route-names';
const { appRoutes } = RouteNames
const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}
const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={appRoutes.splashScreen} component={AppRoutes.ScreenNameOne} />
            <Stack.Screen name={appRoutes.homeScreen} component={AppRoutes.ScreenNameTwo} />
        </Stack.Navigator>
    );
}
export default AppNavigation