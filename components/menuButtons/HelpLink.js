import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const HelpLink = ({ title, img }) => {
    return (
        <Pressable>
            <View style={styles.button}>
                <Image source={img} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        height: 115,
        width: 157,
        paddingHorizontal: 30,
        backgroundColor: '#F8F9FA',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: -0.4,
        fontSize: 12,
        textAlign: 'center',
    }
});

export default HelpLink;