import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

const saveButton = document.querySelector('.save');
const loadButton = document.querySelector('.load');
const deleteButton = document.querySelector('.delete');
const fileInput = document.querySelector('input');

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

saveButton.addEventListener('click', e => {
  e.preventDefault();
  const file = fileInput.files[0];
  writeFile(file, `./${file.name}`);
});

loadButton.addEventListener('click', e => {
  e.preventDefault();
  // getDownloadURL(ref(storage, './Glossary 2 + Text UA.docx.pdf'))
  //   .then(url => {
  //     // `url` is the download URL for 'images/stars.jpg'
  //     console.log(url);

  //     // fetch(url)
  //     //   .then(response => {
  //     //     // Response handling
  //     //     console.log(response);
  //     //   })
  //     //   .then(data => {
  //     //     // Data handling
  //     //     console.log(data);
  //     //   })
  //     //   .catch(error => {
  //     //     // Error handling
  //     //   });
  getDownloadURL(ref(storage, './Glossary 2 + Text UA.docx.pdf'))
    .then(url => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = event => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch(error => {
      // Handle any errors
    });

  //   })
  //   .catch(error => {
  //     // Handle any errors
  //   });
});

deleteButton.addEventListener('click', e => {
  e.preventDefault();
  const ref1 = ref(storage, './Glossary 2 + Text UA.docx.pdf');
  deleteObject(ref1)
    .then(() => {
      // File deleted successfully
      console.log('deleted');
    })
    .catch(error => {
      // Uh-oh, an error occurred!
    });
});

function writeFile(file, path) {
  const storageRef = ref(storage, path);
  uploadBytes(storageRef, file).then(snapshot => {
    console.log('Uploaded a blob or file!');
  });
}
