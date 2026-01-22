import { View, Text } from 'react-native';
import React from 'react';
import { Action } from '@/types/action';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  action: Action;
};
const ActionCard = ({ action }: Props) => {
  return (
    <View className="ml-4 mt-6 items-center gap-2 rounded-lg bg-slate-200 p-3">
      <MaterialIcons name={action.icon} size={28} color="indigo" />
      <Text className="text-lg font-semibold">{action.title}</Text>
    </View>
  );
};

export default ActionCard;
