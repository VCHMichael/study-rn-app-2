import React, { memo, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

type ListItem = {
  id: string;
  title: string;
};

const data: ListItem[] = Array.from({ length: 50 }, (_, index) => ({
  id: String(index + 1),
  title: `Item ${index + 1}`,
}));

type ItemProps = {
  item: ListItem;
};

const MemoItem = memo(({ item }: ItemProps) => {
  console.log('Render item:', item.id);

  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
});

export const MemoListScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title={`Counter: ${counter}`}
        onPress={() => setCounter(counter + 1)}
      />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MemoItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
});
