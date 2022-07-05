lista = ["Helena", "João", "Pedro"]

let nome = prompt("Digite seu nome")

let idade = prompt("Digite sua idade")

if (idade >=18) {
     if (lista.length < 100 ) {
		lista.push (nome)
          console.log("Cadastro concluído")
          console.log (lista)
	} 
	else {
		console.log("Acesso negado, limite de participantes já alcançado ")
	}

}
else {
  console.log("Acesso negado, idade não permitida")
}