import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Components
import SafeAreaView from 'react-native-safe-area-view';
import HeaderComponent from '../../layouts/Header';
import AlbumDetailComponent from '../../components/AlbumDetailComponent';
import AlbumImageComponent from '../../components/AlbumImageComponent';
import EnlargeImage from '../EnlargeImage';
import CustomLoader from '../../layouts/CustomLoader';

// Libs
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Styles
import BasicStyles from 'views/styles';

// API
import {BASE_URL, makeRequest} from '../../../utils/ApiInfo';

export default class AlbumDetails extends Component {
  constructor(props) {
    super(props);

    let {albumData, userInfo} = this.props.route.params;

    this.state = {
      albumId: albumData.id,
      ...userInfo,
      isLoading: true,
      showImagePopup: false,

      albumsImgData: [],
      albumName: albumData.title,
      albumData: [],
      viewableImg: '',
    };
  }

  componentDidMount() {
    this.fetchAlbums();
    this.fetchAlbumDetails(this.state.albumId);
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
          albumsImgData: response,
          isLoading: false,
          isRefreshing: false,
        });
      } else {
        this.setState({
          albumsImgData: null,
          isLoading: false,
          isRefreshing: false,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  fetchAlbumDetails = async albumId => {
    try {
      // starting loader
      this.setState({isLoading: true});

      // preparing params

      // calling api
      const response = await makeRequest(
        BASE_URL + 'photos?albumId=' + albumId,
      );

      // processing response
      if (response) {
        this.setState({
          albumData: response,
          isLoading: false,
          isRefreshing: false,
        });
      } else {
        this.setState({
          albumData: null,
          isLoading: false,
          isRefreshing: false,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChangeAlbum = async (albumId, albumName) => {
    this.setState({albumName});

    await this.fetchAlbumDetails(albumId);
  };

  renderItem = ({item}) => (
    <AlbumDetailComponent
      item={item}
      nav={this.props.navigation}
      userInfo={this.info}
      changeAlbum={this.handleChangeAlbum}
    />
  );

  handleEnlargeImage = img => {
    this.setState({showImagePopup: true, viewableImg: img});
  };

  renderAlbumImages = ({item}) => (
    <AlbumImageComponent
      item={item}
      nav={this.props.navigation}
      userInfo={this.info}
      enlargeImage={this.handleEnlargeImage}
    />
  );

  closePopup = () => {
    this.setState({showImagePopup: false, viewableImg: ''});
  };

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {isLoading} = this.state;
    const {navigation} = this.props;

    if (isLoading) {
      return <CustomLoader />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title={this.state.name}
          nav={navigation}
          navAction="back"
        />
        <View style={styles.mainContainer}>
          <View>
            <FlatList
              data={this.state.albumsImgData}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.itemSeparator}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                styles.listContentContainer,
                {width: wp(26)},
              ]}
            />
          </View>

          <View style={{width: 0.8, backgroundColor: '#999'}} />

          <View style={{flex: 1, marginLeft: wp(2)}}>
            <Text
              style={[
                BasicStyles.textLarge,
                BasicStyles.textBoldMidLight,
                BasicStyles.blackColor,
                {marginTop: wp(2), textTransform: 'capitalize'},
              ]}>
              {this.state.albumName}
            </Text>
            <FlatList
              data={this.state.albumData}
              renderItem={this.renderAlbumImages}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={() => <View style={{margin: wp(0.4)}} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContentContainer}
              numColumns={2}
            />
          </View>
        </View>
        {this.state.showImagePopup && (
          <EnlargeImage
            item={this.state.viewableImg}
            closePopup={this.closePopup}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {flexDirection: 'row'},
  listContentContainer: {
    marginTop: hp(1),
  },

  separator: {
    height: hp(2),
  },
});
