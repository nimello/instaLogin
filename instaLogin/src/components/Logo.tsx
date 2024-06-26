import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.pngall.com/wp-content/uploads/15/Black-Instagram-Logo.png' }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: '70%',
    height: 100,
  },
});

export default Logo;