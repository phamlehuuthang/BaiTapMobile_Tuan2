import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function NewsFeed() {
  const [listTodo, setListTodo] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((json) => setListTodo(json as TodoItem[]));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listTodo}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'lightcyan',
              borderWidth: 1,
              borderColor: 'teal',
              padding: 6,
              marginBottom: 6,
            }}
          >
            <Text>
              [Mã: {item.id}] {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
