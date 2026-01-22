import { View, Text } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AccountInfo = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View>
        <Text className="text-gray-600">IBAN</Text>
        <Text className="font-semibold">LT12 **** **** **** 1010</Text>
      </View>
      <View className="h-8 w-8 rounded-full border-2 border-gray-500">
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default AccountInfo;
