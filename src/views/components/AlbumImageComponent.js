import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AlbumImageComponent = props => {
  const handleEnlargeImage = () => {
    props.enlargeImage(props.item);
  };

  return (
    <TouchableOpacity onPress={handleEnlargeImage} style={styles.mainContainer}>
      <Image
        source={{uri: props.item.url}}
        resizeMode="cover"
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

export default AlbumImageComponent;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(0.4),
    alignItems: 'center',
  },

  imageStyle: {
    width: wp(34),
    aspectRatio: 1 / 1,
  },
  titleStyle: {
    color: '#000',
    fontSize: wp(3.2),
    fontWeight: '500',
    marginTop: wp(0.5),
  },
});
