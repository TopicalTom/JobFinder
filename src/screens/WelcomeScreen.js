import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {
        id: 0,
        text: "Welcome to JobFinder",
        color: "#03A9F4"
    },
    {
        id: 1,
        text: "Use this to find a job",
        color: "#009688"  
    },
    {
        id: 2,
        text: "Set your location, then swipe away",
        color: "#03A9F4"  
    }
]

const WelcomeScreen = () => {
    return (
        <>
            <Slides data={SLIDE_DATA} />
        </>
    );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;