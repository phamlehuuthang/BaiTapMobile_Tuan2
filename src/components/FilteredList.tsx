import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';

type UserItem = {
  id: number;
  name: string;
  email: string;
};

function filterUsersByName<T extends { name: string }>(arr: T[], search: string): T[] {
  return arr.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()));
}

export default function FilteredList() {
  const [allUsers, setAllUsers] = useState<UserItem[]>([]);
  const [searchKey, setSearchKey] = useState('');
  const [filtered, setFiltered] = useState<UserItem[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        setAllUsers(json as UserItem[]);
        setFiltered(json as UserItem[]);
      });
  }, []);

  return (
    <View style={{ flex: 1, gap: 8 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
        --- BÀI 13: LỌC USER THEO TÊN ---
      </Text>
      <View style={{ flexDirection: 'row', gap: 6 }}>
        <TextInput
          placeholder="Nhập tên user..."
          value={searchKey}
          onChangeText={setSearchKey}
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'purple',
            padding: 6,
          }}
        />
        <Pressable
          onPress={() => setFiltered(filterUsersByName(allUsers, searchKey))}
          style={{
            backgroundColor: 'plum',
            borderWidth: 2,
            borderColor: 'purple',
            paddingHorizontal: 14,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Lọc ngay</Text>
        </Pressable>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'lavender',
              borderWidth: 1,
              borderColor: 'purple',
              padding: 6,
              marginBottom: 5,
            }}
          >
            <Text>
              * {item.name} ({item.email})
            </Text>
          </View>
        )}
      />
    </View>
  );
}
