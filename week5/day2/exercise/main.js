//Exercise 1

let header1 = document.querySelector("h1")
console.log(header1)




document.querySelector("p:nth-of-type(4)").remove()
let header2 = document.querySelector("h2")
header2.addEventListener("click", (event) => {
    header2.style.backgroundColor = "red"
    
})

let header3 = document.querySelector("h3")
header3.addEventListener("click", (event) => {
    header3.style.display = "none"
    
})

let myP = document.querySelectorAll("p")
let button = document.createElement("button")
button.innerText = "Button"
button.style.width = "100px"
button.style.height = "30px"
button.style.cursor = "pointer"
document.querySelector("article").appendChild(button)
button.addEventListener("click", (event) => {
    for (let i = 0; i < myP.length; i++) {
        myP[i].style.fontWeight = "bold";
    }
})
//Exercise 2

let myForm = document.querySelector("form")
console.log(myForm)
let allInputs = document.querySelectorAll("input[id]")
console.log(allInputs)
let inputNames = document.querySelectorAll("input[name]")
console.log(inputNames)


myForm.onsubmit = function () {
    if (!document.querySelector("#fname").value) {
        alert("All fields must be filled")
        return false; 
        
        
        
    }
    if (!document.querySelector("#lname").value) {
        alert("All fields must be filled")
        return false;
    }
    else {
        myForm.submit()
    }
  
}



    







