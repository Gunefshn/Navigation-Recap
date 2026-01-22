import { View, Text } from 'react-native';
import React from 'react';

const Lines = () => {
  return (
    <View className="mt-8 flex-row items-center justify-center gap-4">
      <View className="h-1 w-16 rounded-md bg-indigo-600"></View>
      <View className="h-1 w-8 rounded-md bg-indigo-300"></View>
      <View className="h-1 w-8 rounded-md bg-indigo-300"></View>
    </View>
  );
};

export default Lines;
