import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Components
import SafeAreaView from 'react-native-safe-area-view';
import HeaderComponent from '../../layouts/Header';
import AlbumComponent from '../../components/AlbumComponent';
import CustomLoader from '../../layouts/CustomLoader';

// API
import {BASE_URL, makeRequest} from '../../../utils/ApiInfo';

// Libs
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Styles
import BasicStyles from 'views/styles';

export default class Albums extends Component {
  constructor(props) {
    super(props);

    const {info} = props.route.params;

    this.info = info;

    this.state = {
      ...info,
      isLoading: true,
      albumsData: [],
    };
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums = async () => {
    try {
      // starting loader
      this.setState({isLoading: true});

      // preparing params

      // calling api
      const response = await makeRequest(
        BASE_URL + 'albums?userId=' + this.state.id,
      );

      // processing response
      if (response) {
        this.setState({
          albumsData: response,
          isLoading: false,
          isRefreshing: false,
        });
      } else {
        this.setState({
          albumsData: null,
          isLoading: false,
          isRefreshing: false,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  renderItem = ({item}) => (
    <AlbumComponent
      item={item}
      nav={this.props.navigation}
      userInfo={this.info}
    />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {navigation} = this.props;

    if (this.state.isLoading) {
      return <CustomLoader />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent title={this.state.name} nav={navigation} />

        <Text
          style={[
            BasicStyles.textLarge,
            BasicStyles.textBoldMidLight,
            BasicStyles.blackColor,

            {marginLeft: wp(5), marginTop: wp(2)},
          ]}>
          Albums
        </Text>

        <FlatList
          data={this.state.albumsData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.itemSeparator}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listContentContainer: {
    padding: wp(2),
    alignItems: 'center',
  },
  separator: {
    margin: 8,
  },
});
