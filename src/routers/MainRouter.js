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
                            name="map" 
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
                    tabBarLabel: 'Browse',
                    tabBarIcon: () => (
                        <Icon 
                            name="search" 
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
                    tabBarLabel: 'Saved',
                    tabBarIcon: () => (
                        <Icon 
                            name="heart" 
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