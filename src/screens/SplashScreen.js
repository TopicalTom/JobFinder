import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.screenStyle}>
            <Text h1 
                style={styles.titleStyle}>
                JobFinder
            </Text>
            <ActivityIndicator 
                size="small" 
                color="#fff" 
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(76,139,245,1)',
        flex: 1
    },
    titleStyle: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 30
    },
});

export default SplashScreen;