let rank = rankeamento (65,5)
let nivel = ""

function rankeamento (numVitoria, numDerrota){
 let saldo = numVitoria - numDerrota
 return saldo
}
if(rank <= 10){
    nivel = "Ferro"
   } else if (rank <= 20){
    nivel = "Bronze"
   } else if (rank <= 50){
     nivel = "Prata"
   } else if (rank <= 80){
    nivel = "Ouro"
   } else if (rank <= 90){
    nivel = "Diamante"
   } else if (rank <= 100){
    nivel="Lendário"
   } else {
    nivel= "Imortal"
   }
  console.log("O herói tem saldo de " + rank + " está no nível " + nivel)