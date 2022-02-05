function calcular() {
  const simbols = ['_', '-', '@', '*', '+', '#', '&'];
  const letras = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'y',
    'x',
    'z',
  ];

  let senhaGerada = [];
  let senhaString = '';

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  while (senhaGerada.length <= 14) {
    let typeOfCharacter = getRandom(1, 4);

    // insere  letras

    if (typeOfCharacter === 1) {
      let num = getRandom(1, 25);
      senhaGerada.push(letras[num]);
    }

    // insere letras maiusculas

    if (typeOfCharacter === 2) {
      let num = getRandom(1, 25);
      let letra = letras[num];
      senhaGerada.push(letra.toUpperCase());
    }

    // insere simbolos

    if (typeOfCharacter === 3) {
      let num = getRandom(1, 6);
      senhaGerada.push(simbols[num]);
    }

    // insere numeros

    if (typeOfCharacter === 4) {
      let num = getRandom(0, 9);
      senhaGerada.push(num);
    }
  }

  senhaGerada.map((i) => (senhaString += i));

  console.log(senhaString);
  console.log(typeof senhaString);

  console.log(senhaGerada);

  const h1 = document.getElementById('escrever');
  h1.innerText = `Senha gerada: ${senhaString}`;
}
