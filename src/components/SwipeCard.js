import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

const SwipeCard = ({ title, company, uri }) => {
    return (
        <Card>
            <Card.Image source={{uri}} style={{ marginBottom: 10 }} />
            <Text h4>
                {title}
            </Text>
            <Text >
                {company}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                I can customize this further
            </Text>
            <Button title="View now" color='#03A9F4' />
        </Card>
    );
};

const styles = StyleSheet.create({});

export default SwipeCard;