import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContext from './src/constants/AppContext';
import './i18config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabNavigator from './src/tabs/AppTabNavigator';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import ChangeLanguageScreen from './src/screens/settings/changelanguages/ChangeLanguageScreen';
import HistoryTab from './src/tabs/HistoryTab';
import Preview from './src/screens/preview/Preview';
import PurchasedOrderTab from './src/tabs/PurchasedOrderTab';

const Stack = createNativeStackNavigator();
const App = () => {
  const value = {};

  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <AppContext.Provider value={value}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <NavigationContainer>
          {/* <MainStackNavigator /> */}
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              animationEnabled: false,
            }}
          >
            <Stack.Screen
              options={() => ({
                header: () => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 20,
                      borderBottomWidth: 0.2,
                      justifyContent: 'space-between',
                    }}
                  >
                    <TouchableOpacity>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require('./src/assets/image/caret-left.png')}
                      />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                      LOGO
                    </Text>
                    <TouchableOpacity>
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require('./src/assets/image/refresh.png')}
                      />
                    </TouchableOpacity>
                  </View>
                ),
              })}
              name="App"
              component={AppTabNavigator}
            />
            <Stack.Screen
              options={() => ({
                headerShown: false,
              })}
              name="ChangeLanguageScreen"
              component={ChangeLanguageScreen}
            />
            <Stack.Screen
              options={() => ({
                headerShown: false,
              })}
              name="HistoryTab"
              component={HistoryTab}
            />
            <Stack.Screen
              options={() => ({
                headerShown: false,
              })}
              name="Preview"
              component={Preview}
            />
            <Stack.Screen
              options={() => ({
                headerShown: false,
              })}
              name="PurchasedOrder"
              component={PurchasedOrderTab}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
