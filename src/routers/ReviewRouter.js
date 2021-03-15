import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Screens
import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const ReviewRouter = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName="Review Jobs">
            <Stack.Screen 
                name="Review Jobs" 
                component={ReviewScreen} 
                options={() => ({ 
                    headerRight: () => (
                        <Button 
                            title="Settings"
                            onPress={() => navigation.navigate('Settings')}
                            style={styles.button}
                        />
                    ),
                })}
            />
            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={() => ({ 
                    headerShown: true,
                })}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    button: {
        color: "rgba(0,122,255,1)",
        backgroundColor: "rgba(0,0,0,0)"
    }
});

export default ReviewRouter;