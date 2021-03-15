import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Text } from 'react-native-elements';

// Store
import { connect } from 'react-redux';

// Components
import Deck from '../components/Deck';

const DeckScreen = ({ results }) => {
    const [ showDeck, setShowDeck ] = useState(true);

    const handleEmptyState = () => {
        setShowDeck(false);
    }

    return (
        <SafeAreaView>
            {showDeck
                ?   <Deck 
                        data={results} 
                        callback={handleEmptyState} 
                    />
                :   <Card>
                        <Text>No more cards</Text>
                    </Card>
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

const mapStateToProps = ({ jobs }) => {
    console.log(jobs.results)
    return { 
        results: jobs.results,  
    };
}

export default connect(mapStateToProps)(DeckScreen);