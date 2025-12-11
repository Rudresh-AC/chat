import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignInScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl">Sign in screen</Text>

      <Link href="/sign-up">Create account</Link>
    </View>
  );
}
