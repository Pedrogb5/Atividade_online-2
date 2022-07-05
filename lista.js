lista = ["Helena", "João", "Pedro"];

let nome = prompt("Digite seu nome");

let idade = prompt("Digite sua idade");

if (idade >=18) {
     if (lista.length < 100 ) {
          console.log("Cadastro concluído")
          lista.push (nome);
          console.log(lista)
     }
}
