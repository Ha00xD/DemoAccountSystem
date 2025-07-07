import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import SelectDropdown from 'react-native-select-dropdown';
import { useTranslation } from 'react-i18next';

const DashBoard = () => {
  const emojisWithIcons = [
    { title: 'MMK (kyat)', icon: 'emoticon-happy-outline' },
  ];
  const totalData = [
    { value: 90, color: '#7177bd' },
    { value: 50, color: 'lightgrey' },
  ];

  const pendingData = [
    { value: 50, color: '#fffb00' },
    { value: 70, color: 'lightgrey' },
  ];

  const approvedData = [
    { value: 20, color: '#00d109' },
    { value: 70, color: 'lightgrey' },
  ];

  const groupData = [
    { title: 'APOLO Group', price: 1200 },
    { title: 'Max Group of Companies', price: 2000 },
    { title: 'TWJX Group', price: 3000 },
  ];

  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Filter Section Start */}
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 18,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {t('Filter By')}
            </Text>
          </View>
          <SelectDropdown
            data={emojisWithIcons}
            onSelect={(selectedItem, index) => {
              console.log('SFAG?>>>>', selectedItem, index);
            }}
            defaultButtonText="Select Currency"
            buttonTextAfterSelection={selectedItem => selectedItem.title}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View>
                  <View></View>
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {selectedItem ? selectedItem.title : 'Select Currency'}
                    </Text>
                    {isOpened ? (
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../../assets/image/caret-up.png')}
                      />
                    ) : (
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../../assets/image/caret-down.png')}
                      />
                    )}
                  </View>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: '#D2D9DF' }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
        {/* Filter Section End */}
        {/* Chart Section Start */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 15,
          }}
        >
          <View style={styles.chartContainer}>
            <PieChart
              data={totalData}
              donut
              radius={55}
              innerRadius={40}
              textColor="#000"
              showText
              centerLabelComponent={() => (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>OPEN</Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>8</Text>
                </View>
              )}
              rotation={180}
            />
            <Text style={styles.mmk}>MMK 2,024.00</Text>
          </View>
          <View style={styles.chartContainer}>
            <PieChart
              data={pendingData}
              donut
              radius={55}
              innerRadius={40}
              textColor="#000"
              showText
              centerLabelComponent={() => (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                    PENDING
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>4</Text>
                </View>
              )}
              rotation={190}
            />
            <Text style={styles.mmk}>MMK 1,524.00</Text>
          </View>
          <View style={styles.chartContainer}>
            <PieChart
              data={approvedData}
              donut
              radius={55}
              innerRadius={40}
              textColor="#000"
              showText
              centerLabelComponent={() => (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                    APPROVED
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2</Text>
                </View>
              )}
              rotation={180}
            />
            <Text style={styles.mmk}>MMK 1,024.00</Text>
          </View>
        </View>
        {/* Chart Section End */}
        {/* Vendor Group Start */}
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <View>
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
              PO Open by Vendor Group
            </Text>
          </View>
          <View style={{ gap: 5, marginVertical: 15 }}>
            {groupData.map((el, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                key={index} // Use index instead of Math.random()
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 4,
                      backgroundColor: 'black',
                      marginRight: 8,
                    }}
                  />
                  <Text
                    style={{ fontSize: 14, fontWeight: '400', color: 'black' }}
                  >
                    {el.title}
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 14, fontWeight: '400', color: 'black' }}
                >
                  {el.price}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Vendor Group End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  mmk: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  dropdownButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
    width: 130,
    justifyContent: 'flex-end',
    gap: 15,
  },
  dropdownButtonTxtStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
