/* 
- ***Svolgimento per visualizzare in console***
1. Creo un array contenente gli elementi della spesa(listaSpesa)
2. Dichiaro un contatore = 0
3. Creo un ciclo while con la condizione (contatore < listaSpesa.length)
4. Vado a fare un console.log di listaSpesa[contatore]
5. Incremento il contatore (contatore++) dentro il ciclo per far in modo che la condizione dello WHILE si verifichi e non vado in contro a loop
- ***Implementazione del codice in html***
1a. Vado in html e mi creo una UL
2a. Su js mi richiamo l'UL
3a. Nel ciclo vado a creare i miei LI
4a. andrò ad inserire il testo
5a. Aggiungo l'LI all'UL
*/

//1.
const listaSpesa = ['pane', 'pizza', 'burro', 'sugo', 'kiwi',];
//2.
let contatore = 0;
//3.
while(contatore < listaSpesa.length){
  //4.
  console.log(listaSpesa[contatore]);
  //5.
  contatore++;
}
