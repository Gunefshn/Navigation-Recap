import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { FlatList, Text, View } from 'react-native';
import { creditCards } from '@/data/creditCard';
import CreditCardItem from '@/components/CreditCardItem';
import Lines from '@/components/Lines';
import Currency from '@/components/Currency';
import AccountInfo from '@/components/AccountInfo';
import { actions } from '@/data/actions';
import ActionCard from '@/components/ActionCard';

const Index = () => {
  return (
    <SafeAreaView>
      <Header />
      <View className="mt-10">
        <FlatList
          data={creditCards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CreditCardItem creditCard={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Lines />
      <View className="mx-4 mt-10 gap-4 rounded-lg bg-slate-200 p-4">
        <Currency />
        <View className="mt-3 h-1 w-full bg-gray-300"></View>
        <AccountInfo />
      </View>
      <View>
        <Text className="mx-4 mt-8 text-2xl font-semibold">Quick Actions</Text>
        <FlatList
          data={actions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ActionCard action={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
