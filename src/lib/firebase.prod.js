import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBx8Fkeut_AVsQk1FpsTuo5ihUpFMwYQVc',
  authDomain: 'stream-ef308.firebaseapp.com',
  projectId: 'stream-ef308',
  storageBucket: 'stream-ef308.appspot.com',
  messagingSenderId: '314222361261',
  appId: '1:314222361261:web:5576e165be6e5ab39de424',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

