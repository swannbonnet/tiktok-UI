import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigation from './BottomTabNavigation';

export default function Navigation() {

    const Stack = createStackNavigator(); 

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false }}>
                <Stack.Screen name="Home" component={BottomTabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
