import { View, Text } from 'react-native';
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
            <Home className={focused ? `text-primary` : 'text-foreground'} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          tabBarIcon: ({ focused }) => (
            <CalendarDays className={focused ? `text-primary` : 'text-foreground'} />
          ),
          tabBarLabel: 'Book',
        }}
      />
      <Tabs.Screen
        name="cars"
        options={{
          tabBarIcon: ({ focused }) => (
            <Car className={focused ? `text-primary` : 'text-foreground'} />
          ),
          tabBarLabel: 'Cars',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <CircleUser className={focused ? `text-primary` : 'text-foreground'} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
