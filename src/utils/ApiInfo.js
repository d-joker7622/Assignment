// User Preference
import {KEYS, getData} from './UserPreference';

//axios for api calling
import axios from 'axios';

// // Base URL
export const BASE_URL = 'https://jsonplaceholder.typicode.com/'; /* New */

const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    // add common headers here
    'content-type': 'multipart/form-data',
  },
});

// Methods
export const makeRequest = async (url, params = null) => {
  try {
    // request info
    let info = {};
    info.url = url;
    if (params) {
      // request method
      info.method = 'POST';

      // preparing multipart/form-data
      const formData = new FormData();
      for (const key in params) {
        formData.append(key, params[key]);
      }
      info.data = formData;
    } else {
      // headers to prevent cache in GET request
      info.headers = {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0,
      };
    }

    console.log('Request Info:', info);
    const response = await AXIOS.request(info);

    const result = response.data;
    console.log('Request Result', result);
    // alert(`Request Result: ${JSON.stringify(result)}`);

    return result;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
