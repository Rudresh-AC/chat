import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import channels from '@/data/channels';

export default function ChannelScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const channel = channels.find((c) => c.id === id);

  if (!channel) {
    return (
      <View>
        <Text>Channel not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Stack.Screen options={{ title: channel.name }} />
      <Text className="text-2xl">Chanel screen: {channel.name}</Text>
    </View>
  );
}
