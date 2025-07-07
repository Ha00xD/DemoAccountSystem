import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { detailsData } from '../../data/detailsData';

const History = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, marginHorizontal: 15, paddingTop: 10 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={detailsData}
        renderItem={data => {
          console.log('Check Data?>>>>', data);
          return (
            <ScrollView style={{}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('HistoryTab', {
                    title: `# ${data.item.id}`,
                  })
                }
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 7,
                  backgroundColor: 'white',
                  padding: 15,
                  borderRadius: 10,
                  elevation: 2,
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  shadowColor: '#000',
                  shadowOffset: { height: 3, width: 0 },
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                  }}
                >
                  <View>
                    <Image source={require('../../assets/image/list.png')} />
                  </View>
                  <View style={{ flexDirection: 'column', gap: 5 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                      }}
                    >
                      {data.item.id}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: '500',
                      }}
                    >
                      {data.item.type}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: '500',
                      }}
                    >
                      {data.item.date}
                    </Text>
                  </View>
                </View>
                <View style={{ gap: 5 }}>
                  <Text
                    style={{
                      color:
                        data.item.status == 'Approved'
                          ? '#00d109'
                          : data.item.status == 'Updated'
                          ? '#7177bd'
                          : '#fffb00',
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    {data.item.status}
                  </Text>
                  <Text
                    style={{
                      color: 'darkblue',
                      fontWeight: '500',
                    }}
                  >
                    {data.item.amount}
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default History;
