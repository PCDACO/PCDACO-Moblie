// import { useLocalSearchParams } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

import ContentDetail from '~/components/car-detail/content-detail';
import HeaderDetail from '~/components/car-detail/header-detail';
import SwiperImage from '~/components/swiper-image';

const CarDetailScreen = () => {
  const { id, name } = useLocalSearchParams();

  console.log('Car detail screen', id, name);

  return (
    <ScrollView>
      <View className="flex-1 bg-muted">
        <SwiperImage />
        <View className="gap-2 ">
          <HeaderDetail
            name="Car Name"
            price={1000000}
            location="Sedan 2025s"
            city="Thành phố Hồ Chí Minh"
          />

          <ContentDetail />
        </View>
      </View>
    </ScrollView>
  );
};

export default CarDetailScreen;
