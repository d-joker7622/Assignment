import React, {PureComponent} from 'react';
import {View, Animated, StyleSheet, ImageBackground} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Styles
import basicStyles from 'views/styles';

// Images
import appLogo from 'assets/images/ic_logo_blk.png';
import ic_background_dark from 'assets/images/ic_background_dark.jpg';

export default class SplashScreen extends PureComponent {
  state = {
    opacity: new Animated.Value(0),
  };

  handleAnimation = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const animatedImageStyle = [
      {
        opacity: this.state.opacity,
        transform: [
          {
            scale: this.state.opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0.85, 1],
            }),
          },
        ],
      },
      styles.logo,
    ];

    return (
      <ImageBackground
        source={ic_background_dark}
        style={basicStyles.container}>
        <View
          style={[
            basicStyles.mainContainer,
            basicStyles.alignCenter,
            basicStyles.justifyCenter,
          ]}>
          <View style={styles.logContainer}>
            <Animated.Image
              source={appLogo}
              resizeMode="cover"
              onLoad={this.handleAnimation}
              style={animatedImageStyle}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: hp(20),
    aspectRatio: 1 / 1,
    // aspectRatio: 4.48 / 1,
  },
});
