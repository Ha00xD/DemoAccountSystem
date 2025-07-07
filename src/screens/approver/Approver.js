import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { approversData } from '../../data/approverData';

const Approver = () => {
  const renderItem = (data, index) => {
    const { approverId, approvedBy, level, dateTime, status } = data.item;
    console.log('Check Approver Data?>>>>', data.item);
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          elevation: 2,
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowColor: '#000',
          shadowOffset: { height: 4, width: 0 },
          borderRadius: 10,
          padding: 15,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ gap: 5 }}>
          <View style={styles.approverItem}>
            <Text style={styles.title}>Approver:</Text>
            <Text style={styles.title}>{approverId}</Text>
          </View>
          <View style={styles.approverItem}>
            <Text style={styles.title}>Approved By:</Text>
            <Text style={styles.title}>{approvedBy}</Text>
          </View>
          <View style={styles.approverItem}>
            <Text style={styles.title}>Level:</Text>
            <Text style={styles.title}>{level}</Text>
          </View>
          <View style={styles.approverItem}>
            <Text style={styles.title}>Date Time:</Text>
            <Text style={styles.title}>{dateTime}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor:
              status == 'APPROVED'
                ? 'green'
                : status == 'OPEN'
                ? 'darkblue'
                : 'yellow',
            width: 100,
            paddingVertical: 3,
            paddingHorizontal: 5,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              color:
                status == 'APPROVED'
                  ? 'green'
                  : status == 'OPEN'
                  ? 'darkblue'
                  : 'yellow',
              fontWeight: '500',
            }}
          >
            {status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 15 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList data={approversData} renderItem={renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Approver;

const styles = StyleSheet.create({
  approverItem: {
    flexDirection: 'row',
    gap: 5,
  },
  title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
  },
});
