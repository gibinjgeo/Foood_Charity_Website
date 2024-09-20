
function someFunc() {
    sendmail();
   save();
   
}
var firebaseConfig = {

    apiKey: "AIzaSyB7XSf4zho4TSL08LpPefycp47NTuJwA60",

    authDomain: "test-1aa4f.firebaseapp.com",

    databaseURL: "https://test-1aa4f-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "test-1aa4f",

    storageBucket: "test-1aa4f.appspot.com",

    messagingSenderId: "1074081039703",

    appId: "1:1074081039703:web:211c881e3b1dc3d24baa12",

    measurementId: "G-6ZJ3VL7T0L"

  };


  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
 var database = firebase.database()

 function save(){
    var email = document.getElementById('email').value;
    var food = document.getElementById('food').value;
    var place = document.getElementById('place').value;
    var user = document.getElementById('un').value;
    var qty = document.getElementById('qty').value;
    var exp = document.getElementById('exp').value;

    database.ref('donation/' + user).set({
        user : user,
        email : email,
        food : food,
        place : place,
        qty: qty,
        exp: exp

    })
    alert('donation accepted')

 }

 function sendmail(params) {

    var tempParams = {
    
     to_name:document.getElementById("email").value,
     user: document.getElementById("un").value,
     food: document.getElementById("food").value,
     place: document.getElementById("place").value,
    };
    
    emailjs.send('service_8i7mi07','template_3ocabio',tempParams)
    .then(function(res) {
    console.log("success", res.status);
    
    })
    
    }
 