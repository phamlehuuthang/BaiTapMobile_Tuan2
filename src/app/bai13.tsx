import React from 'react';
import { Link } from 'expo-router';
import { View } from 'react-native';
import FilteredList from '@/components/FilteredList';

export default function Bai13() {
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
      <FilteredList />
    </View>
  );
}
