import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAEdIpHAVlzpqU9MZ2AtNQ4Q_37Fg0SvJI",
    authDomain: "hauy-milk.firebaseapp.com",
    databaseURL: "https://hauy-milk.firebaseio.com",
    projectId: "hauy-milk",
    storageBucket: "hauy-milk.appspot.com",
    messagingSenderId: "500055777993"
  };
  var firebaseConfig=firebase.initializeApp(config);

  export default firebaseConfig;