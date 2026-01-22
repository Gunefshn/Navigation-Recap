import '../global.css';

import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Wallet',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="wallet" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <Feather name="pie-chart" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          title: 'Exchange',
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View className={styles.exchangeStyle}>
              <FontAwesome name="exchange" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="investing"
        options={{
          title: 'Investing',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="analytics" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="grid" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}

const styles = {
  exchangeStyle: 'bottom-4 h-16 w-16 items-center justify-center bg-indigo-700 rounded-full shadow',
};
