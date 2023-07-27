function aggiustaDimensioni(){
    let titolo = document.getElementById('titolo');

    titolo.style.fontSize = "24px";
    titolo.style.fontWeight = "bold";
    titolo.style.color = "#252525";
}

function addElement(){
    const input = document.getElementById("input");
    const NewEl = document.createElement("p")
    NewEl.innerHTML = input.value;

    let testo = document.getElementById("testo");

    testo.appendChild(NewEl);
}