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

    if (numero < 1 || numero > 3999) {
      retornoTela.innerHTML = `<p class="re">Valor inválido<br> Digite entre 1 e 3999</p>`;
    } else {
      for (let indice in num_r) {
        while (numero >= num_r[indice]) {
          resultado += indice;
          numero -= num_r[indice];
        }
        retornoTela.innerHTML = `<p class="re">${resultado}</p>`;
      }
    }
  }

  convert_a() {
    retornoTela.innerHTML = ``;
    document.getElementById("input-value-a").value = ""; //traz os numeros romanos
    numero = document.getElementById("input-value-r").value; //traz os numeros romanos.

    resultado = 0;

    let arr = numero.split("");

    for (let x = 0; x < arr.length; x++) {
      if (arr.length - x >= 1) {
        if (arr[x] == "C" && arr[x + 1] == "M") {
          arr[x] = "CM";
          arr.splice(x + 1, 1);
        } else if (arr[x] == "C" && arr[x + 1] == "D") {
          arr[x] = "CD";
          arr.splice(x + 1, 1);
        } else if (arr[x] == "X" && arr[x + 1] == "C") {
          arr[x] = "XC";
          arr.splice(x + 1, 1);
        } else if (arr[x] == "X" && arr[x + 1] == "L") {
          arr[x] = "XL";
          arr.splice(x + 1, 1);
        } else if (arr[x] == "I" && arr[x + 1] == "X") {
          arr[x] = "IX";
          arr.splice(x + 1, 1);
        } else if (arr[x] == "I" && arr[x + 1] == "V") {
          arr[x] = "IV";
          arr.splice(x + 1, 1);
        }
      }
    }

    for (let indice in num_r) {
      for (let indice_1 in arr) {
        if (indice == arr[indice_1]) {
          resultado += num_r[indice];
        }
      }
    }
    retornoTela.innerHTML = `<p class="re">${resultado}</p>`;
  }
}

var conversor = new Conversor();
