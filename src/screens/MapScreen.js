import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { retrieveJobs } from '../actions';

const MapScreen = ({ retrieveJobs }) => {
    const navigation = useNavigation();
    const [ region, setRegion ] = useState({
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
    });

    const onRegionChangeComplete = pan => {
        setRegion(pan);
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView 
                style={styles.map}
                onRegionChangeComplete={onRegionChangeComplete}
                initialRegion={{
                    latitude: 37,
                    longitude: -122,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
                region={region}
            />
            <View style={styles.buttonContainer}>
                <Button 
                    title="Search my area"
                    buttonStyle={styles.buttonStyle}
                    onPress={() => retrieveJobs(
                        region,
                        () => navigation.navigate('Deck')
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    buttonStyle: {
        backgroundColor: '#009688',
    },
    buttonContainer: {
        position: 'absolute',
        left: 50,
        right: 50,
        bottom: 30,
        zIndex: 20
    },
});

export default connect(null, { retrieveJobs })(MapScreen);