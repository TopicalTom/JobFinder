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
            <Root.Navigator initialRouteName="Main">
                <Root.Screen 
                    name="Welcome" 
                    component={WelcomeScreen} 
                    options={() => ({ 
                        headerShown: false,
                        tabBarVisible: false
                    })}
                />
                <Root.Screen 
                    name="Auth" 
                    component={AuthScreen} 
                    options={() => ({ 
                        headerShown: false,
                        tabBarVisible: false
                    })}
                />
                <Root.Screen 
                    name="Main" 
                    component={MainStack} 
                    options={() => ({ 
                        headerShown: false,
                        //tabBarVisible: false
                    })}
                />
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;