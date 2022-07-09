/*exercise 1*/

let x = 5;
let y = 2;
if (x > y) {
    alert("x is the biggest number")
}
else if (x < y) {
    alert("y is the biggest number")
}

/*exercise 2*/

let newDog = "Chihuahua";
let length = newDog.length;
let upper = newDog.toUpperCase();
console.log(upper);
console.log(newDog);
if (newDog = "Chihuahua") {
    alert('I love Chihuahuas, it’s my favorite dog breed')
}

else {
    console.log('I dont care, I prefer cats')
}

/*exercise 3*/

let number = prompt('please give me a number')
if (number % 2 == 0) {
    console.log(number + ' is an even number')
}

else {
    console.log(number + ' is an odd number')
}

/*exercise 4*/

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let onlineOffline = users.length
switch (onlineOffline) {
    case 0:

        console.log('no one is online');
        break;

    case 1:
        console.log(`${users[0]} is online`)
        break;

    case 2:
        console.log(`${user[0]} and ${user[1]} are online`)
        break;

    case 3:
        console.log(`${users[0]}, ${users[1]} and ${users[2]} are online`)
        break;
    case 4:
        console.log(`${users} are online`)
        break;


}







