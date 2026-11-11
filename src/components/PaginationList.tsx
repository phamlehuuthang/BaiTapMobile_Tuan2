import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

type Product = {
  id: number;
  title: string;
};

type PagedResult<T> = {
  data: T[];
  total: number;
  page: number;
};

async function getProductPage(pageNumber: number): Promise<PagedResult<Product>> {
  const limit = 5;
  const skip = (pageNumber - 1) * limit;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const json = await res.json();
  return {
    data: json.products as Product[],
    total: json.total,
    page: pageNumber,
  };
}

export default function PaginationList() {
  const [result, setResult] = useState<PagedResult<Product> | null>(null);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    getProductPage(curPage).then((res) => setResult(res));
  }, [curPage]);

  const maxPage = result ? Math.ceil(result.total / 5) : 1;

  return (
    <View style={{ gap: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
        --- BÀI 14: PHÂN TRANG DỮ LIỆU ---
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'khaki',
          padding: 8,
          borderWidth: 1,
          borderColor: 'olive',
        }}
      >
        <Pressable
          onPress={() => setCurPage(curPage > 1 ? curPage - 1 : 1)}
          style={{ backgroundColor: 'white', padding: 6, borderWidth: 1 }}
        >
          <Text>{'< Trang trước'}</Text>
        </Pressable>

        <Text style={{ fontWeight: 'bold' }}>
          Trang {curPage} / {maxPage}
        </Text>

        <Pressable
          onPress={() => setCurPage(curPage < maxPage ? curPage + 1 : curPage)}
          style={{ backgroundColor: 'white', padding: 6, borderWidth: 1 }}
        >
          <Text>{'Trang sau >'}</Text>
        </Pressable>
      </View>

      <FlatList
        data={result?.data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Text
            style={{
              backgroundColor: 'wheat',
              borderWidth: 1,
              borderColor: 'brown',
              padding: 8,
              marginBottom: 4,
            }}
          >
            SP #{item.id}: {item.title}
          </Text>
        )}
      />
    </View>
  );
}
