// 30/06/2023

// Array
/* 
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

console.log(Check);
console.log(array[0].join(" - "));

for (let i = 0; i < array[0].length; i++) {
    console.log("Studente N°:", i+1, "\n");
    console.log("Nome:   ", array[0][i]);
    console.log("Età:    ", array[1][i]);
    console.log("Lavoro: ", array[2][i]);
    console.log("ID:     ", array[3][i]);
    console.log("\n");
 
}
 */

// 03/07/2023

function isLegalAge(age) {

    if (age <= 12) {
        console.log("è illegale, Ma va bene lo stesso");
    } else if (age > 12 && age < 18) {
        console.log("è illegale");
    } else{
        console.log("è legale");
    }

    return ;

}


//

const Mattia = {
    ID: 1297,
    nome: "Mattia  ",
    cognome: "Rossi  ",
    età: 18,
    Media: 6.4
}

const Marco = {
    ID: 5683,
    nome: "Marco   ",
    cognome: "Bianchi",
    età: 18,
    Media: 4.2
}

const Luca = {
    ID: 2039,
    nome: "Luca    ",
    cognome: "Verdi  ",
    età: 18,
    Media: 7.8
}

const Giulio = {
    ID: 1983,
    nome: "Giulio  ",
    cognome: "Medico ",
    età: 18,
    Media: 5.6
}

const Giovanni = {
    ID: 2367,
    nome: "Giovanni",
    cognome: "Aiello ",
    età: 18,
    Media: 9.2
}

let esito

let studenti = [Mattia, Marco, Giulio, Luca, Giovanni, 
                Mattia, Marco, Giulio, Luca, Giovanni, 
                Mattia, Marco, Giulio, Luca, Giovanni, 
                Mattia, Marco, Giulio, Luca, Giovanni,
                Mattia, Marco, Giulio, Luca, Giovanni, 
                Mattia, Marco, Giulio, Luca, Giovanni,] // dichiarazione array studenti

let Alessio = { // dichiarazione nuovo studente
    ID: 4905,
    nome: "Alessio ",
    cognome: "Orsini ",
    età: 18,
    Media: 6.1
}
studenti.push(Alessio) // aggiunta nuovo studente all'array studenti

let research = studenti.indexOf(Mattia)

if(studenti[research].Media >= 6){
    esito = "Promosso"
} else { esito = "Bocciato" }

console.log("========================\n");
console.log(studenti[research].ID, "  °  ", studenti[research].nome, " ", studenti[research].cognome, "  °  ", studenti[research].Media, "  °  ", esito);
console.log("\n========================\n");
console.log("Età: ", studenti[research].età), isLegalAge(studenti[research].età);

