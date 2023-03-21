import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AlbumComponent = props => {
  const handleScreen = () => {
    props.nav.navigate('AlbumDetails', {
      albumData: props.item,
      userInfo: props.userInfo,
    });
  };

  return (
    <TouchableOpacity onPress={handleScreen} style={styles.mainContainer}>
      {/* <Image
        source={{uri: props.item.albumImages[0]}}
        resizeMode="cover"
        style={styles.imageStyle}
      /> */}

      <Text style={styles.titleStyle}>{props.item.title}</Text>
      {/* <Text style={[styles.titleStyle, {color: '#999'}]}>
        {props.item.albumCount}
      </Text> */}
    </TouchableOpacity>
  );
};

export default AlbumComponent;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(1),
  },

  imageStyle: {
    width: wp(44),
    aspectRatio: 1 / 1,
    borderRadius: wp(1),
  },
  titleStyle: {
    width: wp(40),
    color: '#000',
    fontSize: wp(3),
    fontWeight: '500',
    marginTop: wp(0.5),
    textTransform: 'capitalize',
  },
});
