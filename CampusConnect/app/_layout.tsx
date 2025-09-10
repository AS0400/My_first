import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Home screen */}
        <Stack.Screen name="index" options={{ title: 'CampusConnect' }} />
        {/* Services list and detail */}
        <Stack.Screen name="services/index" options={{ title: 'Services' }} />
        <Stack.Screen name="services/[id]" options={{ title: 'Service Details' }} />
        {/* Announcements */}
        <Stack.Screen name="announcements" options={{ title: 'Announcements' }} />
        {/* Not found */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
