let saldo = 100;

function somaSaldo(valor) {
  return valor + saldo;
};

function subtraiSaldo(valor) {
  return saldo - valor;
};

function multiplicaSaldo(valor) {
  return valor * saldo;
};

function divideSaldo(valor) {
  return saldo / valor;
};

console.log(somaSaldo(300)); // 400
console.log(subtraiSaldo(50)); // 50
console.log(multiplicaSaldo(2)); // 200
console.log(divideSaldo(5)); // 20

// -------------------------------------------------

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente) {
  if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente);
    return 'Cliente adicionada(o) com sucesso!';
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}


console.log(adicionaCliente(true)); // O parâmetro passado deve ser do tipo "string"
console.log(adicionaCliente('Joaquim')); // Cliente adicionada(o) com sucesso
console.log(clientesTrybeBank); // [ 'Ada', 'John', 'Gus', 'Joaquim' ]

//--------------------------------------------------

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrada(o)'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]

//---------------------------------------------------------

function validaParametros(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function verificaSaldo(valor, saldo) {
    if (valor <= saldo) {
      return true;
    } else {
      return false;
    }
  }
  
  function sacar(valor, saldo) {
    if (validaParametros(valor, saldo) === false) {
      return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
    };
  
    if (verificaSaldo(valor, saldo) === true) {
      return "Saque realizado com sucesso. Novo saldo: " + (saldo - valor);
    } else {
      return "Saldo insuficiente. Seu saldo atual é: " + saldo;
    };
  }

  //-----------------------------------------------------

function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]