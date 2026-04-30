import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

type AccelerometerData = {
  x: number;
  y: number;
  z: number;
};

export const SensorScreen = () => {
  const [data, setData] = useState<AccelerometerData>({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 300);

    const subscription = accelerometer.subscribe(sensorData => {
      setData({
        x: sensorData.x,
        y: sensorData.y,
        z: sensorData.z,
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accelerometer</Text>

      <Text>X: {data.x.toFixed(4)}</Text>
      <Text>Y: {data.y.toFixed(4)}</Text>
      <Text>Z: {data.z.toFixed(4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '600',
  },
});
