
function someFunc() {
    sendmail();
   save();
   
}
    //fille the below empty filed with your Credentials
    const firebaseConfig = {
  
        apiKey: "",
    
        authDomain: "",
    
        databaseURL: "",
    
        projectId: "",
    
        storageBucket: "",
    
        messagingSenderId: "",
    
        appId: "",
    
        measurementId: ""
    
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
 