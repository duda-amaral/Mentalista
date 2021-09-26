var numeroSecreto = parseInt(Math.random() * 11);
var res = document.getElementById("resultado");
var tentativas = 3;
var chutar = document.getElementById("chutar");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (tentativas > 0) {
    if (chute == numeroSecreto) {
      res.innerHTML =
        "Parabéns! Você acertou. <br>Clique em resetar para jogar novamente";
      var chutar = document.getElementById("chutar");
      chutar.disabled = true;
    } else if (chute > 10 || chute < 0) {
      res.innerHTML = "Você deve digitar um número de 0 a 10.";
    } else {
      if (chute > numeroSecreto) {
        tentativas = tentativas - 1;
        res.innerHTML =
          "O número secreto é menor. Restam " + tentativas + " tentativas.";
      } else if (chute < numeroSecreto) {
        tentativas = tentativas - 1;
        res.innerHTML =
          "O número secreto é maior. Restam " + tentativas + " tentativas.";
      }
    }

    if (tentativas == 0) {
      var chutar = document.getElementById("chutar");
      chutar.disabled = true;
      res.innerHTML =
        "Você atingiu o limite de tentativas. <br>Clique em resetar para tentar novamente. <br>O número era: " +
        numeroSecreto;
    }
  }
}

function reset() {
  chutar.disabled = false;
  var res = document.getElementById("resultado");
  numeroSecreto = parseInt(Math.random() * 11);
  res.innerHTML = "Vamos jogar de novo!";
  tentativas = 3;
}