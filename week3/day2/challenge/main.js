/*exercise 1*/
/*Remove Banana from the array.*/

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let favorite = fruits.splice("1");
console.log(fruits);
console.log(favorite);

/*Sort the array in alphabetical order.*/

let fruits2 = ["Banana", "Apples", "Oranges", "Blueberries"];
let sorted = fruits2.sort();
console.log(sorted);

/*Add “Kiwi” to the end of the array.*/

let fruits3 = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits3.push("Kiwi");
console.log(fruits3);

/*Remove “Apples” from the array. Don’t use the same method as in part 1.*/

let fruits4 = ["Banana", "Apples", "Oranges", "Blueberries"];
delete fruits4[1];
console.log(fruits4);

/*Sort the array in reverse order. (Not alphabetical, but reverse the current Array*/

let fruits5 = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits5.reverse();
console.log(fruits5);

/*exercise 2*/
/*Access and then console.log “Oranges”.*/

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let outcome = moreFruits.indexOf("Oranges"); 
console.log(outcome); /* i got "-1"*/
console.log(moreFruits [1][1][0]);

































