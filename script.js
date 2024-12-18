// Dati dei ristoranti
const restaurants = [
    { name: "La Baresana Pizzeria Trattoria", type: "Pizzeria", address: "Strada Arco della Neve, 6", price: "€€" },
    { name: "Piccinni 28", type: "Ristorante/Pizzeria", address: "Indirizzo non specificato", price: "€€-€€€" },
    { name: "Pizza In Forno", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€-€€€" },
    { name: "Ristorante Giampaolo", type: "Ristorante/Pizzeria", address: "Indirizzo non specificato", price: "€€-€€€" },
    { name: "Hagakure", type: "Ristorante etnico (giapponese)", address: "Indirizzo non specificato", price: "€€€" },
    { name: "Gyrosteria Yannis", type: "Ristorante etnico (greco)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Seven Maze", type: "Ristorante etnico (asiatico)", address: "Indirizzo non specificato", price: "€€€" },
    { name: "Xuan", type: "Ristorante etnico (thailandese)", address: "Indirizzo non specificato", price: "€€" },
    { name: "City Spice", type: "Ristorante etnico (indiano)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Laxmi", type: "Ristorante etnico (indiano)", address: "Via Melo da Bari, 223", price: "€€" },
    { name: "L'Albero Che...", type: "Ristorante etnico (vegetariano)", address: "Via Pasubio, 101", price: "€" },
    { name: "Fang Xiang", type: "Ristorante etnico (cinese)", address: "Via Orazio Flacco, 7", price: "€" },
    { name: "Yuzu Sushi", type: "Ristorante etnico (giapponese)", address: "Viale Papa Giovanni XXIII, 24", price: "€€" },
    { name: "Bistrot Brasil", type: "Ristorante etnico (brasiliano)", address: "Strada dei Gesuiti, 14", price: "€€" },
    { name: "Rajni Sonkar – Cucina indiana", type: "Ristorante etnico (indiano)", address: "Via Melo da Bari, 223", price: "€€" },
    { name: "Bakery Santa Rita", type: "Panificio", address: "Strada dei Dottula, 8", price: "€" },
    { name: "Martinelli Bari", type: "Ristorante di pesce", address: "Strada San Giuseppe, 32", price: "€€" },
    { name: "Panificio Fiore", type: "Panificio", address: "Strada Palazzo di Città, 38", price: "€" },
    { name: "Gelateria Gentile", type: "Gelateria", address: "Via San Cristoforo, 1", price: "€" },
    { name: "La Cantina dello Zio", type: "Ristorante", address: "Strada Palazzo di Città, 51", price: "€€" },
    { name: "I Templari", type: "Ristorante", address: "Vico Federico II di Svevia, 32", price: "€€" },
    { name: "Orecchietteria San Nicola", type: "Ristorante", address: "Piazzetta 62 Marinai, 4", price: "€€" },
    { name: "Ristorante Antò - Cucina & Sapori Tipici", type: "Ristorante", address: "Strada Palazzo di Città, 14", price: "€€" },
    { name: "La Ciclatera", type: "Ristorante", address: "Strada Angiola, 23", price: "€€" },
    { name: "Don Fish", type: "Ristorante di pesce", address: "Indirizzo non specificato", price: "€€" },
    { name: "Allegrezza", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Le Nicchie", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Bar Caffetteria San Nicola", type: "Bar/Caffetteria", address: "Indirizzo non specificato", price: "€" },
    { name: "Pescobar", type: "Ristorante di pesce", address: "Indirizzo non specificato", price: "€€" },
    { name: "Lo Svevo - Birreria", type: "Birreria", address: "Indirizzo non specificato", price: "€" },
    { name: "La Locanda dell'Elfo", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Pizzeria El Castillo", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "La Cecchina", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Tuccio - Cucina e Caffè", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Ristorante Opera", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Stefy's Cattedral Coffee", type: "Caffetteria", address: "Indirizzo non specificato", price: "€" },
    { name: "Friggitoria - Pescheria 'Frisc & Mang' Bari", type: "Friggitoria/Pescheria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Pasticceria Annamaria", type: "Pasticceria", address: "Indirizzo non specificato", price: "€" },
    { name: "Rosticceria Oriente", type: "Rosticceria", address: "Indirizzo non specificato", price: "€" },
    { name: "Ghiotto Panzerotto", type: "Rosticceria", address: "Indirizzo non specificato", price: "€" },
    { name: "Windigo Saloon", type: "Pub/Steakhouse", address: "Indirizzo non specificato", price: "€€" },
    { name: "Fishfizz", type: "Ristorante di pesce", address: "Indirizzo non specificato", price: "€€" },
    { name: "Gola Gourmet Kitchen", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Taiki Japanese Restaurant", type: "Ristorante etnico (giapponese)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Gulp", type: "Ristorante/Birreria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Basho Crazy Sushi", type: "Ristorante etnico (giapponese)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Elite Pizza", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Ristorante William's", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Fat Smoke", type: "Steakhouse/Barbecue", address: "Indirizzo non specificato", price: "€€€" },
    { name: "Fermento Beershop", type: "Birreria/Pub", address: "Indirizzo non specificato", price: "€" },
    { name: "3 Chic Cafe - Colazione Firmata", type: "Caffetteria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Ristorante Carducci", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "SENSI Restaurant", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Senti Che Pizza! Bari", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "L'Officina di Soal", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Makai - Fusion Restaurant", type: "Ristorante Fusion", address: "Indirizzo non specificato", price: "€€" },
    { name: "POP Bottega Urbana", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Villa de Grecis Eventi", type: "Ristorante/Eventi", address: "Indirizzo non specificato", price: "€€" },
    { name: "MOOD Enjoy Different", type: "Ristorante/Fusion", address: "Indirizzo non specificato", price: "€€" },
    { name: "Osteria del Porto Poggiofranco", type: "Ristorante di pesce", address: "Indirizzo non specificato", price: "€€" },
    { name: "La Tana del Polpo", type: "Ristorante di pesce", address: "Indirizzo non specificato", price: "€€" },
    { name: "Al Pescatore", type: "Ristorante di pesce", address: "Indirizzo non specificato", price: "€€" },
    { name: "Osteria Le Arpie", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Ristorante Biancofiore", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "La Uascezze", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Pizzeria Enzo e Ciro", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Pizzeria Il Rustico", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Pizzeria Di Cosimo Mauro", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Pizzeria La Baresana", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Kebabberia Ateneo", type: "Kebabberia", address: "Indirizzo non specificato", price: "€€" },
    { name: "Creperia Cioccolati Italiani", type: "Creperia", address: "Indirizzo non specificato", price: "€€" },
    { name: "Ristorante Il Rustico", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "La Cantina di Cianna Cianne", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Burger Bari", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Pizzeria Da Donato", type: "Pizzeria", address: "Indirizzo non specificato", price: "€€" },
    { name: "Ristorante Il Giardino", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "La Ciclatera", type: "Ristorante", address: "Indirizzo non specificato", price: "€€" },
    { name: "Sushi Tao", type: "Ristorante etnico (giapponese)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Taco Loco", type: "Ristorante etnico (messicano)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Sushi Master", type: "Ristorante etnico (giapponese)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Poke Factory", type: "Ristorante etnico (hawaiiano)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Ristorante Greco Akropolis", type: "Ristorante etnico (greco)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Tex Mex Bari", type: "Ristorante etnico (messicano)", address: "Indirizzo non specificato", price: "€€" },
    { name: "Hummus Bari", type: "Ristorante etnico (mediorientale)", address: "Indirizzo non specificato", price: "€€" },
    { name: "La Creperie", type: "Creperia", address: "Viale della Libertà, 120", price: "€€" },
    { name: "Sushi Zen", type: "Ristorante etnico (giapponese)", address: "Via Bari, 58", price: "€€€" },
    { name: "Poke Paradise", type: "Ristorante etnico (hawaiiano)", address: "Via Napoli, 11", price: "€€" },
    { name: "Sushi Go", type: "Ristorante etnico (giapponese)", address: "Piazza del Ferrarese, 9", price: "€€" },
    { name: "Burgers & Fries", type: "Fast Food", address: "Via Sparano, 102", price: "€" },
    { name: "Taco Bell", type: "Fast Food (Messicano)", address: "Strada del Mare, 55", price: "€€" },
    { name: "Kebab House", type: "Kebabberia", address: "Piazza Aldo Moro, 6", price: "€" },
    { name: "Ristorante La Dolce Vita", type: "Ristorante", address: "Via Calefati, 32", price: "€€€" },
    { name: "Sushi Rolls", type: "Ristorante etnico (giapponese)", address: "Corso Cavour, 40", price: "€€" },
    { name: "Il Ristorante Vegetariano", type: "Ristorante etnico (vegetariano)", address: "Via San Pasquale, 15", price: "€€" },
    { name: "La Pizzeria del Corso", type: "Pizzeria", address: "Corso Vittorio Emanuele, 17", price: "€" },
    { name: "Ristorante Il Mare", type: "Ristorante di pesce", address: "Via San Giovanni, 28", price: "€€€" },
    { name: "Caffè e Cioccolato", type: "Caffetteria", address: "Via Manzoni, 21", price: "€€" },
    { name: "Bistrot Fusion", type: "Bistrot", address: "Strada Lamberti, 9", price: "€€" },
    { name: "La Baguette", type: "Paninoteca", address: "Piazza Roma, 12", price: "€" },
    { name: "Sushi Garden", type: "Ristorante etnico (giapponese)", address: "Via Dante, 43", price: "€€" },
    // Punti per Kebab
{ name: "Kebab Bari", type: "Kebabberia", address: "Via M. D’Azeglio, 11", price: "€" },
{ name: "Shawarma King", type: "Kebabberia", address: "Via Carlo S. Nitti, 55", price: "€" },
{ name: "Kebab Istanbul", type: "Kebabberia", address: "Via Gioia del Colle, 5", price: "€" },

// Punti per Dolci e Gelati
{ name: "Pasticceria Caffè Venezia", type: "Pasticceria", address: "Via Manzoni, 128", price: "€" },
{ name: "La Dolce Vita", type: "Pasticceria", address: "Via Sparano da Bari, 125", price: "€" },
{ name: "Gelateria Amandola", type: "Gelateria", address: "Viale Einaudi, 3", price: "€" },
{ name: "Caffè Pasticceria Colonna", type: "Pasticceria", address: "Piazza del Ferrarese, 12", price: "€" },
{ name: "Siciliana Dolci e Gelati", type: "Gelateria", address: "Via Cardassi, 23", price: "€" },
{ name: "Dolce & Salato", type: "Pasticceria", address: "Via Giuseppe Mazzini, 40", price: "€" },

// Punti Vegetariani e Vegani
{ name: "L'Albero Che...", type: "Ristorante", address: "Via Pasubio, 101", price: "€" },
{ name: "Vegano e Basta", type: "Ristorante", address: "Corso Cavour, 55", price: "€" },
{ name: "Mamma Vegana", type: "Ristorante", address: "Via Benedetto Croce, 45", price: "€" },

// Ristoranti Cinesi
{ name: "Ristorante Fang Xiang", type: "Ristorante etnico (asiatico)", address: "Via Orazio Flacco, 7", price: "€" },
{ name: "Zhong Hua", type: "Ristorante etnico (asiatico)", address: "Via Sparano da Bari, 63", price: "€" },
{ name: "Ristorante La Cina", type: "Ristorante etnico (asiatico)", address: "Via Camillo Rosalba, 8", price: "€" },

// Ristoranti Indiani
{ name: "Biryani Bar", type: "Ristorante etnico (indiano)", address: "Via delle Baleari, 5", price: "€" },
{ name: "Curry House", type: "Ristorante etnico (indiano)", address: "Via Dante, 72", price: "€" },

// Altri Ristoranti Etnici
{ name: "Ristorante Marocchino", type: "Ristorante etnico (marocchino)", address: "Via Prezzolini, 43", price: "€" },
{ name: "Ristorante Messicano El Pueblo", type: "Ristorante etnico (messicano)", address: "Via Giuseppe Mazzini, 12", price: "€" },

// Yogo - Dolci
{ name: "Yogo", type: "Gelateria", address: "Viale degli Japigiani, 60", price: "€" }

    
];


// Funzione per visualizzare i ristoranti nella tabella
function displayRestaurants(filteredRestaurants) {
    const tableBody = document.getElementById("restaurantTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";

    filteredRestaurants.forEach(restaurant => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${restaurant.name}</td>
            <td>${restaurant.type}</td>
            <td>${restaurant.address}</td>
            <td>${restaurant.price}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Funzione di filtraggio
function filterRestaurants() {
    const typeFilter = document.getElementById("typeFilter").value.toLowerCase();
    const priceFilter = document.getElementById("priceFilter").value;

    const filtered = restaurants.filter(restaurant => {
        const matchesType = typeFilter ? restaurant.type.toLowerCase().includes(typeFilter) : true;
        const matchesPrice = priceFilter ? restaurant.price.includes(priceFilter) : true;
        return matchesType && matchesPrice;
    });

    displayRestaurants(filtered);
}

// Aggiungere eventi di cambio per i filtri
document.getElementById("typeFilter").addEventListener("change", filterRestaurants);
document.getElementById("priceFilter").addEventListener("change", filterRestaurants);

// Inizializzazione della tabella con tutti i locali
window.onload = () => {
    displayRestaurants(restaurants);
};
