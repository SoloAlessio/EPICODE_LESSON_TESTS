console.log("\n");
const lorem = "Casa"

// .toUpperCase() .toLowerCase()

console.log("Stringa Originale: ", lorem, "\n");
console.log(lorem.toUpperCase());
console.log(lorem.toLowerCase());

console.log("\n");
//includes()

console.log(lorem.toUpperCase().includes("LOREM"));
console.log(lorem.toLowerCase().includes("LOREM"));

console.log("\n");
// .concat()

console.log(lorem.toUpperCase().concat(" MAIUSCOLO"));
console.log(lorem.toLowerCase().concat(" minuscolo"));

console.log("\n");
// .repeat()

console.log(lorem.repeat(3));

console.log("\n");
// replace()

console.log(lorem.replace("Lorem", "Ipsum"));

console.log("\n");
// replaceAll()

console.log(lorem.replaceAll("Lorem", "Ipsum"));

console.log("\n");
//slice()

console.log(lorem.slice(0, 4));


// Funzione inverti parola
let parola = ""

for (let i = lorem.length-1; i >= 0; i--) {
    parola = parola + lorem[i];
    
}

console.log(lorem, "al contrario è:", parola);