import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const FormLayout = ({ children }) => {
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
        backgroundColor: '#FFF',
    },
    layout: {
        marginVertical: 16,
        marginHorizontal: 30,
    },
});

export default FormLayout;