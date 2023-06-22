$(document).ready(function() {
    $('#telefone').inputmask('(99) 9999-9999');
    $('#cep').inputmask('99999-999');
  
    $('#myForm').submit(function(event) {
      event.preventDefault();
  
      var nome = $('#nome').val();
      var endereco = $('#endereco').val();
      var telefone = $('#telefone').val();
      var cep = $('#cep').val();
  
      if (nome.trim() === '') {
        exibirMensagem('Por favor, informe o nome.', 'danger');
        return;
      }
  
      if (endereco.trim() === '') {
        exibirMensagem('Por favor, informe o endereço.', 'danger');
        return;
      }
  
      if ($('#telefone').inputmask('isComplete') === false) {
        exibirMensagem('Por favor, informe o telefone completo.', 'danger');
        return;
      }
  
      if ($('#cep').inputmask('isComplete') === false) {
        exibirMensagem('Por favor, informe o CEP completo.', 'danger');
        return;
      }
  
      console.log('Nome:', nome);
      console.log('Endereço:', endereco);
      console.log('Telefone:', telefone);
      console.log('CEP:', cep);
  
      adicionarLinhaGrid(nome, endereco, telefone, cep);
      exibirMensagem('Formulário enviado com sucesso!', 'success');
      limparFormulario();
    });
  
    function exibirMensagem(mensagem, tipo) {
      var alert = $('<div class="alert alert-' + tipo + ' mt-3" role="alert">' + mensagem + '</div>');
      $('.container').prepend(alert);
  
      setTimeout(function() {
        alert.remove();
      }, 3000);
    }
  
    function adicionarLinhaGrid(nome, endereco, telefone, cep) {
      var linha = $('<tr></tr>');
      linha.append('<td>' + nome + '</td>');
      linha.append('<td>' + endereco + '</td>');
      linha.append('<td>' + telefone + '</td>');
      linha.append('<td>' + cep + '</td>');
  
      var acoes = $('<td></td>');
      var editarBotao = $('<button class="btn btn-sm btn-primary mr-2">Editar</button>');
      var copiarBotao = $('<button class="btn btn-sm btn-secondary mr-2">Copiar</button>');
      var excluirBotao = $('<button class="btn btn-sm btn-danger">Excluir</button>');
  
      editarBotao.click(function() {
        editarLinhaGrid(linha);
      });
  
      copiarBotao.click(function() {
        copiarLinhaGrid(linha);
      });
  
      excluirBotao.click(function() {
        excluirLinhaGrid(linha);
      });
  
      acoes.append(editarBotao);
      acoes.append(copiarBotao);
      acoes.append(excluirBotao);
      linha.append(acoes);
  
      $('#grid tbody').append(linha);
    }
  
    function editarLinhaGrid(linha) {
      var campos = linha.find('td:not(:last-child)');
      campos.each(function() {
        var valor = $(this).text();
        var input = $('<input type="text" class="form-control" value="' + valor + '">');
        $(this).html(input);
      });
  
      var salvarBotao = $('<button class="btn btn-sm btn-primary mr-2">Salvar</button>');
      var cancelarBotao = $('<button class="btn btn-sm btn-secondary">Cancelar</button>');
  
      salvarBotao.click(function() {
        salvarEdicaoGrid(linha);
      });
  
      cancelarBotao.click(function() {
        cancelarEdicaoGrid(linha);
      });
  
      linha.find('td:last-child').empty().append(salvarBotao).append(cancelarBotao);
    }
  
    function salvarEdicaoGrid(linha) {
      var campos = linha.find('td:not(:last-child)');
      campos.each(function() {
        var valor = $(this).find('input').val();
        $(this).html(valor);
      });
  
      var editarBotao = $('<button class="btn btn-sm btn-primary mr-2">Editar</button>');
      var copiarBotao = $('<button class="btn btn-sm btn-secondary mr-2">Copiar</button>');
      var excluirBotao = $('<button class="btn btn-sm btn-danger">Excluir</button>');
  
      editarBotao.click(function() {
        editarLinhaGrid(linha);
      });
  
      copiarBotao.click(function() {
        copiarLinhaGrid(linha);
      });
  
      excluirBotao.click(function() {
        excluirLinhaGrid(linha);
      });
  
      linha.find('td:last-child').empty().append(editarBotao).append(copiarBotao).append(excluirBotao);
    }
  
    function cancelarEdicaoGrid(linha) {
      var campos = linha.find('td:not(:last-child)');
      campos.each(function() {
        var valor = $(this).find('input').attr('value');
        $(this).html(valor);
      });
  
      var editarBotao = $('<button class="btn btn-sm btn-primary mr-2">Editar</button>');
      var copiarBotao = $('<button class="btn btn-sm btn-secondary mr-2">Copiar</button>');
      var excluirBotao = $('<button class="btn btn-sm btn-danger">Excluir</button>');
  
      editarBotao.click(function() {
        editarLinhaGrid(linha);
      });
  
      copiarBotao.click(function() {
        copiarLinhaGrid(linha);
      });
  
      excluirBotao.click(function() {
        excluirLinhaGrid(linha);
      });
  
      linha.find('td:last-child').empty().append(editarBotao).append(copiarBotao).append(excluirBotao);
    }
  
    function copiarLinhaGrid(linha) {
      var campos = linha.find('td:not(:last-child)');
      var valores = [];
  
      campos.each(function() {
        var valor = $(this).text();
        valores.push(valor);
      });
  
      var linhaCopiada = $('<tr></tr>');
  
      for (var i = 0; i < valores.length; i++) {
        linhaCopiada.append('<td>' + valores[i] + '</td>');
      }
  
      var acoes = $('<td></td>');
      var editarBotao = $('<button class="btn btn-sm btn-primary mr-2">Editar</button>');
      var copiarBotao = $('<button class="btn btn-sm btn-secondary mr-2">Copiar</button>');
      var excluirBotao = $('<button class="btn btn-sm btn-danger">Excluir</button>');
  
      editarBotao.click(function() {
        editarLinhaGrid(linhaCopiada);
      });
  
      copiarBotao.click(function() {
        copiarLinhaGrid(linhaCopiada);
      });
  
      excluirBotao.click(function() {
        excluirLinhaGrid(linhaCopiada);
      });
  
      acoes.append(editarBotao);
      acoes.append(copiarBotao);
      acoes.append(excluirBotao);
      linhaCopiada.append(acoes);
  
      $('#grid tbody').append(linhaCopiada);
    }
  
    function excluirLinhaGrid(linha) {
      linha.remove();
    }
  
    function limparFormulario() {
      $('#nome').val('');
      $('#endereco').val('');
      $('#telefone').val('');
      $('#cep').val('');
    }
  });
  