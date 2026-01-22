import { View, Text, Image } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Currency = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <Image source={require('@/assets/flag.jpg')} className="h-12 w-12 rounded-full" />
        <Text>USD</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </View>
      <Text className="text-2zl font-bold text-green-600">15402.01</Text>
    </View>
  );
};

export default Currency;
