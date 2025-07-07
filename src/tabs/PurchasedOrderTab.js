import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  HouseIcon,
  ListIcon,
  ClockIcon,
  ListMagnifyingGlassIcon,
  NotepadIcon,
  UserCheckIcon,
} from 'phosphor-react-native';
import Summary from '../screens/summary/Summary';
import Detail from '../screens/detail/Detail';
import Approver from '../screens/approver/Approver';
import CustomHeader from '../components/CustomHeader';
import { useRoute } from '@react-navigation/native';
import PurchasedOrderAllList from '../screens/purchasedOrder/all/PurchasedOrderAllList';
import PurchasedOrderPendingList from '../screens/purchasedOrder/pending/PurchasedOrderPendingList';

const Tab = createMaterialTopTabNavigator();

const PurchasedOrderTab = () => {
  const { params } = useRoute();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={params.title} />
      <Tab.Navigator
        initialRouteName="Pending"
        screenOptions={({ route }) => ({
          tabBarShowIcon: true,
          tabBarIndicatorStyle: { backgroundColor: '#7177bd' },
          tabBarStyle: {
            backgroundColor: '#fff',
          },
          tabBarLabel: ({ focused }) => {
            let label = '';
            let IconComponent = ClockIcon;

            if (route.name === 'Pending') {
              label = 'Pending';
              IconComponent = ClockIcon;
            } else if (route.name === 'All') {
              label = 'All';
              IconComponent = ListIcon;
            }

            return (
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}
              >
                <IconComponent
                  size={20}
                  color={focused ? '#7177bd' : 'gray'}
                  weight={focused ? 'fill' : 'regular'}
                />
                <Text
                  style={{
                    color: focused ? '#7177bd' : 'gray',
                    fontSize: 14,
                  }}
                >
                  {label}
                </Text>
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Pending" component={PurchasedOrderPendingList} />
        <Tab.Screen name="All" component={PurchasedOrderAllList} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default PurchasedOrderTab;
