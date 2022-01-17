import React from 'react';
import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native';
import { Item } from '../../components/atoms';
import { services } from '../../mockup';

const Services: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços</Text>
      <FlatList
        data={services}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
        removeClippedSubviews={false}
      />
    </SafeAreaView>
  );
};

export default Services;
