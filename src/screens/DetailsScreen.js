import React from 'react';
import {View, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default DetailsScreen;
