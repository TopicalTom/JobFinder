import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '@env';

const AuthScreen = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            setUserInfo(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // when user hasn't signed in yet
                Alert.alert('Please Sign in');
                setIsLoggedIn(false);
            } else {
                Alert.alert('Something else went wrong... ', error.toString());
                setIsLoggedIn(false);
            };
        };
    };

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setIsLoggedIn(false);
        } catch (error) {
            Alert.alert('Something else went wrong... ', error.toString());
        };
    };

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserInfo(userInfo);
            setError(null);
            setIsLoggedIn(true);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // when user cancels sign in process,
                console.log('Process Cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // when in progress already
                Alert.alert('Process in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // when play services not available
                Alert.alert('Play services are not available');
            } else {
                // some other error
                Alert.alert('Something else went wrong... ', error.toString());
                setError(error);
            };
        };
    };

    const configureGoogleSign = (clientId) => {
        GoogleSignin.configure({
            webClientId: `${clientId}`,
            offlineAccess: false
        });
    };

    useEffect(() => {
        configureGoogleSign(WEB_CLIENT_ID);
    }, []);
  
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.subtitleStyle}>Let's get started</Text>
            <Text h3 style={styles.titleStyle}>
                Select your sign up method
                </Text>
            <Button 
                title="Sign in with Apple"
                titleStyle={styles.platformTextStyle}
                buttonStyle={styles.appleButtonStyle}
                icon={
                    <Icon
                        name="apple1"
                        type="antdesign"
                        size={16}
                        color="white"
                        paddingLeft={6}
                    />
                } 
                onPress={() => signIn()}
            />
            <Button 
                title="Continue with Google"
                titleStyle={styles.platformTextStyle}
                buttonStyle={styles.googleButtonStyle}
                icon={
                    <Icon
                        name="google"
                        type="antdesign"
                        size={16}
                        color="white"
                        paddingLeft={6}
                    />
                } 
                onPress={() => signIn()}
            />
            <Button 
                title="Continue with email"
                titleStyle={styles.defaultTextStyle}
                buttonStyle={styles.defaultButtonStyle}
                icon={
                    <Icon
                        name="email"
                        type="materialcommunity"
                        size={16}
                        color="#B6B6B6"
                        paddingLeft={6}
                    />
                } 
                onPress={() => signIn()}
            />
            <Button 
                title="Use mobile number"
                titleStyle={styles.defaultTextStyle}
                buttonStyle={styles.defaultButtonStyle}
                icon={
                    <Icon
                        name="smartphone"
                        type="materialicons"
                        size={16}
                        color="#B6B6B6"
                        paddingLeft={6}
                    />
                } 
                onPress={() => signIn()}
            />
            <Button 
                title="Log in to existing account"
                titleStyle={styles.altTextStyle}
                buttonStyle={styles.altButtonStyle}
                iconRight
                icon={
                    <Icon
                        name="chevron-small-right"
                        type="entypo"
                        size={16}
                        color="#B6B6B6"
                        paddingLeft={2}
                    />
                } 
                onPress={() => signIn()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitleStyle: {
        textAlign: 'left',
        color: "#B6B6B6",
        width: 295,
        marginBottom: 8
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 40,
        width: 295
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    defaultTextStyle: {
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 12,
        color: '#909090'
    },
    platformTextStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 12,
    },
    altTextStyle: {
        color: '#565656',
        fontSize: 14,
        fontWeight: '600',
    },
    appleButtonStyle: {
        backgroundColor: 'rgba(0,0,0,1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        width: 295,
        marginBottom: 8,
        height: 48,
        justifyContent: 'flex-start'
    },
    googleButtonStyle: {
        backgroundColor: 'rgba(76,139,245,1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(76,139,245,1)',
        marginBottom: 8,
        width: 295,
        height: 48,
        justifyContent: 'flex-start'
    },
    defaultButtonStyle: {
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        marginBottom: 8,
        width: 295,
        height: 48,
        justifyContent: 'flex-start'
    },
    altButtonStyle: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 8,
        width: 295,
        height: 48,
        justifyContent: 'flex-start'
    },
    status: {
        marginVertical: 20
    },
    loggedinMessage: {
        fontSize: 20,
        color: 'tomato'
    }
});

export default AuthScreen;

/*
            <View style={styles.status}>
                {isLoggedIn === false ? (
                    <Text 
                        style={styles.loggedinMessage}>
                        You must sign in!
                    </Text>
                ) : (
                    <Button 
                        onPress={() => signOut()} 
                        title='Sign out' 
                        color='#332211' 
                    />
                )}
            </View>
*/