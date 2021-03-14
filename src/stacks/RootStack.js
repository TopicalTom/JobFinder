import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stack
import MainStack from '../stacks/MainStack';

// Screen
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';

const Root = createBottomTabNavigator();

const RootStack = () => {

    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="Welcome">
                <Root.Screen 
                    name="Welcome" 
                    component={WelcomeScreen} 
                    options={() => ({ 
                        headerShown: false,
                    })}
                />
                <Root.Screen 
                    name="Auth" 
                    component={AuthScreen} 
                    options={() => ({ 
                        headerShown: false,
                    })}
                />
                <Root.Screen 
                    name="Main" 
                    component={MainStack} 
                    options={() => ({ 
                        headerShown: false,
                    })}
                />
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;