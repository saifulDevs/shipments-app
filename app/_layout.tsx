import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import '../global.css';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// TODO: Uncomment this section once you add the Circular Std font files to assets/fonts/
// See assets/fonts/README.md for instructions

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // TODO: Uncomment when font files are added
  // const [loaded, error] = useFonts({
  //   'CircularStd-Book': require('../assets/fonts/CircularStd-Book.otf'),
  //   'CircularStd-Medium': require('../assets/fonts/CircularStd-Medium.otf'),
  //   'CircularStd-Bold': require('../assets/fonts/CircularStd-Bold.otf'),
  // });

  // useEffect(() => {
  //   if (error) throw error;
  // }, [error]);

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="new-shipment" options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
