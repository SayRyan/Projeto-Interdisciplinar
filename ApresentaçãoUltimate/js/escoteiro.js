  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('cpf')).maskPattern('999.999.999-99');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('telmae')).maskPattern('(99) 99999-9999');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('telpai')).maskPattern('(99) 99999-9999')
  });

  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('data')).maskPattern('99/99/9999')
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('email')).maskPattern(/^.+@.+\..+$/);
  });