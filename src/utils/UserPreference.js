import AsyncStorage from '@react-native-community/async-storage';

// User Preferences Keys
export const KEYS = {
  USER_INFO: 'userInfo',
};

// Methods
export const storeData = async (key, data) => {
  try {
    const info = JSON.stringify(data);
    await AsyncStorage.setItem(key, info);
  } catch (error) {
    console.log(error.message);
  }
};

export const getData = async key => {
  try {
    const rawData = await AsyncStorage.getItem(key);
    if (!rawData) {
      return null;
    }

    const info = JSON.parse(rawData);
    return info;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error.message);
  }
};
