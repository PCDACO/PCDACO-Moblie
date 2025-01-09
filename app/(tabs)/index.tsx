import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
import { Button } from '~/components/ui/button';

export default function Home() {
  return (
    <>
      <Button>
        <Text>Tab One</Text>
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
