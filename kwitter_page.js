
//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDVy4dyP5BwL23edtV2g8CnZsTxvD-NudA",
    authDomain: "we-can-chat-in-here.firebaseapp.com",
    databaseURL: "https://we-can-chat-in-here-default-rtdb.firebaseio.com",
    projectId: "we-can-chat-in-here",
    storageBucket: "we-can-chat-in-here.appspot.com",
    messagingSenderId: "458569784854",
    appId: "1:458569784854:web:8cafd98e2489811a2d5f37" 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
