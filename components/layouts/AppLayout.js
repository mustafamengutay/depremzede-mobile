import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const AppLayout = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.layout} showsVerticalScrollIndicator={false}>
                {children}
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
    },
    layout: {
        marginVertical: 16,
        marginHorizontal: 30,
    },
});

export default AppLayout;