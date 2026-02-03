//Dicas:
//Quando um atributo é privado, ele não pode ser acessado fora da classe. faz isso com #
//Use alert() para mostrar mensagens ao usuário.
//Use toFixed(2) para formatar números com duas casas decimais.

class parquimetro {
#saldo;
    constructor() {
        this.#saldo = 0;
    }

    verificarSaldo() {
        if (this.#saldo < 1) {
            alert("Saldo insuficiente! Por favor, efetue um depósito.");
        }
    }

    obterMinutos() {
        if (this.#saldo >= 3.00) return 120;
        if (this.#saldo >= 1.75) return 60;
        if (this.#saldo >= 1.00) return 30;
        return 0;
    }

    tempoRestante() {
        let totalMinutos = this.obterMinutos();
        let horas = Math.floor(totalMinutos / 60);
        let minutos = totalMinutos % 60;
        return `${horas} horas e ${minutos} minutos`;
    }

    depositar(valor) {
        if (valor === 1.00 || valor === 1.75 || valor === 3.00) {
            this.#saldo += valor;
            alert(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            alert("Valor inválido! Insira R$1.00, R$1.75 ou R$3.00 conforme a tabela.");
        }
    }
}

const meuParquimetro = new parquimetro();

function depositar() {
    const input = document.getElementById("deposito");
    const valorDeposito = parseFloat(input.value);

    if (isNaN(valorDeposito)) {
        alert("Por favor, digite um número.");
        return;
    }

    meuParquimetro.depositar(valorDeposito);
    document.getElementById("Saldo").value = meuParquimetro.tempoRestante();
    input.value = "";
}