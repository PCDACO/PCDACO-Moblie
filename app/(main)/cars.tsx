import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';

import CarCard from '~/components/car-card';
import { Plus } from '~/lib/icons/icon';

const CarsScreen = () => {
  const cars = [
    {
      image: 'https://via.placeholder.com/80',
      totalImages: 5,
      name: 'Honda Civic 2024',
      fuelType: 'Xăng',
      price: 1000000,
      status: 'Đang cho thuê',
      rating: 4.9,
      reviews: 18,
      booking: 10,
      statusBooking: 'Hiện đang cho thuê ',
    },
    {
      image: 'https://via.placeholder.com/80',
      totalImages: 5,
      name: 'BMW X5',
      fuelType: 'Xăng',
      price: 1000000,
      status: 'Đang khả dụng',
      rating: 4.8,
      reviews: 18,
      booking: 10,
      statusBooking: 'Lần cho thuê gần nhất: 2 tháng trước',
    },
    {
      image: 'https://via.placeholder.com/80',
      totalImages: 5,
      name: 'BMW X5',
      fuelType: 'Xăng',
      price: 1000000,
      status: 'Đang khả dụng',
      rating: 4.8,
      reviews: 18,
      booking: 10,
      statusBooking: 'Lần cho thuê gần nhất: 2 tháng trước',
    },
    {
      image: 'https://via.placeholder.com/80',
      totalImages: 5,
      name: 'BMW X5',
      fuelType: 'Xăng',
      price: 1000000,
      status: 'Đang khả dụng',
      rating: 4.8,
      reviews: 18,
      booking: 10,
      statusBooking: 'Lần cho thuê gần nhất: 2 tháng trước',
    },
  ];

  return (
    <View>
      <ScrollView className="p-4 ">
        <View className="gap-4 mb-10">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </View>
      </ScrollView>

      

      <TouchableOpacity className="absolute p-4 bg-blue-500 rounded-full bottom-4 right-4">
        <Plus className="text-background" size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default CarsScreen;
