import { FlatList } from 'react-native';
import channels from '@/data/channels';
import ChannelListItem from '@/components/ChannelListItem';

export default function ChannelListScreen() {
  return (
    <FlatList
      className=" bg-white"
      data={channels}
      renderItem={({ item }) => <ChannelListItem channel={item} />}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
}
