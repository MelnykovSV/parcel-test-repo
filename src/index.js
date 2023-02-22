// fetch('https://mhw-db.com/monsters/56')
//   .then(response => response.json())
//   .then(sets => {
//     console.log(sets);
//   });

import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAi4Znr4vdnDxyTidQOWSzpihwHJ_F7dpk',
  authDomain: 'parcel-test-repo.firebaseapp.com',
  projectId: 'parcel-test-repo',
  storageBucket: 'parcel-test-repo.appspot.com',
  messagingSenderId: '13724922883',
  appId: '1:13724922883:web:f45f7c2c45c92bbf034a36',
  measurementId: 'G-V2E0KQV90H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// console.log(initializeApp);
// console.log(getStorage);

// console.log(app);
// console.log(storage);

// Create a storage reference from our storage service
const storageRef = ref(storage, './newFile.txt');

const file = new File([1, 2, 3, 4], 'newFile');
console.log(file);

uploadBytes(storageRef, file).then(snapshot => {
  console.log('Uploaded a blob or file!');
});
