/**
 * @format
 */

import {AppRegistry} from 'react-native';
import WelcomeScreen from './android/app/src/screens/WelcomeScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WelcomeScreen);
