import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { ProductsStackParamList } from '../navigation/types.ts';

export const ProductDetailsScreen = () => {
  const routes =
    useRoute<RouteProp<ProductsStackParamList, 'ProductDetailsScreen'>>();

  const id = routes.params.productId ?? '';
  const name = routes.params.productName ?? '';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <Text style={styles.text}>ID: {id} </Text>
      <Text style={styles.text}>Name: {name}</Text>
    </View>
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
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
