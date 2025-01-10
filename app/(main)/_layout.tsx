import React from 'react';
import { Tabs, useRouter } from 'expo-router';
import { Home, CalendarDays, Car, CircleUser, ChevronLeft } from '~/lib/icons/icon';
import { TouchableOpacity } from 'react-native';

const MainLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Home className={focused ? `text-primary` : 'text-muted-foreground'} />
          ),
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          tabBarIcon: ({ focused }) => (
            <CalendarDays className={focused ? `text-primary` : 'text-muted-foreground'} />
          ),
          tabBarLabel: 'Yêu cầu đặt xe',
        }}
      />
      <Tabs.Screen
        name="cars"
        options={{
          tabBarIcon: ({ focused }) => (
            <Car className={focused ? `text-primary` : 'text-muted-foreground'} />
          ),
          tabBarLabel: 'Danh sách xe',
          headerTitle: 'Danh sách xe',
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <TouchableOpacity className="p-2" onPress={() => router.back()}>
                <ChevronLeft className="text-primary" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <CircleUser className={focused ? `text-primary` : 'text-muted-foreground'} />
          ),
          tabBarLabel: 'Hồ sơ cá nhân',
          headerTitle: 'Thông tin cá nhân',
          headerTitleAlign: 'center',
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
