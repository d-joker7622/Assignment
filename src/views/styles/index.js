import {StyleSheet} from 'react-native';

//Responsive Screen
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const basicStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  logo: {
    height: hp(20),
    aspectRatio: 1 / 1,
  },

  mainContainer: {
    flex: 1,
  },

  themeTextColor: {
    color: '#2370d0',
  },

  themeBackgroundColor: {
    backgroundColor: '#2370d0',
  },

  whiteColor: {
    color: '#fff',
  },

  whiteBackgroundColor: {
    backgroundColor: '#fff',
  },

  lightBackgroundColor: {
    backgroundColor: '#f2f1f1',
  },

  blackColor: {
    color: '#111',
  },
  lightBlackColor: {
    color: '#333',
  },

  darkGray: {
    color: '#555',
  },

  midGray: {
    color: '#999',
  },

  lightGray: {
    color: '#ccc',
  },

  flexOne: {
    flex: 1,
  },

  flexTow: {
    flex: 2,
  },

  flexThree: {
    flex: 3,
  },

  elevationLight: {
    elevation: 3,
  },

  elevationHard: {
    elevation: 6,
  },

  padding: {
    padding: wp(2),
  },

  paddingLarge: {
    padding: wp(3),
  },

  paddingHalf: {
    padding: wp(1.5),
  },

  paddingHorizontal: {
    paddingHorizontal: wp(2),
  },
  paddingHorizontalExtra: {
    paddingHorizontal: wp(3.2),
  },

  paddingVentricle: {
    paddingVertical: wp(2),
  },

  paddingVentricleHalf: {
    paddingVertical: wp(2),
  },

  paddingBottom: {
    paddingBottom: wp(2),
  },

  paddingBottomHalf: {
    paddingBottom: wp(1),
  },

  paddingTop: {
    paddingTop: wp(2),
  },

  paddingLeft: {
    paddingLeft: wp(2),
  },

  paddingRight: {
    paddingRight: wp(2),
  },
  margin: {
    margin: wp(2),
  },

  marginHorizontal: {
    marginHorizontal: wp(2),
  },

  marginVentricle: {
    marginVertical: wp(2),
  },

  marginBottom: {
    marginBottom: wp(2),
  },

  marginBottomHalf: {
    marginBottom: wp(1),
  },

  marginTop: {
    marginTop: wp(2),
  },
  marginTopHalf: {
    marginTop: wp(1),
  },
  marginTopExtra: {
    marginTop: wp(4),
  },

  marginLeft: {
    marginLeft: wp(2),
  },
  marginLeftExtra: {
    marginLeft: wp(4),
  },

  marginRight: {
    marginRight: wp(2),
  },

  directionRow: {
    flexDirection: 'row',
  },

  directionColumn: {
    flexDirection: 'column',
  },

  justifyBetween: {
    justifyContent: 'space-between',
  },

  justifyAround: {
    justifyContent: 'space-around',
  },

  justifyEvenly: {
    justifyContent: 'space-evenly',
  },

  justifyEnd: {
    justifyContent: 'flex-end',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  alignCenter: {
    alignItems: 'center',
  },

  alignEnd: {
    alignItems: 'flex-end',
  },

  textMid: {
    fontSize: wp(3.5),
  },
  textLarge: {
    fontSize: wp(4),
  },
  textExtraLarge: {
    fontSize: wp(4.8),
  },
  text: {
    fontSize: wp(3),
    color: '#222',
  },

  textSmall: {
    fontSize: wp(2.8),
    color: '#444',
  },
  textSmaller: {
    fontSize: wp(2.5),
    color: '#444',
  },

  textThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },

  textAlign: {
    textAlign: 'center',
  },

  textJustify: {
    textAlign: 'justify',
  },

  headingSmall: {
    fontSize: wp(2.8),
    fontWeight: '700',
    color: '#222',
  },

  heading: {
    fontSize: wp(3),
    fontWeight: '700',
    color: '#222',
  },

  headingLarge: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#222',
  },

  textBoldLight: {
    fontWeight: '400',
  },
  textBoldMidLight: {
    fontWeight: '600',
  },

  textBold: {
    fontWeight: '700',
  },

  textExtraBold: {
    fontWeight: '900',
  },

  allBorder: {
    borderWidth: 0.8,
  },

  bottomBorder: {
    borderBottomWidth: 0.8,
  },

  topBorder: {
    borderTopWidth: 0.8,
  },

  leftBorder: {
    borderLeftWidth: 0.8,
  },

  rightBorder: {
    borderRightWidth: 0.8,
  },

  iconRow: {
    width: hp(2.6),
    aspectRatio: 1 / 1,
    marginRight: wp(3),
  },

  iconRowSmall: {
    width: hp(1.8),
    aspectRatio: 1 / 1,
    marginRight: wp(1),
  },

  iconColumn: {
    height: hp(2.6),
    aspectRatio: 1 / 1,
  },
  input: {
    color: '#fff',
    height: hp(5),
    flex: 1,
    borderRadius: 4,
    fontSize: wp(3),
    lineHeight: 12,
  },
  inputBordered: {
    color: '#fff',
    height: hp(6),
    flex: 1,
    borderRadius: 4,
    fontSize: wp(3.5),
    lineHeight: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  separatorVertical: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: wp(2),
    height: '100%',
  },
  separatorHorizontal: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: wp(2),
    width: '100%',
  },
  button: {
    height: hp(6),
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  moreButton: {
    paddingVertical: wp(1),
    paddingHorizontal: wp(2),
  },
  noDataStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(10),
    backgroundColor: '#fff',
  },
  noDataTextStyle: {
    color: '#555',
    fontSize: wp(3),
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default basicStyles;
