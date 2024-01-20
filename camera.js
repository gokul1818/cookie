import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  const onTakePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={{ marginBottom: 20, color: 'white' }}>Your Camera Component</Text>
          <TouchableOpacity onPress={onTakePicture}>
            <Text style={{ fontSize: 20, marginBottom: 50, color: 'white' }}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
};

export default CameraScreen;
