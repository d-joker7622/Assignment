import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Icons
import ic_close from 'assets/icons/ic_crossed.png';

class EnlargeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.parentView = null;
  }

  setViewRef = ref => {
    this.parentView = ref;
  };

  handleStartShouldSetResponder = event => {
    if (this.parentView._nativeTag === event.target._nativeTag) {
      this.props.closePopup();
    }
  };

  handleClose = () => {
    this.props.closePopup();
  };

  render() {
    return (
      <View
        ref={this.setViewRef}
        onStartShouldSetResponder={this.handleStartShouldSetResponder}
        style={styles.modalContainer}>
        <View style={styles.popupContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={{uri: this.props.item}}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={this.handleClose}
            underlayColor="#transparent">
            <Image
              source={ic_close}
              resizeMode="cover"
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: wp(90),
    padding: wp(5),
  },

  closeButton: {
    position: 'absolute',
    top: wp(2),
    right: wp(7),
  },

  closeIcon: {
    height: hp(3.5),
    aspectRatio: 1 / 1,
  },
  imgContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    minHeight: hp(20),
    minWidth: hp(45),
    margin: 'auto',
    borderRadius: wp(3),
    // aspectRatio: 2 / 4.2,
  },
});

export default EnlargeImage;
