// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9EFYbPXFLRx0M1AMsDKr3Y1B7k-BWFhQ",
    authDomain: "registration-form-e06eb.firebaseapp.com",
    projectId: "registration-form-e06eb",
    storageBucket: "registration-form-e06eb.appspot.com",
    messagingSenderId: "404792858084",
    appId: "1:404792858084:web:dd326dbec3a86f7a09a3f1",
    measurementId: "G-7M39LNCV3S"
  };
  firebase.initializedApp(config);

  function submit(){
    firebase.database().ref("User").set({
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value
    });
  }