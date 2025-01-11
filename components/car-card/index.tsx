import React from 'react';
import { View } from 'react-native';

import CarFooter from '~/components/car-card/car-footer';
import CarInfo from '~/components/car-card/car-header';
import CarImage from '~/components/car-card/car-image';

interface CarCardProps {
  car: {
    image: string;
    totalImages: number;
    name: string;
    fuelType: string;
    price: number;
    status: string;
    rating: number;
    reviews: number;
    booking: number;
    statusBooking: string;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <View className="gap-4 rounded-xl bg-white px-4 py-4 shadow-md">
      <CarInfo name={car.name} statusBooking={car.statusBooking} />
      <CarImage image={car.image} totalImages={car.totalImages} />
      <CarFooter
        status={car.status}
        rating={car.rating}
        booking={car.booking}
        price={car.price}
        fuelType={car.fuelType}
      />
    </View>
  );
};

export default CarCard;
