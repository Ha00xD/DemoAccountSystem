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

const Tab = createMaterialTopTabNavigator();

const HistoryTab = () => {
  const { params } = useRoute();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={params.title} />
      <Tab.Navigator
        initialRouteName="Summary"
        screenOptions={({ route }) => ({
          tabBarShowIcon: true,
          tabBarIndicatorStyle: { backgroundColor: '#7177bd' },
          tabBarStyle: {
            backgroundColor: '#fff',
          },
          tabBarLabel: ({ focused }) => {
            let label = '';
            let IconComponent = NotepadIcon;

            if (route.name === 'Summary') {
              label = 'Summary';
              IconComponent = NotepadIcon;
            } else if (route.name === 'Detail') {
              label = 'Detail';
              IconComponent = ListMagnifyingGlassIcon;
            } else if (route.name === 'Approver') {
              label = 'Approver';
              IconComponent = UserCheckIcon;
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
        <Tab.Screen name="Summary" component={Summary} />
        <Tab.Screen name="Detail" component={Detail} />
        <Tab.Screen name="Approver" component={Approver} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HistoryTab;
