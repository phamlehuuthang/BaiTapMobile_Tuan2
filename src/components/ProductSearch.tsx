import React, { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';

type ProductItem = {
  id: number;
  title: string;
  price: number;
};

type SearchResult = {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
};

export default function ProductSearch() {
  const [textSearch, setTextSearch] = useState('');
  const [listSP, setListSP] = useState<ProductItem[]>([]);

  const handleSearch = async (q: string, limit: number) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${q}&limit=${limit}`
      );
      if (!res.ok) {
        throw new Error('Lỗi fetch');
      }
      const json = await res.json();
      setListSP((json as SearchResult).products);
    } catch {
      alert('Không gọi được API tìm sản phẩm');
    }
  };

  return (
    <View style={{ flex: 1, gap: 8 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
        --- BÀI 11: TÌM KIẾM SẢN PHẨM ---
      </Text>
      <View style={{ flexDirection: 'row', gap: 6 }}>
        <TextInput
          placeholder="Gõ tên sản phẩm..."
          value={textSearch}
          onChangeText={setTextSearch}
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'green',
            padding: 6,
          }}
        />
        <Pressable
          onPress={() => handleSearch(textSearch, 5)}
          style={{
            backgroundColor: 'lightgreen',
            borderWidth: 2,
            borderColor: 'green',
            paddingHorizontal: 12,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Tìm</Text>
        </Pressable>
      </View>

      <FlatList
        data={listSP}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#e6ffe6',
              borderWidth: 1,
              borderColor: 'green',
              padding: 8,
              marginBottom: 6,
            }}
          >
            <Text>Tên SP: {item.title}</Text>
            <Text style={{ color: 'darkgreen' }}>Giá bán: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
