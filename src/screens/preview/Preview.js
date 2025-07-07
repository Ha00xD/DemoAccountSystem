import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { useRoute } from '@react-navigation/native';

const Preview = () => {
  const { params } = useRoute();
  console.log('Check pata,s', params);
  return (
    <View style={styles.container}>
      <CustomHeader title={params.title} />
      <View style={{ marginHorizontal: 15 }}>
        <Text>Preview</Text>
      </View>
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
