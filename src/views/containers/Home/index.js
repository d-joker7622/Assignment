/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Styles
import BasicStyles from 'views/styles';

// Components
import HomeComponent from '../../components/HomeComponent';
import CustomLoader from '../../layouts/CustomLoader';

// API
import {BASE_URL, makeRequest} from '../../../utils/ApiInfo';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      usersData: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      // starting loader
      this.setState({isLoading: true});

      // preparing params

      // calling api
      const response = await makeRequest(BASE_URL + 'users');

      // processing response
      if (response) {
        this.setState({
          usersData: response,
          isLoading: false,
          isRefreshing: false,
        });
      } else {
        this.setState({
          usersData: null,
          isLoading: false,
          isRefreshing: false,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  _renderItem = ({item}) => {
    return (
      <HomeComponent
        item={item}
        navigation={this.props.navigation}
        currentUser={this.currentUser}
      />
    );
  };

  separator = () => (
    <View
      style={{
        height: wp(3),
        width: wp(75),
        marginLeft: wp(17),
      }}
    />
  );
  keyExtractor = (item, index) => index.toString();

  render() {
    if (this.state.isLoading) {
      return <CustomLoader />;
    }

    return (
      <View style={[BasicStyles.container, {backgroundColor: '#fafafa'}]}>
        <Text
          style={{
            marginLeft: wp(4),
            marginTop: wp(1),
            fontSize: wp(5.8),
            fontWeight: '700',
            color: '#111',
          }}>
          Photos
        </Text>

        <View
          style={{
            height: 0.5,
            backgroundColor: '#777',
            width: wp(92),
            alignSelf: 'center',
            marginTop: wp(1),
          }}
        />

        <View style={styles.mainContainer}>
          <Text
            style={[
              BasicStyles.textLarge,
              BasicStyles.textBoldMidLight,
              BasicStyles.blackColor,

              {marginLeft: wp(4), marginTop: wp(2)},
            ]}>
            People
          </Text>
          <FlatList
            data={this.state.usersData}
            renderItem={this._renderItem}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.separator}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: wp(4)}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    zIndex: 185,
    marginTop: wp(-0.5),
    // borderTopWidth: 2,
    // borderTopColor: '#888',
    // padding: wp(4),
    // backgroundColor: '#777',
  },
  camIcon: {
    height: wp(4.5),
    aspectRatio: 1 / 1,
  },

  tabContainer: {
    backgroundColor: '#045cc8',
    elevation: 6,
    flexDirection: 'row',
    height: hp(6),

    // alignItems: 'center',
    // justifyContent: 'space-around',
    // paddingBottom: wp(2),
    borderBottomRightRadius: wp(8),
  },
  iconsStyle: {
    height: hp(5),
    aspectRatio: 1 / 1,
  },
  tabStyle: {
    flex: 1,
    alignItems: 'center',
    // height: '100%',
    justifyContent: 'center',
    zIndex: 7,
    paddingBottom: wp(2),
  },
  tabStyle2: {
    flex: 1,
    alignItems: 'center',
    // height: '100%',
    justifyContent: 'center',
    zIndex: 7,
  },
  tabBarStyle: {
    // marginBottom: hp(2),
    backgroundColor: '#fff',
    padding: 0,
    elevation: 0,
    justifyContent: 'space-around',
  },
  tabBarLabel: {
    color: '#ddd',
    fontSize: wp(3.5),
    fontWeight: '700',
    textTransform: 'capitalize',
    textAlign: 'center',
    flex: 1,
    marginBottom: hp(-1.8),
    textAlignVertical: 'center',
  },

  tabBarIndicator: {
    backgroundColor: '#fff',
    marginTop: wp(2),
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 5,
    height: 5,
    // alignSelf: 'center',
    borderRadius: 2.5,
    // marginLeft: wp(12.2),
  },
});

const headerStyle = StyleSheet.create({
  linearGradient: {
    height: hp(8.5),
    width: '100%',
    // borderBottomRightRadius: wp(10),
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    justifyContent: 'space-between',
  },
  logoContainer: {
    // backgroundColor: '#fff',
    // height: wp(8),
    // aspectRatio: 1 / 1,
    borderRadius: wp(9),
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 1,
  },
  logoStyle: {
    width: hp(17),
    aspectRatio: 593 / 115,
  },
  usrImg: {
    height: wp(5.5),
    aspectRatio: 1 / 1,
    borderRadius: wp(6.8),
  },
  usrImg2: {
    height: wp(5),
    aspectRatio: 1 / 1,
    borderRadius: wp(6.8),
    marginLeft: wp(3),
  },
  backIcon: {
    height: wp(5),
    aspectRatio: 1 / 1,
  },
  searchIcon: {
    height: wp(5),
    aspectRatio: 1 / 1,
  },
  crossIcon: {
    height: wp(3),
    aspectRatio: 1 / 1,
  },
  groupIcon: {
    height: wp(5.2),
    aspectRatio: 1 / 1,
    marginLeft: wp(4.5),
  },
  headerTitle: {
    marginLeft: wp(2),
    color: '#fff',
    fontSize: wp(3.5),
    fontWeight: '500',
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    justifyContent: 'space-around',
  },
  searchBarInput: {
    // flex: 1,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
    height: hp(4.5),
    fontSize: wp(3),
    fontWeight: '500',
    marginTop: wp(-2),
    paddingBottom: wp(1),
    paddingLeft: wp(2),
    width: wp(75),
    // marginLeft: wp(4),
    color: '#fff',
  },
});
