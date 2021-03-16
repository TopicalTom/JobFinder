import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements';

// Store
import { connect } from 'react-redux';
import { signOut, clearLikedJobs } from '../actions';

const SettingsScreen = ({ signOut, clearLikedJobs}) => {
    return (
        <SafeAreaView>
            <Text>Setting Screen</Text>
            <Button 
                title="Clear liked jobs"
                onPress={() => clearLikedJobs()}
            />
            <Button 
                title="Sign Out"
                onPress={() => signOut()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default connect(null, { clearLikedJobs, signOut})(SettingsScreen);