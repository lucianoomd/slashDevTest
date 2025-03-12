import {initializeApp} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  projectId: 'slashdevtest-42610',
  appId: '1:77195490088:android:28bf62f985e92b8e8c561d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app, auth};
