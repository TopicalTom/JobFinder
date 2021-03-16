import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { 
    StyleSheet, 
    Animated, 
    useWindowDimensions, 
    PanResponder,
    LayoutAnimation,
    UIManager 
} from 'react-native';

// Store
import { connect } from 'react-redux';
import { likeJob } from '../actions';

// Components
import SwipeCard from './SwipeCard';

const Deck = ({ data = [], callback = () => {}, likeJob }) => {
    const [ deckIndex, setDeckIndex ] = useState(0);
    
    const SCREEN_WIDTH = useWindowDimensions().width;
    const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
    const SWIPE_OUT_DURATION = 250;
    
    // Card Swipe Gesture Tracking
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gesture) => {
                pan.setValue({
                    x: gesture.dx,
                    y: gesture.dy
                });
            },
            onPanResponderRelease: (evt, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    forceSwipe('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    forceSwipe('left');
                } else {
                    resetPosition();
                }
            },
        })
    ).current;

    const onSwipeRight = item => {
        likeJob(item);
    };

    const onSwipeLeft = item => {
        //dislikeJob(item)
    };

    const onSwipeComplete = (direction) => {
        let item = data[deckIndex];
        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        pan.setValue({ x: 0, y: 0 });
        setDeckIndex(deckIndex => deckIndex + 1);
    };

    const forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(pan, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION, 
            useNativeDriver: false
        }).start(() => { 
            onSwipeComplete(direction)
        });
    };

    const resetPosition = () => {
        Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    };

    // Dynamic Card styling
    const getCardStyle = () => {
        const rotate = pan.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange:['-120deg', '0deg', '120deg']
        })
        return { 
            ...pan.getLayout(),
            transform: [{ rotate }],
        };
    }

    // Adds Spring Animation to Advancing Cards
    useLayoutEffect(() => {
        UIManager.setLayoutAnimationEnabledExperimental && 
        UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    });

    // Watches for Dataset Change
    useEffect(() => {
        setDeckIndex(0);
    }, [data]);

    // Watches for Empty Card List
    useEffect(() => {
        if (deckIndex >= data.length) {
            callback();
        };
    }, [deckIndex, data]);

    return (
        <>
            {data && data.map((item, cardIndex) => {
                if (cardIndex < deckIndex) { return null; }
                if (cardIndex === deckIndex) {
                    return (
                        <Animated.View 
                            {...panResponder.panHandlers}
                            style={[
                                getCardStyle(), 
                                styles.cardStyle, 
                                { 
                                    zIndex: cardIndex * -1, 
                                    width: SCREEN_WIDTH,
                                    marginTop: 40 
                                }
                            ]}
                            key={item.id}
                        >
                            <SwipeCard {...item} />
                        </Animated.View>
                    );
                }
                return (
                    <Animated.View 
                        key={item.id}
                        style={[
                            styles.cardStyle, 
                            { 
                                zIndex: cardIndex * -1, 
                                width: SCREEN_WIDTH,
                                top: 10 * (cardIndex - deckIndex),
                                marginTop: 40 
                            }
                        ]}
                    >
                        <SwipeCard {...item} />
                    </Animated.View>
                );
            })}
        </>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        position: 'absolute'
    }
});

export default connect(null, { likeJob })(Deck);