import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AlbumDetailComponent = props => {
  const handleChangeAlbum = () => {
    props.changeAlbum(props.item.id, props.item.title);
  };

  return (
    <TouchableOpacity onPress={handleChangeAlbum} style={styles.mainContainer}>
      <Image
        source={{uri: props.item.url}}
        resizeMode="cover"
        style={styles.imageStyle}
      />

      <Text style={styles.titleStyle}>{props.item.title}</Text>
      <Text style={[styles.titleStyle, {color: '#999'}]}>
        {props.item.albumCount}
      </Text>
    </TouchableOpacity>
  );
};

export default AlbumDetailComponent;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(1),
    alignItems: 'center',
  },

  imageStyle: {
    width: wp(20),
    aspectRatio: 1 / 1,
    borderRadius: wp(1),
  },
  titleStyle: {
    color: '#000',
    fontSize: wp(3.2),
    fontWeight: '500',
    marginTop: wp(0.5),
    textTransform: 'capitalize',
  },
});
