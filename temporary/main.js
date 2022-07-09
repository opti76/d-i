
//exercise 1

for (let index = 0; index <=15; index++)
index %2
? console.log(`${index} is an odd number`)
: console.log(`${index} is an even number`)

//exercise 2

let names= ["john", "sarah", 23, "Rudolf",34]
for (let index = 0; index < names.length; index++) {
    let name = names[index]
    if(typeof name !== "string") continue
    else {
        if (name[0] !== name[0].toUpperCase()) {
            name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`
        }
        console.log(name)
    }
}

//-------------------------------------------------------//




