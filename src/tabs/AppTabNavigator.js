import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HouseIcon, ListIcon, ClockIcon } from 'phosphor-react-native';
import Content from '../components/Content';
import MenuScreen from '../screens/menu/MenuScreen';
import DashBoard from '../screens/dashboard/DashBoard';
import History from '../screens/history/History';

const Tab = createMaterialTopTabNavigator();

const AppTabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content />
      <View style={{ flex: 2 }}>
        <Tab.Navigator
          initialRouteName="DashBoard"
          screenOptions={({ route }) => ({
            tabBarShowIcon: true,
            tabBarIndicatorStyle: { backgroundColor: '#7177bd' },
            tabBarStyle: {
              backgroundColor: '#fff',
            },
            tabBarLabel: ({ focused }) => {
              let label = '';
              let IconComponent = HouseIcon;

              if (route.name === 'DashBoard') {
                label = 'Dashboard';
                IconComponent = HouseIcon;
              } else if (route.name === 'Menu') {
                label = 'Menu';
                IconComponent = ListIcon;
              } else if (route.name === 'History') {
                label = 'History';
                IconComponent = ClockIcon;
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
          <Tab.Screen name="Menu" component={MenuScreen} />
          <Tab.Screen name="DashBoard" component={DashBoard} />
          <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default AppTabNavigator;
