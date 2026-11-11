import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type ApiError = {
  statusCode?: number;
  message: string;
};

export default function ErrorHandling() {
  const [list, setList] = useState<Todo[]>([]);
  const [errMsg, setErrMsg] = useState<string>('');

  useEffect(() => {
    const load = async () => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todosSSS');

        if (!resp.ok) {
          const customErr: ApiError = {
            statusCode: resp.status,
            message: 'Lỗi fetch, ko tìm thấy đường dẫn',
          };
          // ddeer nems loi vao catch
          throw customErr;
        }

        const data = await resp.json();
        setList(data as Todo[]);
      } catch (error) {
        let errorMss = 'lỗi ko xác định';
        // co thuoc tinh mesage trong err ko
        if (typeof error === 'object' && error != null && 'message' in error) {
          const err = error as ApiError;
          errorMss = err.message;
        } else if (typeof error === 'string') {
          errorMss = error;
        }
        setErrMsg(errorMss);
        alert(`Lỗi gọi API: ${errorMss}`);
        // Alert.alert("Lỗi gọi API:", errorMss)
      }
    };

    load();
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#ffdddd',
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
      }}
    >
      <Text style={{ fontWeight: 'bold', color: 'darkred' }}>
        --- BÀI 12: KIỂM TRA BẮT LỖI API ---
      </Text>
      {errMsg ? <Text>Trạng thái lỗi: {errMsg}</Text> : null}
      {list.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}
