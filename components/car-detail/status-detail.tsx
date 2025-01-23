import React from 'react';
import { Text, View } from 'react-native';

import StatusBagde from '../status-badge';

const StatusDetail = () => {
  return (
    <View className=" bg-blue-50">
      <View className=" flex-row justify-between">
        <Text className="text-xl font-semibold">Trạng Thái</Text>
        <StatusBagde text="Đang hoạt động" option="success" />
      </View>
      <View className=" flex-row justify-between">
        <View className="flex-1 items-center justify-center">
          <Text className="text-md text-muted-foreground">Tổng lượt đặt</Text>
          <Text className="text-2xl font-semibold">24</Text>
        </View>
        <View className="flex-1 items-center justify-center">
          <Text className="text-md text-muted-foreground">Lượt đánh giá</Text>
          <Text className="text-2xl font-semibold">4.8</Text>
        </View>
      </View>
    </View>
  );
};

export default StatusDetail;
