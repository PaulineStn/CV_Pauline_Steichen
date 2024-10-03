"use strict";
// script.ts
const nomPrenom = document.getElementById('nom-prenom');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const adresse = document.getElementById('adresse');
const linkedin = document.getElementById('linkedin');
function updatePersonalInfo(nom, mail, phone, address, linkedinUrl) {
    nomPrenom.textContent = nom;
    email.textContent = `Email: ${mail}`;
    telephone.textContent = `Téléphone: ${phone}`;
    adresse.textContent = `Adresse: ${address}`;
    linkedin.textContent = `LinkedIn: ${linkedinUrl}`;
}
// Exemple d'utilisation
updatePersonalInfo("Pauline Steichen", "steichen.pauline@gmail.com", "06 98 51 87 97", "6 Rue Sevoulle, 06410 Biot", "linkedin.com/in/steichenpauline");
