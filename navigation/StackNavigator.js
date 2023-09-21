import { Home,Products,Details } from "./Screens"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import React from 'react'


const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
        </NavigationContainer>
        
    )
    }

export default StackNavigator

