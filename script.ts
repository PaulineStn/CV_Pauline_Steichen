// script.ts
const nomPrenom = document.getElementById('nom-prenom') as HTMLElement;
const email = document.getElementById('email') as HTMLElement;
const telephone = document.getElementById('telephone') as HTMLElement;
const adresse = document.getElementById('adresse') as HTMLElement;
const linkedin = document.getElementById('linkedin') as HTMLElement;

function updatePersonalInfo(nom: string, mail: string, phone: string, address: string, linkedinUrl: string) {
    nomPrenom.textContent = nom;
    email.textContent = `Email: ${mail}`;
    telephone.textContent = `Téléphone: ${phone}`;
    adresse.textContent = `Adresse: ${address}`;
    linkedin.textContent = `LinkedIn: ${linkedinUrl}`;
}

// Exemple d'utilisation
updatePersonalInfo("Pauline Steichen", "steichen.pauline@gmail.com", "06 98 51 87 97", "6 Rue Sevoulle, 06410 Biot", "linkedin.com/in/steichenpauline");
