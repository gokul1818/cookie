import React from 'react';
import {View, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  
  return (
    <View>
      <Button title="Go to  d" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

export default LoginScreen;
