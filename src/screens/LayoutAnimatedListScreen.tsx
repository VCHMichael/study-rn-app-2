import {
  Platform,
  UIManager,
  LayoutAnimation,
  Pressable,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { useState } from 'react';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const initialItems = Array.from({ length: 10 }, (_, index) => ({
  id: String(index + 1),
  title: `Item ${index + 1}`,
}));

export const LayoutAnimatedListScreen = () => {
  const [items, setItems] = useState(initialItems);

  const handleRemove = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut,);
    setItems(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {items.map(item => (
        <Pressable
          key={item.id}
          onPress={() => handleRemove(item.id)}
          style={styles.item}
        >
          <Text>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
});
