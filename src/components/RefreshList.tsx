import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

type TodoRow = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function RefreshList() {
  const [rows, setRows] = useState<TodoRow[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    setRows(json as TodoRow[]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchTodos();
    setIsRefreshing(false);
  };

  return (
    <View style={{ flex: 1, gap: 8 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
        --- BÀI 15: KÉO XUỐNG ĐỂ LÀM MỚI ---
      </Text>
      <FlatList
        data={rows}
        keyExtractor={(item) => String(item.id)}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <Text
            style={{
              backgroundColor: 'gainsboro',
              borderWidth: 1,
              borderColor: 'dimgray',
              padding: 6,
              marginBottom: 4,
            }}
          >
            ({item.id}) {item.title}
          </Text>
        )}
      />
    </View>
  );
}
