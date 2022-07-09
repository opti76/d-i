//exercise 1
//part1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift(); //Greg removed
people.splice(2,1,"Jason") //James became Jason
people.push("Aviram") // my name added
let indexOfMary = people.indexOf("Mary") //target location of Mary
let sliced = people.slice(-3,3) //-3 counts from end to start
let fooIndex = people.indexOf("foo") //-1 because it doesn't exist in the array
let last = people[people.length - 1] //last item in array

//part2
//1.Using a loop, iterate through the people array and console.log each person.
//2.Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    if (index == 3) 
    break;
    
 
    console.log(element)  
}

//exercise 2















