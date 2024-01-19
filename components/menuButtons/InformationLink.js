import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import donation from '../../assets/donation.png';

const InformationLink = ({ title, img }) => {
    return (
        <Pressable style={styles.press}>
            <View style={styles.button}>
                <View style={styles.inner}>
                    <Image source={img} />
                    <View style={styles.titles}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </View>
        </Pressable >
    )
}


const styles = StyleSheet.create({
    button: {
        height: 115,
        paddingHorizontal: 30,
        backgroundColor: '#F8F9FA',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        width: '100%',
        height: 57,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titles: {
        alignSelf: 'flex-end',
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: -0.4,
        fontSize: 20,
    }
});


export default InformationLink