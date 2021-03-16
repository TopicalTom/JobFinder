import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Card, Text } from 'react-native-elements';
import MapView from 'react-native-maps';

const SwipeCard = ({ title, company, created_at }) => {
    return (
        <Card>
            <View style={{ height: 300 }}>
                <MapView 
                    scrollEnabled={false}
                    style={{ flex: 1 }}
                    cacheEnabled={Platform.OS === 'android' ? true : false}
                    initialRegion={{
                        latitude: 37,
                        longitude: -122,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04,
                    }}
                >
                
                </MapView>
            </View>
            <Text h4>
                {title}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                {company}
            </Text >
            <Text style={{ marginBottom: 10 }}>
                {created_at}
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({});

export default SwipeCard;