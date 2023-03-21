import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Libs
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Styles
import BasicStyles from '../styles';

const HomeComponent = props => {
  const {item, navigation} = props;
  const {name, email, phone, company} = item;

  const navigateAlbums = () => {
    navigation.navigate('Albums', {info: item});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateAlbums}>
      <Text
        style={[
          BasicStyles.textLarge,
          BasicStyles.textBoldMidLight,
          BasicStyles.blackColor,
        ]}>
        {name}
      </Text>
      <Text
        style={[
          BasicStyles.text,
          BasicStyles.textBoldLight,
          BasicStyles.midGray,
          {marginTop: wp(0.5)},
        ]}>
        {email}
      </Text>
      <Text
        style={[
          BasicStyles.text,
          BasicStyles.textBoldLight,
          BasicStyles.midGray,
        ]}>
        {phone}
      </Text>

      <View
        style={{
          height: 0.5,
          flex: 1,
          backgroundColor: '#777',
          marginTop: wp(3.5),
        }}
      />

      <View
        style={[
          BasicStyles.directionRow,
          BasicStyles.alignCenter,
          {marginTop: wp(1)},
        ]}>
        <Text
          style={[
            BasicStyles.text,
            BasicStyles.textBoldLight,
            BasicStyles.midGray,
            BasicStyles.flexOne,
            {marginTop: wp(0.5)},
          ]}>
          {company?.name}
        </Text>
        {/* <Text
          style={[
            BasicStyles.text,
            BasicStyles.textBoldLight,
            BasicStyles.midGray,
          ]}>
          {no_albums}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 0.5,
    backgroundColor: '#fff',
    padding: wp(2.5),
    elevation: 4,
    borderRadius: wp(1),
  },
});
