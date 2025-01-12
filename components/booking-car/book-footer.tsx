import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const BookFooter = () => {
  return (
    <TouchableOpacity className="rounded-md bg-blue-500 py-3">
      <Text className="text-center text-base font-semibold text-white">Xem chi tiết</Text>
    </TouchableOpacity>
  );
};

export default BookFooter;
