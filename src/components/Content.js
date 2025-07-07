import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Content = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/image/acct.webp')}
        style={styles.headerImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  header: {
    flex: 0.8,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
