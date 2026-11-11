import React from 'react';
import { Link } from 'expo-router';
import { View } from 'react-native';
import ProductSearch from '@/components/ProductSearch';

export default function Bai11() {
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
      <ProductSearch />
    </View>
  );
}
