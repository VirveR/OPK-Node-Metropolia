# OPK-Node-Metropolia
Oppimispäiväkirja kurssista Node.js (3 op), Metropolia AMK

- [x] Luku 1: Johdanto, ei koodia
- [x] Luku 2: Node.js ja kehitystyökalujen perusteet, ei koodia
- [x] Luku 3: Verkkopalvelimen luonti Node.js:llä, koodit kansiossa luku3
- [x] Luku 4: Express-palvelun käyttö, koodit kansiossa luku4
- [x] Luku 5: REST-sovellusliittymä, koodit kansiossa luku5
- [x] Luku 6: Tietokannan [postgreSQL] käyttö Node.js-sovelluksissa, koodit kansiossa lego
- [ ] Luku 7: MongoDB-tietokannan käyttö Node.js-sovelluksissa, koodit kansiossa luku7
- [ ] Luku 8: Testaus, koodit kansiossa lego
- [ ] Luku 9: REST APIN suojaus, koodit kansiossa lego
- [ ] Luku 10: Mallimoottorit, koodit kansiossa lego
- [ ] Luku 11: Julkaisu, koodit?

## 27.-29.4.2023

Kävin läpi opetusmateriaalin sekä tein esimerkit ja tehtävät. Seuraavaksi käyn luvut läpi tarkemmin ja 
rakennan niiden mukaan omaa Lego-aiheista sovellustani. Tutustun tarkemmin asioihin, joista jäi ensimmäisen 
kierroksen jälkeen epäselvyyttä.

### Luku 2: Node.js ja kehitystyökalujen perusteet

Kävin Node.js:n sivustolla https://nodejs.org/en ja kuvitelmat, että ymmärrän asiasta jotain, karisivat. 
Luulen kuitenkin osaavani tarvittaessa hakea dokumentaatiosta tietoa.

### Luku 3: Verkkopalvelimen luonti Node.js:llä

Loin tämän kurssin harjoituskoodeille repositoryn GitHubiin. Tutustuttuani package.json-dokumentaatioon, 
lisäsin myös siihen tiedostoon lisätietoja. Tein ensimmäisen koodausesimerkin, jossa luodaan ensimmäinen 
versio palvelimesta.

### Luku 4: Express-palvelun käyttö

Selasin hieman Expressin dokumentaatiota ja lisää Node.js-dokumentaatiota.

(Tässä kohtaa selvitin, miksi näin esimerkkikoodeissa vähemmän puolipisteitä mihin olen tottunut. 
Google kertoi, että ”Semicolons are not required for JavaScript programming, nevertheless I advice you to use it. 
It makes your code more readable and is actually a good practice, and almost all cool programming languages uses it. 
Take a stand and use it, it's up to you now!” Eli makuasia ilmeisesti; jatkan käyttämistä.)

Asensin tähän kansioon Expressin ja nodemonin. Tein toisen koodausesimerkin, missä useita GET-reittejä ja reittiparametrejä.

### Luku 5: REST-sovellusliittymä
Loin uuden kansion ja uuden palvelimen. Asensin Expressin ja body-parserin. Loin halutut REST-mallin GET-, POST-, 
DELETE- ja PUT-toiminnot ja testasin ne onnistuneesti Postmanin avulla.

JavaScriptin syntaksista ’spread’ ja ’splice’ olivat minulle ei uusia, mutta tuoreempia tuttavuuksia. 
Tsekkasin niiden dokumentaation. (splicen parametrit: aloitusindeksi, montako korvataan, korvaavat alkiot; palauttaa poistetut alkiot; 
toSpliced tekee saman, mutta säilyttää alkuperäisen taulukon ja palauttaa uuden)

## 30.4.2023

### Luku 6: Tietokannan käyttö Node.js-sovelluksissa

Loin PostgreSQL:ään uuden tietokannan Legoja varten ja Git-repositoryyn uuden kansion. Asensin Expressin, body-parserin ja pg:n. 
Loin taas uuden palvelimen. Seuraavissa luvuissa lisään uudet asiat mahdollisuuksien mukaan tähän. Lisäsin tietokannan konfiguraatiotiedoston 
ja muotoilin tiedostorakenteen niin, että tietokantakyselyt on omassa tiedostossaan db-kansiossa ja niitä kutsutaan aloitustiedoston 
REST-päätepistetoiminnoista. Kaikki toimii ja muutokset näkyvät niin sivulla kuin tietokannassakin.

Parametrisoidut kyselyt olikin tuttuja PHP:n pdo-kyselyistä.

(Loppupäiväksi eksyin side questille rakentamaan blogisivustoa palvelimineen [tämän tutoriaalin](https://dev.to/themodernweb/fullstack-how-to-create-a-working-blogging-website-with-pure-html-css-and-js-in-2021-9di) mukaan sekä tutustumaan [Firebase](https://firebase.google.com/)-palveluun.)

## 1.5.2023

### Luku 7: MongoDB-tietokannan käyttö Node.js-sovelluksissa







