import React from 'react';
import { View } from 'react-native';
import BookingList from '~/components/booking-car/booking-list';
import OptionStatus from '~/components/booking-car/option-status';

const BookScreen = () => {
  return (
    <View className="gap-4 ">
      <OptionStatus />
      <BookingList />
    </View>
  );
};

export default BookScreen;
