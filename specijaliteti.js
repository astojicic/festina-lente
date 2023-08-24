const specijaliteti = [
    {
      naziv: "Pizza Margherita",
      opis: "Omiljena italijanska pica sa paradajz sosom i mocarelom.",
      cena: 850,
      slika: "img/1.jpg",
    },
    {
      naziv: "Pileća salata",
      opis: "Sveža salata sa piletinom, kukuruzom, paradajzom i rukolom.",
      cena: 650,
      slika: "img/2.jpg",
    },
    {
      naziv: "Hamburger",
      opis: "Sočan hamburger sa goveđim mesom, sirom i povrćem.",
      cena: 950,
      slika: "img/3.jpg",
    },
  ];
  
  function formatirajCenu(cena) {
    return cena.toLocaleString("sr-RS", { style: "currency", currency: "RSD" });
  }
  
  function kreirajSpecijalitet(specijalitet) {
    return `
      <div class="specijalitet">
        <img src="${specijalitet.slika}" alt="${specijalitet.naziv}">
        <div class="naziv">${specijalitet.naziv}</div>
        <div class="opis">${specijalitet.opis}</div>
        <div class="cena">${formatirajCenu(specijalitet.cena)}</div>
      </div>`;
  }
  
  let htmlSpecijaliteti = "";
  for (let i = 0; i < specijaliteti.length; i++) {
  htmlSpecijaliteti += kreirajSpecijalitet(specijaliteti[i]);
  }
  
  const divSpecijaliteti = document.getElementById("specijaliteti");
  divSpecijaliteti.innerHTML = htmlSpecijaliteti;