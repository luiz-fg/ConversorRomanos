let retornoTela = document.getElementById("resulta"); // envia para a tela o resultado
let numero;
let resultado = "";
/*
I: 1  V: 5  X: 10  L: 50  C: 100  D: 500  M: 1000. 
*/
let num_r = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

class Conversor {
  constructor() {}

  convert_r() {
    retornoTela.innerHTML = ``;
    document.getElementById("input-value-r").value = "";
    numero = document.getElementById("input-value-a").value; //traz os numeros arabicos

    resultado = "";

    if (numero == "") {
      this.toString("");
    } else if (isNaN(numero)) {
      this.toString("Valor inválido<br> Digite entre 1 e 3999");
    } else if (numero < 1 || numero > 3999) {
      this.toString("Valor inválido<br> Digite entre 1 e 3999");
    } else {
      for (let indice in num_r) {
        while (numero >= num_r[indice]) {
          resultado += indice;
          numero -= num_r[indice];
        }
        this.toString(resultado);
      }
    }
  }

  convert_a() {
    retornoTela.innerHTML = ``;
    document.getElementById("input-value-a").value = ""; //traz os numeros romanos
    numero = document.getElementById("input-value-r").value; //traz os numeros romanos.

    resultado = 0;

    let arr = numero.split("");
    this.reorder(arr, ["CM", "CD", "XC", "XL", "IX", "IV"]);

    if (this.repeat_check(arr)) {
      this.toString("ERRO!<br>Número não existe");
    } else {
      for (let indice in num_r) {
        for (let indice_1 in arr) {
          if (indice == arr[indice_1]) {
            resultado += num_r[indice];
          }
        }
      }
      this.toString(resultado);
    }
  }

  reorder(array, arrayC) {
    let a, b, c, i, j;

    for (i = 0; i < array.length; i++) {
      for (j in arrayC) {
        a = arrayC[j].split("");
        b = a[0];
        c = a[1];

        if (array[i] == b && array[i + 1] == c) {
          array[i] = `${b}${c}`;
          array.splice(i + 1, 1);
        }
      }
    }
    return array;
  }

  repeat_check(array) {
    for (let i in array) {
      if (array.length - Number(i) > 3) {
        if (
          array[Number(i)] == array[Number(i) + 1] &&
          array[i] == array[Number(i) + 2] &&
          array[i] == array[Number(i) + 3]
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  toString(mensagem) {
    retornoTela.innerHTML = `<p class="re">${mensagem}</p>`;
  }
}

var conversor = new Conversor();
