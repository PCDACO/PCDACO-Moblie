import React from 'react';
import { Tabs } from 'expo-router';
import { Home, CalendarDays, Car, CircleUser } from '~/lib/icons/icon';

const MainLayout = () => {
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
