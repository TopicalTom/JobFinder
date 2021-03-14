import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.screenStyle}>
            <Text h1 
                style={styles.titleStyle}>
                JobFinder
            </Text>
            <Button 
                title="Get started" 
                textStyle={styles.ctaTextStyle}
                buttonStyle={styles.ctaButtonStyle}
                onPress={() => navigation.navigate('Auth')}
            />
            <Button 
                title="Already have an account? Sign in" 
                textStyle={styles.altTextStyle}
                buttonStyle={styles.altButtonStyle}
                onPress={() => navigation.navigate('Auth')}
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
        color: '#FFF'
    },
    ctaButtonStyle: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FFF',
        marginBottom: 8,
        width: 295,
        height: 48,
    },
    altButtonStyle: {
        backgroundColor: 'rgba(76,139,245,1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(76,139,245,1)',
        marginBottom: 8,
        width: 295,
        height: 48,
    },
    ctaTextStyle: {
        color: '#000',
        fontSize: 14,
        fontWeight: '600',
    },
    altTextStyle: {
        color: 'rgba(255,255,255,0.1)',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default WelcomeScreen;