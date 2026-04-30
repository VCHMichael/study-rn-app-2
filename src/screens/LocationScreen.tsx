import { useCallback, useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

type Coordinates = {
  latitude: number;
  longitude: number;
};

export const LocationScreen = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  const requestLocationPermission = useCallback(async () => {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return result === PermissionsAndroid.RESULTS.GRANTED;
  }, []);

  const getCurrentLocation = useCallback(async () => {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      setError('Permission denied');
    }

    Geolocation.getCurrentPosition(position => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [requestLocationPermission]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Location</Text>

      {coordinates ? (
        <>
          <Text>Latitude: {coordinates.latitude}</Text>
          <Text>Longitude: {coordinates.longitude}</Text>
        </>
      ) : (
        <Text>Loading coordinates...</Text>
      )}

      {error ? <Text style={styles.error}>{error}</Text> : null}
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
  error: {
    marginTop: 16,
    color: 'red',
  },
});
