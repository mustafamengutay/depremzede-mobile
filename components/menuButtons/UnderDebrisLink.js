import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import megaphone from '../../assets/megaphone.png';

const UnderDebrisLink = () => {
  return (
    <Pressable style={styles.press}>
      <View style={styles.button}>
        <View style={styles.inner}>
          <Image source={megaphone} style={styles.icon} />
          <View style={styles.titles}>
            <View style={styles.description}>
              <Text style={styles.miniTitle}>Yardım İsteyin</Text>
              <Text style={styles.title}>Ben/Tanıdığım{'\n'}Enkaz Altında</Text>
            </View>
            <View style={styles.hint}>
              <Text style={styles.hint.text}>Yardım Formu </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable >
  );
};

const styles = StyleSheet.create({
  button: {
    height: 185,
    paddingHorizontal: 30,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  description: {
    gap: 8
  },
  titles: {
    gap: 32,
  },
  miniTitle: {
    fontSize: 14,
  },
  title: {

    fontWeight: 'bold',
    letterSpacing: -0.4,
    fontSize: 20,
  },
  hint: {
    text: {
      fontSize: 14,
      color: '#F8F9FA',
    },
    paddingVertical: 8,
    backgroundColor: '#141414',
    borderRadius: 100,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UnderDebrisLink;
