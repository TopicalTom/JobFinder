import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import Deck from '../components/Deck';

const DeckScreen = ({ results }) => {
    const [ showDeck, setShowDeck ] = useState(true);
    const navigation = useNavigation();

    const handleEmptyState = () => {
        setShowDeck(false);
    };

    return (
        <SafeAreaView>
            {showDeck
                ?   <Deck 
                        data={results} 
                        callback={handleEmptyState} 
                    />
                :   <Card>
                        <Text>No more jobs</Text>
                        <Button 
                            title="Back to Map"
                            onPress={() => navigation.navigate('Map')}
                        />
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