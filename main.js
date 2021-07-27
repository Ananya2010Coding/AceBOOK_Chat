var firebaseConfig = {
  apiKey: "AIzaSyBQT7EdjytlKJsC3XJr2l94o-n986yFiNM",
  authDomain: "acebook2-f68cb.firebaseapp.com",
  databaseURL: "https://acebook2-f68cb-default-rtdb.firebaseio.com",
  projectId: "acebook2-f68cb",
  storageBucket: "acebook2-f68cb.appspot.com",
  messagingSenderId: "350847276062",
  appId: "1:350847276062:web:7d67680c6567a3897a8a0f",
  measurementId: "G-DTEK1DESPE"
};
firebase.initializeApp(firebaseConfig);


  function send(){
      msg = document.getElementById("msg").value;
      
      room_name = document.getElementById("room_name_input").value ;
      
            firebase.database().ref(room_name).push({
          Name: user_name,
          message: msg,
          like: 0
      });
      document.getElementById("msg").value = "";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("login.html");
  }

  function getData() { firebase.database().ref("/").on('value', function(snapshot) { snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    document.getElementById("messages").innerHTML = "";

    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    Name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];

    name_with_tick = "<h4>"+Name+"<img id='tickIMG' src='https://solamaragency.com/wp-content/uploads/2017/09/twitter-verification.png'></h4>";
    user_message = "<h4 id='user_message'>"+message+"</h4>";
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"oncilck='updateLIKE(this.id)'>";
    button_span = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

    total = name_with_tick + user_message + like_button + button_span;
    document.getElementById("messages").innerHTML += total;

  } });  }); }
  getData();

  function updateLIKE(message_id){
    console.log("clicked on like button - ",message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes)+1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update({
      likes: update_likes
    });
  }