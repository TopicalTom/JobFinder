import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Store
import { connect } from 'react-redux';

const ReviewScreen = ({ likes }) => {
    return (
        <SafeAreaView>
            <Text>{String(likes)}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
    console.log(state)
    return { likes: state.likes };
}

export default connect(mapStateToProps)(ReviewScreen);