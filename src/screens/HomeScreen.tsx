import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { usePosts } from '../hooks/usePosts.ts';
import { SIZE } from '../constants/style.ts';
import { ProductCard } from '../components';

export const HomeScreen = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={posts}
      renderItem={({ item }) => (
        <ProductCard
          title={item.title}
          handleButtonPress={() => {}}
          price={item.userId}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  contentContainer: {
    gap: SIZE.l,
  },
});
