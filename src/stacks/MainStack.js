import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Stacks
import DeckStack from '../stacks/DeckStack';

// Screens
import MapScreen from '../screens/MapScreen';
import ReviewScreen from '../screens/ReviewScreen';

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Map"
            tabBarOptions={{
                activeTintColor: 'black',
              }}>
            <Tab.Screen 
                name="Map" 
                component={MapScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: 'Map',
                    tabBarIcon: () => (
                        <Icon 
                            name="home" 
                            type="feather"
                            color='black' 
                            size={30} 
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Deck" 
                component={DeckStack} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: 'Deck',
                    tabBarIcon: () => (
                        <Icon 
                            name="user" 
                            type="feather"
                            color='black' 
                            size={30}
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Review" 
                component={ReviewScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: 'Review',
                    tabBarIcon: () => (
                        <Icon 
                            name="plus-square" 
                            type="feather"
                            color='black' 
                            size={30} 
                        />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default MainStack;