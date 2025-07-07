import { useNavigation } from '@react-navigation/native';
import { FileMagnifyingGlassIcon } from 'phosphor-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 0.2,
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/image/caret-left.png')}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      <TouchableOpacity>
        {/* <Image
          style={{ width: 30, height: 30 }}
          source={require('../assets/image/refresh.png')}
        /> */}
        <FileMagnifyingGlassIcon size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
