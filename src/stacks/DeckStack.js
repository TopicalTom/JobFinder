import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import DeckScreen from '../screens/DeckScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const DeckStack = () => {
    return (
        <Stack.Navigator initialRouteName="Deck">
            <Stack.Screen 
                name="Deck" 
                component={DeckScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default DeckStack;