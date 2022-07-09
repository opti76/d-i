//Exercise 1

let myDiv = document.querySelector("div")
console.log(myDiv)
let myList1 = document.querySelectorAll('li')
myList1[1].innerHTML = "Richard"
myList1[0].innerHTML = "Aviram"
myList1[2].innerHTML = "Aviram"
myList1[3].remove()

//Exercise 2

let myDiv2 = document.querySelector('#usersAndStyle')
myDiv2.style.paddingLeft = "40px"
myDiv2.style.backgroundColor = "lightblue"
let myUl2 = document.querySelectorAll('#usersAndStyle li')
myUl2[0].style.display = "none"
myUl2[1].style.border = "1px solid #000"

document.querySelector('body').style.fontSize = "30px"

//Exercise 3

document.querySelector('#navBar').setAttribute('id', 'socialNetworkNavigation')
let myLi = document.createElement('li')
let myText = document.createTextNode('Logout')
myLi.appendChild(myText)
document.querySelector('#socialNetworkNavigation ul').appendChild(myLi)

//Exercise 4

let allBooks = ["Harry Potter", "Lord Of The Rings"]
let firstBook = (` written by JK Rolling`)
let secondBook = (` written by J. R. R. Tolkien`)
let myFirstBook = allBooks[0] + firstBook
let mySecondBook = allBooks[1] + secondBook
let myBooks = myFirstBook + mySecondBook
let myTable = document.createElement('table')
// GOT STUCK......










