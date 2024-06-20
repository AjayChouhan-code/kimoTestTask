// src/navigation/index.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fontFamily, fontWeight, moderateScale } from '../utils/Constants';
import { RouteProp } from '@react-navigation/native';
import SurfingScreen from '../screens/SurfingScreen';

const Tab = createBottomTabNavigator();

const LogoTitle: React.FC = () => {
  return (
    <Image source={require('../assets/images/aloha.png')} style={styles.headerImage} />
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }): BottomTabNavigationOptions => ({
          tabBarActiveTintColor: colors.dark,
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => (
            <ScreenIcon route={route} focused={focused} color={color} size={size} />
          ),
          headerTitle: () => <LogoTitle />,
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Surfing" component={SurfingScreen} />
        <Tab.Screen name="Hula" component={DummyScreen} />
        <Tab.Screen name="Vulcano" component={DummyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

interface ScreenIconProps {
  route: RouteProp<Record<string, object | undefined>, string>;
  focused: boolean;
  color: string;
  size: number;
}

const ScreenIcon: React.FC<ScreenIconProps> = ({ route, color }) => {
  let iconPath;

  if (route.name === 'Home') {
    iconPath = require('../assets/images/home.png');
  } else if (route.name === 'Surfing') {
    iconPath = require('../assets/images/surfing.png');
  } else if (route.name === 'Hula') {
    iconPath = require('../assets/images/nightlife.png');
  } else if (route.name === 'Vulcano') {
    iconPath = require('../assets/images/hill.png');
  }

  return <Image source={iconPath} style={{ width: 18, height: 20, tintColor: color }} />;
};

const DummyScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ALOHA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    resizeMode: 'contain',
    height: moderateScale(30),
  },
  tabBar: {
    height: 60,
    padding: 10,
  },
  tabLabel: {
    fontSize: 11,
    marginBottom: 5,
    fontFamily: fontFamily.semiBold,
  },
  headerTitle: {
    fontFamily: fontFamily.boldItalic,
    fontSize: 20,
    marginVertical: moderateScale(50),
  },
});
