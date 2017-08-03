
  // Initialize Firebase
 

  var config = {
    apiKey: "AIzaSyBx5nUasv7V8ylxUARAHmcD5-4fXPPesqY",
    authDomain: "pokeit-5493a.firebaseapp.com",
    databaseURL: "https://pokeit-5493a.firebaseio.com",
    projectId: "pokeit-5493a",
    storageBucket: "",
    messagingSenderId: "65178103898"
  };
  firebase.initializeApp(config);

var uiConfig = {
        signInSuccessUrl: 'game.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: 'https://www.google.com'
      };


      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

$(document).ready(function(){
        $("#gif").hide();
        $("#gif").slideDown(2000);
      })