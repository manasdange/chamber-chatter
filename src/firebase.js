import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyDm8draIdInobNGL1g3gqZomNMvcJKZhj8',
  authDomain: 'chamber-chatter.firebaseapp.com',
  projectId: 'chamber-chatter',
  storageBucket: 'chamber-chatter.appspot.com',
  messagingSenderId: '546820325250',
  appId: '1:546820325250:web:aff02af47b292c0fe1199b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
