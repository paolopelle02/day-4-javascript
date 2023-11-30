console.log(area(5, 10)); // Output: 50
function area(l1, l2) {
    return l1 * l2;
  }
  
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(crazySum(3, 3)); // Output: 18
console.log(crazySum(2, 3)); // Output: 5
function crazySum(num1, num2) {
    return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
  }
  
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(boundary(50)); // Output: true
console.log(boundary(200)); //Output: false

function crazyDiff(num) {
    return num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19);
  }
  

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(boundary(50)); // Output: true
console.log(boundary(200)); 
function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
  }
  

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    return str.startsWith("EPICODE") ? str : "EPICODE" + str;
  }
  

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(check3and7(21)); // Output: true
console.log(check3and7(10)); // Output: false

function check3and7(num) {
    return num % 3 === 0 || num % 7 === 0;
  }
  

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(reverseString("EPICODE"));
console.log(reverseString("Hello")); 

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  





/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(upperFirst("hello world")); 
console.log(upperFirst("the quick brown fox"));

function upperFirst(str) {
    return str.toLowerCase().replace(/\b[a-z]/g, (char) => char.toUpperCase());
  }
  

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(cutString("EPICODE")); 
console.log(cutString("hello")); 

function cutString(str) {
    return str.slice(1, -1);
    
  }
  
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
