var btnLogin = document.getElementById('btnLogin');
var email = document.getElementById('email');
var password = document.getElementById('password');

btnLogin.addEventListener('click',function(){
    
firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function(result) {
        alert("Usuário Conectado!");
        window.location.replace('index.html')
   
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });

});