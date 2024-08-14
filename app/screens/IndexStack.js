import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'; // Adjust the path as needed
import BoxContent from '../screens/BoxContent'; // Adjust the path as needed

const Stack = createStackNavigator();

export default function IndexStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home" // Set the initial route of the stack
            screenOptions={{
                headerShown: false, // Hide header by default, customize per screen
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false, // Hide header for the Home screen
                }}
            />
            <Stack.Screen
                name="BoxContent"
                component={BoxContent}
                options={{
                    headerShown: true, // Show header for BoxContent
                    title: 'Box Content', // Customize header title
                }}
            />

            {/* Add more screens as needed */}
        </Stack.Navigator>
    );
}
