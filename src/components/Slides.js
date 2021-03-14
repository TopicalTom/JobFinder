import React from 'react';
import { StyleSheet, useWindowDimensions, ScrollView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Slides = ({ data = [] }) => {
    const SCREEN_WIDTH = useWindowDimensions().width;
    const navigation = useNavigation();

    return (
        <ScrollView
            horizontal
            pagingEnabled
            style={{ flex: 1 }}
        >
            {data.map((slide, index) => {
                return (
                    <View 
                        key={slide.id}
                        style={[
                            styles.slideStyle, 
                            { 
                                width: SCREEN_WIDTH,
                                backgroundColor: slide.color 
                            } 
                        ]}>
                        <Text 
                            style={styles.textStyle}>
                            {slide.text}
                        </Text>
                        {index === data.length - 1
                            ?   <Button 
                                    raised
                                    title="Get started"
                                    buttonStyle={styles.buttonStyle}
                                    onPress={() => navigation.navigate('Auth')}
                                />
                            :   null
                        }
                    </View>
                )
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginBottom: 15
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
    }
});

export default Slides;