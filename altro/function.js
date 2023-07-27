function isLegalAge(age) {
    
    if (age <= 12) {
        console.log("è illegale, Ma va bene lo stesso");
    } else if (age > 12 && age < 18) {
        console.log("è illegale");
    } else{
        console.log("è legale");
    }

    return age;

}

console.log(isLegalAge(14));

