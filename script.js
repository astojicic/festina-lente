const kontaktForma = document.querySelector('#kontakt form');
kontaktForma.addEventListener('submit', function(event) {

  const imeInput = kontaktForma.querySelector('#ime');
  const emailInput = kontaktForma.querySelector('#email');
  const porukaInput = kontaktForma.querySelector('#poruka');

  const ime = imeInput.value;
  const email = emailInput.value;
  const poruka = porukaInput.value;
  alert(`Ime: ${ime}\nEmail: ${email}\nPoruka: ${poruka}`);

  kontaktForma.reset();
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function submitForm(event) {
  event.preventDefault(); 
  const imeInput = document.getElementById('ime');
  const prezimeInput = document.getElementById('prezime');
  const emailInput = document.getElementById('email');
  const brojOsobaInput = document.getElementById('broj-osoba');
  const datumInput = document.getElementById('datum');
  const vremeInput = document.getElementById('vreme');

  if (imeInput.value.trim() === '' ||
      prezimeInput.value.trim() === '' ||
      emailInput.value.trim() === '' ||
      brojOsobaInput.value.trim() === '' ||
      datumInput.value.trim() === '' ||
      vremeInput.value.trim() === '') {
    alert('Molimo Vas da popunite sva polja.');
    return;
  }
  if (!isValidEmail(emailInput.value)) {
    alert('Unesite ispravnu email adresu.');
    emailInput.style.backgroundColor = '#ec0d0d';
    return;
  }
  alert('Uspešno ste rezervisali sto!');
}

const forma = document.getElementById('rezervacija-forma');
forma.addEventListener('submit', submitForm);



