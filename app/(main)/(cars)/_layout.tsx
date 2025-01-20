import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { ChevronLeft } from '~/lib/icons/icon';

const CarsLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Danh sách xe',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => {
            return (
              <TouchableOpacity className="p-2" onPress={() => router.back()}>
                <ChevronLeft className="text-primary" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen name="details/[id]" />
    </Stack>
  );
};

export default CarsLayout;
