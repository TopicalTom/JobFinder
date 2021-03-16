import React from 'react';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import MapView from 'react-native-maps';

// Store
import { connect } from 'react-redux';

const ReviewScreen = ({ likes }) => {
    return (
        <ScrollView>
            {likes.map(job => {
                const { id, title, company, created_at, url } = job;
                return (
                    <Card key={id}>
                        <View style={{ height: 250 }}>
                            <Card.Title>{title}</Card.Title>
                            <MapView 
                                scrollEnabled={false}
                                style={{ flex: 1 }}
                                cacheEnabled={Platform.OS === 'android' ? true : false}
                                initialRegion={{
                                    latitude: 37,
                                    longitude: -122,
                                    latitudeDelta: 0.09,
                                    longitudeDelta: 0.04,
                                }}
                            >
                            </MapView>
                            <View style={styles.detailsWrapper}>
                                <Text 
                                    style={styles.italics}>
                                    {company}
                                </Text>
                                <Text 
                                    style={styles.italics}>
                                    {created_at}
                                </Text>
                            </View>
                            <Button 
                                title='Apply Now!'
                                onPress={() => Linking.openURL(`${url}`)}
                            />
                        </View>
                    </Card>
                )
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    italics: {
        fontStyle: 'italic'
    },
    detailsWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

const mapStateToProps = (state) => {
    console.log(state)
    return { likes: state.likes };
}

export default connect(mapStateToProps)(ReviewScreen);