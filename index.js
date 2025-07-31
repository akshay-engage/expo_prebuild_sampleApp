import messaging from '@react-native-firebase/messaging';
import WebEngage from 'react-native-webengage';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  const webEngage = new WebEngage();
  webEngage.push.onMessageReceived(remoteMessage);

});

import 'expo-router/entry';