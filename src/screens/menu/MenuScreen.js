import { useNavigation } from '@react-navigation/native';
import { GlobeIcon } from 'phosphor-react-native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const MenuScreen = () => {
  const navigation = useNavigation();
  console.log('Chekc Nvigaiton ??>>>>', navigation);

  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ChangeLanguageScreen')}
        style={{
          backgroundColor: 'white',
          elevation: 2,
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowColor: '#000',
          shadowOffset: { height: 3, width: 0 },
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          gap: 5,
          marginTop: 20,
        }}
      >
        <GlobeIcon size={30} color="#070808" />
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Change Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Preview', {
            title: 'Preview',
            amount: 'MMK 1,800',
            date: '18-02-2025',
          })
        }
        style={{
          backgroundColor: 'white',
          elevation: 2,
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowColor: '#000',
          shadowOffset: { height: 3, width: 0 },
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          gap: 5,
          marginTop: 20,
        }}
      >
        <GlobeIcon size={30} color="#070808" />
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Check Preview</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PurchasedOrder', {
            title: 'Purchased Order',
          })
        }
        style={{
          backgroundColor: 'white',
          elevation: 2,
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowColor: '#000',
          shadowOffset: { height: 3, width: 0 },
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          gap: 5,
          marginTop: 20,
        }}
      >
        {/* <GlobeIcon size={30} color="#070808" /> */}
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Purchased Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;
