import { View, Text, Image } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
  return (
    <View className="mx-4 flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <MaterialCommunityIcons name="finance" size={24} color="indigo" />
        <Text className="text-xl font-bold text-indigo-900">Fastfin</Text>
      </View>
      <View className="flex-row gap-3">
        <View>
          <View className="left-3 top-3 h-5 w-5 items-center justify-center rounded-full bg-red-500">
            <Text className="font-semibold text-white">1</Text>
          </View>
          <FontAwesome name="bell" size={24} color="indigo" />
        </View>
        <Image source={require('@/assets/avatar.png')} className="h-12 w-12 rounded-full" />
      </View>
    </View>
  );
};

export default Header;
