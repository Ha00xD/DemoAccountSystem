import { StyleSheet, Text, View } from 'react-native';

const Test = () => {
  return (
    <View>
      <Text style={styles.title}>App</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 30,
  },
});
