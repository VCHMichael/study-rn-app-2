import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { ProductCard } from '../components';
import { PRODUCTS_DATA } from '../store/products.ts';
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../constants/routes.ts';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../navigation/types.ts';

export const ProductScreen = () => {
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Products (ProductScreen)</Text>

      {PRODUCTS_DATA.map(card => {
        const handleButtonPress = () => {
          navigation.navigate(ROUTES.ProductsStack, {
            screen: ROUTES.ProductDetailsScreen,
            params: {
              productName: card.title,
              productId: Number(card.id),
            },
          });
        };
        return (
          <ProductCard
            key={card.id}
            title={card.title}
            price={card.price}
            imageUrl={card.imageUrl}
            handleButtonPress={handleButtonPress}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
});
