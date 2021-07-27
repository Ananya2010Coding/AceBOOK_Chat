var firebaseConfig = {
    apiKey: "AIzaSyCQjxl4dK_mDfvDv4DuMo6drCa7FXdprXQ",
    authDomain: "acebook-7cf31.firebaseapp.com",
    databaseURL: "https://acebook-7cf31-default-rtdb.firebaseio.com",
    projectId: "acebook-7cf31",
    storageBucket: "acebook-7cf31.appspot.com",
    messagingSenderId: "328408860176",
    appId: "1:328408860176:web:c35a7fcb40be1b8510ec95",
    measurementId: "G-EF8FP1WV5G"
  };
  firebase.initializeApp(firebaseConfig);



  function join_room(){
    room_name = document.getElementById("room_name_input").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding the room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location.replace("main.html");
  }


function navigate(name){
  console.log(name);
  localStorage.setItem("room name", name);
  window.location.replace("main.html");
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("login.html");
}
