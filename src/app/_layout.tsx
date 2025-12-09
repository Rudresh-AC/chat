import { Stack } from 'expo-router';
import '../../global.css';

export default function RootLayout() {
  const isAutenticated = true;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isAutenticated}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={isAutenticated}>
        <Stack.Screen name="(drawer)" />
      </Stack.Protected>
    </Stack>
  );
}
