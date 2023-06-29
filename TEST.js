console.log("\n");

// Array

let array = [
    ["Alessio", "Marco", "Giovanni", "Mattia", "Francesco"],
    [19, 31, 25, 18, 24 ],
    ["Studente", "Impiegato", "Camionista", "Studente", "Studente"],
    [1297, 5683, 2039, 1095, 2835]
] 

array[0].push("Luca", "Giulio")
array[1].push(19, 18)
array[2].push("Studente", "Medico")
array[3].push(1485, 5896)

let Check = array[0].includes("Paolo")
/* console.log(Check); */
/* console.log(array[0].join(" - ")); */

for (let i = 0; i < array[0].length; i++) {
    console.log("Studente N°:", i+1, "\n");
    console.log("Nome:   ", array[0][i]);
    console.log("Età:    ", array[1][i]);
    console.log("Lavoro: ", array[2][i]);
    console.log("ID:     ", array[3][i]);
    console.log("\n");
 
}


