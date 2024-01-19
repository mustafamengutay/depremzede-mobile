import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import menuButton from '../assets/fi-sr-apps.png';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Depremzede</Text>
            <View style={styles.login}>
                <Image source={menuButton} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 36,
        letterSpacing: -0.4,
        fontWeight: 'bold',
        color: '#F8F9FA',
    },
    login: {
        borderRadius: 100,
    },
    loginText: {
        color: '#F8F9FA',
    }
});

export default Header;