import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Badge } from '~/components/ui/badge';

const OptionStatus = () => {
  const [chooseOption, setchooseOption] = useState<number>(0);

  const options = ['Tất cả', 'Đang chờ', 'Đã xác nhận', 'Đã hủy', 'Đã hoàn thành'];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row gap-2 p-4">
        {options.map((item, index) => (
          <Badge key={index} variant={index === 0 ? 'default' : 'secondary'}>
            <Text className="text-sm font-semibold text-background">{item}</Text>
          </Badge>
        ))}
      </View>
    </ScrollView>
  );
};

export default OptionStatus;
