import { View, Text, FlatList } from 'react-native';
import React from 'react';
import BookingItem from '~/components/booking-car/booking-item';

const BookingList = () => {
  return (
    <View>
      <FlatList
        data={[]}
        renderItem={({ item }) => <BookingItem />}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BookingList;
