import NewsFeed from '@/components/NewsFeed';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Bai9() {
  return (
    <View style={{ flex: 1, padding: 12, backgroundColor: '#fffde7' }}>
      <Link
        href="/"
        style={{
          backgroundColor: 'orange',
          padding: 8,
          borderWidth: 2,
          borderColor: 'brown',
          marginBottom: 10,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {'<< Quay lại Menu'}
      </Link>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        --- BÀI 9: DANH SÁCH TODOS ---
      </Text>
      <NewsFeed />
    </View>
  );
}
