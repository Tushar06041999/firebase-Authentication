 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCPuHBVl8fJcRnXy0UkXLhjyJLvcKIKur8",
    authDomain: "form-ebdf1.firebaseapp.com",
    projectId: "form-ebdf1",
    storageBucket: "form-ebdf1.appspot.com",
    messagingSenderId: "152475521295",
    appId: "1:152475521295:web:081fc5deeaf94c1e232e7a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  //add firebase Authentication

  const auth=firebase.auth();

  //create function
  //signup function

  function signUp(){
      var mail=document.getElementById("email");
      var pass=document.getElementById("password");

      const promise=auth.CreateUserWithEmailAndPassword(mail.value,pass.value);
      promise.catch(e=> alert(e.meassage));
      alert("Sign UP Succefull");
  }
