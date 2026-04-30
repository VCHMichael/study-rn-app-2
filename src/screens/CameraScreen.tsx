import { useCameraPermission, useCameraDevice, Camera } from 'react-native-vision-camera';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CameraScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back')

  //Async Storage
  // global store + persist
  const [isPermissionRequested, setIsPermissionRequested] = useState(false);

  useEffect(() => {
    const requestCameraPermission = async () => {
      await requestPermission();
      setIsPermissionRequested(true);
    };

    requestCameraPermission();
  }, [requestPermission]);

  if (!isPermissionRequested) {
    <View style={styles.center}>
      <Text>Camera permission requested...</Text>
    </View>;
  }

  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text>Camera permission denied</Text>
      </View>
    );
  }

  if(!device) {
    <View style={styles.center}>
      <Text>Camera not found</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <Camera device={device} isActive />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
