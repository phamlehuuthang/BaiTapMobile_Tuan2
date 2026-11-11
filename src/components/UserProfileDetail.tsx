import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

type GeoInfo = {
  lat: string;
  lng: string;
};

type AddressInfo = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInfo;
};

type CompanyInfo = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserDetail = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInfo;
  phone: string;
  website: string;
  company: CompanyInfo;
};

export default function UserProfileDetail() {
  const [info, setInfo] = useState<UserDetail | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((json) => setInfo(json as UserDetail));
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'wheat',
        borderWidth: 2,
        borderColor: 'brown',
        padding: 12,
        gap: 6,
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'darkred' }}>
        --- BÀI 10: CHI TIẾT NGƯỜI DÙNG ---
      </Text>
      <Text>+ Họ tên: {info?.name}</Text>
      <Text>+ Email: {info?.email}</Text>
      <Text>+ Thành phố: {info?.address.city}</Text>
      <Text>+ Điện thoại: {info?.phone}</Text>
    </View>
  );
}
