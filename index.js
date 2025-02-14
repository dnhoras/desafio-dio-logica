let heroi = "Battosai"
let totalXp = 10000
let nivel = ""

if(totalXp <= 1000){
    nivel = "Ferro"
   } else if (totalXp<= 2000){
    nivel = "Bronze"
   } else if (totalXp<= 5000){
     nivel = "Prata"
   } else if (totalXp<= 7000){
    nivel = "Ouro"
   } else if (totalXp<= 8000){
    nivel = "Platina"
   } else if (totalXp<= 9000){
    nivel="Ascendente"
   } else if (totalXp<= 10000){
    nivel="Imortal"
   } else {
    nivel= "Radiante"
   }
  console.log("O herói de nome " + heroi + " está no nível " + nivel) 