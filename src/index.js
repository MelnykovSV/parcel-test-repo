// fetch('https://mhw-db.com/monsters/56')
//   .then(response => response.json())
//   .then(sets => {
//     console.log(sets);
//   });

import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  // ...
  storageBucket: '',
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
const storageRef = ref(storage, './newFile');

const file = new File([1, 2, 3, 4], 'newFile');

uploadBytes(storageRef, file).then(snapshot => {
  console.log('Uploaded a blob or file!');
});
