import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const colors = ['#EF4444', '#3B82F6', '#22C55E', '#F59E0B'];

export const ReanimatedScreen = () => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0)
  const [isMoved, setIsMoved] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value
  }));

  console.log('translateX ==> ', translateX.value)
  console.log('opacity ==> ', opacity.value)

  const animatedStyleInfinity = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleMove = () => {
    if (isMoved) {
      translateX.value = withSpring(0, { duration: 2000 });
      opacity.value = withTiming(0, {duration: 2000})
    } else {
      translateX.value = withTiming(250, { duration: 2000 });
      opacity.value = withTiming(1, {duration: 2000})
    }

    setIsMoved(prev => !prev);
    setColorIndex(prev => (prev + 1) % colors.length);
  };

  const handleMoveInfinity = () => {
    translateX.value = withRepeat(withTiming(160, { duration: 5000 }), -1, true);

    setIsMoved(prev => !prev);
    setColorIndex(prev => (prev + 1) % colors.length);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { backgroundColor: colors[colorIndex] },
          animatedStyle,
        ]}
      />

      <Animated.View
        style={[
          styles.box,
          { backgroundColor: colors[colorIndex] },
          animatedStyleInfinity,
        ]}
      />

      <Button title="Move box" onPress={handleMove} />
      <Button title="Move box Infinity" onPress={handleMoveInfinity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 32,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
});
