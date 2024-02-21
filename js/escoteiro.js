  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('cpf')).maskPattern('999.999.999-99');
  });

  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('rg')).maskPattern('99.999.999-9');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('telmae')).maskPattern('(99) 99999-9999');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('telpai')).maskPattern('(99) 99999-9999');
  });

  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('data')).maskPattern('99/99/9999');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('email')).maskPattern(/^.+@.+\..+$/);
  });

  document.addEventListener('DOMContentLoaded', function () {
    VMasker(document.getElementById('cep')).maskPattern('99999-999');
  });

  // Validação de endereço

  function limpa_form_cep() {
    // Limpa os valores do form
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
  }

  function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
      // Atualiza os campos com os valores
      document.getElementById('rua').value=(conteudo.logradouro);
      document.getElementById('bairro').value=(conteudo.bairro);
      document.getElementById('cidade').value=(conteudo.localidade);
      document.getElementById('estado').value=(conteudo.uf);
    } //fim do if
    else {
      // CEP não encontrado
      limpa_form_cep();
      window.alert("CEP não encontrado.");
    }
  }

  function pesquisacep(valor) {
    // Nova variável CEP somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se o campo CEP possui o valor informado
    if (cep != "") {
      //Expressão regular para validar o CEP
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP
      if (validacep.test(cep)) {
        //Preenche os campos com "..." enquanto consulta o webservice
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('estado').value="...";

        //Cria um elemento em JavaScript
        var script = document.createElement('script')

        //Sincroniza com o callback
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo
        document.body.appendChild(script);
      } //Fim if
      else {
        //Cep é inválido
        limpa_form_cep();
        window.alert("O formato do CEP é inválido.")
      }
    } //Fim if
    else {
      //CEP sem valor limpa o form
      limpa_form_cep();
    }
  };