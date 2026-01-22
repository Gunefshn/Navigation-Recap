import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { CreditCard } from '@/types/creditCard';

type Props = {
  creditCard: CreditCard;
};
const CreditCardItem = ({ creditCard }: Props) => {
  return (
    <View className="mt-6 px-5">
      <ImageBackground source={require('@/assets/creditCard.png')} className="h-48 w-72 ">
        <Text className="m-5 text-3xl font-bold text-white">VISA</Text>
        <Text className="ml-6 mt-12 text-white">
          {creditCard.cardNumber.replace(/(.{4})(.{4})(.{4})/, '**** **** ****')}
        </Text>
        <View className="ml-6 mt-3 flex-row gap-3">
          <View className="text-white">
            <Text className="text-white">Card Holder Name</Text>
            <Text className="text-white">{creditCard.fullname}</Text>
          </View>
          <View>
            <Text className="text-white">Expire Date</Text>
            <Text className="text-white">{creditCard.expireDate}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CreditCardItem;
