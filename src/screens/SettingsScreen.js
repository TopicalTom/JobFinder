import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements';

// Store
import { connect } from 'react-redux';
import { signOut } from '../actions';

const SettingsScreen = () => {
    return (
        <SafeAreaView>
            <Text>Setting Screen</Text>
            <Button 
                title="Sign Out"
                onPress={() => signOut()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default connect(null)(SettingsScreen);