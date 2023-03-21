/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Icons
import ic_back from 'assets/icons/ic_back.png';

// Images
import BasicStyles from 'views/styles';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleBack = () => {
    this.props.nav.pop();
  };

  render() {
    const {title} = this.props;

    return (
      <View style={headerStyle.linearGradient}>
        <View style={[BasicStyles.directionRow, {flex: 1}]}>
          <Pressable
            onPress={this.handleBack}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.2 : 1.0,
                zIndex: 3,
                paddingHorizontal: wp(1),
              },
            ]}>
            <Image
              source={ic_back}
              resizeMode="cover"
              style={headerStyle.backIcon}
            />
          </Pressable>

          <Text style={headerStyle.headerTitle}>{title}</Text>
        </View>
      </View>
    );
  }
}

const headerStyle = StyleSheet.create({
  linearGradient: {
    height: hp(5),
    width: '100%',
    borderBottomWidth: 0.7,
    borderBottomColor: '#ccc',
  },

  backIcon: {
    height: wp(5),
    aspectRatio: 1 / 1,
  },

  headerTitle: {
    flex: 1,
    marginLeft: wp(-7),
    color: '#111',
    fontSize: wp(3.5),
    fontWeight: '500',
    textAlign: 'center',
  },
});
