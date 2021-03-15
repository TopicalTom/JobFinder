import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Router
import ReviewRouter from './ReviewRouter';

// Screens
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';

const Tab = createBottomTabNavigator();

const MainRouter = () => {
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
                component={DeckScreen} 
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
                component={ReviewRouter} 
                options={() => ({ 
                    headerShown: true,
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

export default MainRouter;