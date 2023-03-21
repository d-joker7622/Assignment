import 'react-native-gesture-handler';
import React, {useState, useEffect, useRef} from 'react';
import {AppState, LogBox, Text, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {RootSiblingParent} from 'react-native-root-siblings';

// navigation
import NavContainer from 'navigation/routes';
import {nhSetTopLevelNavigator, nhReplace} from 'navigation/helper';

// views
import Splash from 'views/containers/Splash';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

import AppStatusBar from 'views/layouts/AppStatusBar';

const App = props => {
  const appState = useRef(AppState.currentState);
  // state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialSetup = async () => {
      setIsLoading(false);
    };

    const timeoutId = setTimeout(initialSetup, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const setNavigatorRef = ref => {
    nhSetTopLevelNavigator(ref);
  };

  if (isLoading) {
    return <Splash />;
  }

  return (
    <SafeAreaProvider>
      <AppStatusBar barStyle={'default'} backgroundColor={'#ffffff'} />
      <NavContainer ref={setNavigatorRef} />
    </SafeAreaProvider>
  );
};

export default App;
