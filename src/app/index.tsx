import React from 'react';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.heading}>=== MENU BÀI TẬP TUẦN 2 ===</Text>
      <View style={styles.grid}>
        <Link href="/bai9" style={styles.btn}>[ Bài 9: NewsFeed ]</Link>
        <Link href="/bai10" style={styles.btn}>[ Bài 10: User Info ]</Link>
        <Link href="/bai11" style={styles.btn}>[ Bài 11: Tìm SP ]</Link>
        <Link href="/bai12" style={styles.btn}>[ Bài 12: Bắt lỗi API ]</Link>
        <Link href="/bai13" style={styles.btn}>[ Bài 13: Lọc tên ]</Link>
        <Link href="/bai14" style={styles.btn}>[ Bài 14: Phân trang ]</Link>
        <Link href="/bai15" style={styles.btn}>[ Bài 15: Pull Refresh ]</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: '#eef6ff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: 'yellow',
    padding: 8,
    borderWidth: 2,
    borderColor: 'blue',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  btn: {
    backgroundColor: 'lightblue',
    borderColor: 'navy',
    borderWidth: 2,
    padding: 12,
    width: '47%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
