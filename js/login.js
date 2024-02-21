var showPassword = document.getElementById('show-password');
var passwordField = document.getElementById('senha');

showPassword.addEventListener('click', function() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
    //Adiciona blinking na classe do ícone com animação
    showPassword.classList.add('blinking');

    //Remove blinking na classe antes de 1 segundo (1000 milliseconds)
    setTimeout(function() {
        showPassword.classList.remove('blinking');
    }, 1000);
});

var showEmail = document.getElementById('show-email');
var emailField = document.getElementById('email');

showEmail.addEventListener('click', function() {
    if (emailField.type === 'email') {
        emailField.type = 'text';
    } else {
        emailField.type = 'email';
    }

    showEmail.classList.add('blinking');

    setTimeout(function() {
        showEmail.classList.remove('blinking');
    }, 1000);
});

  /*
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('cpf')).maskPattern('999.999.999-99');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('tel')).maskPattern('(99) 99999-9999');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('telpai')).maskPattern('(99) 99999-9999')
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('emailpai')).maskPattern(/^.+@.+\..+$/);
  });
  */