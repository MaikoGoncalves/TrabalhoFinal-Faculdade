var btnLogin = document.getElementById('btnLogin');
var inputemail = document.getElementById('inputemail');
var inputpassword = document.getElementById('inputpassword');

btnLogin.addEventListener('click',function(){
    
firebase.auth().signInWithEmailAndPassword(inputemail.value, inputpassword.value).then(function (result) {
       // alert("Usuário Conectado!");
        window.location.replace('index.html')
   
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });

});