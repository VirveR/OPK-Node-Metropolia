# Oppimispäiväkirja - Node.js (3 op), Metropolia AMK

Omassa tutkinnossa vapaavalintaisiin opintoihin, koska en malttanut odottaa, että Backend Web Development -profiloiva moduuli tulee vastaan opetussuunnitelmassa.

Alku tästä päiväkirjasta on vähän kuivaa luettavaa, mutta loppua kohden käy (toivottavasti) mielenkiintoisemmaksi. Ainakin oma mielenkiintoni on kasvanut sitä 
mukaa, mitä monimutkaisempiin asioihin on päässyt pureutumaan.

- [x] Luku 1: Johdanto, ei koodia
- [x] Luku 2: Node.js ja kehitystyökalujen perusteet, ei koodia
- [x] Luku 3: Verkkopalvelimen luonti Node.js:llä, koodit kansiossa luku3
- [x] Luku 4: Express-palvelun käyttö, koodit kansiossa luku4
- [x] Luku 5: REST-sovellusliittymä, koodit kansiossa luku5
- [x] Luku 6: Tietokannan [postgreSQL] käyttö Node.js-sovelluksissa, koodit kansiossa lego
- [x] Luku 7: MongoDB-tietokannan käyttö Node.js-sovelluksissa, koodit kansiossa luku7
- [x] Luku 8: Testaus, koodit kansiossa lego
- [x] Luku 9: REST APIn suojaus, koodit kansiossa lego
- [x] Luku 10: Mallimoottorit, koodit kansiossa lego
- [ ] Luku 11: Julkaisu, ei koodia

## 27.-29.4.2023

Kävin läpi opetusmateriaalin sekä tein esimerkit ja tehtävät. Seuraavaksi käyn luvut läpi tarkemmin ja 
rakennan niiden mukaan omaa Lego-aiheista sovellustani. Tutustun tarkemmin asioihin, joista jäi ensimmäisen 
kierroksen jälkeen epävarmuutta.

### Luku 2: Node.js ja kehitystyökalujen perusteet

Kävin Node.js:n sivustolla https://nodejs.org/en ja kuvitelmat, että ymmärrän asiasta jotain, karisivat. 
Luulen kuitenkin osaavani tarvittaessa hakea dokumentaatiosta tietoa.

### Luku 3: Verkkopalvelimen luonti Node.js:llä

Loin tämän kurssin harjoituskoodeille repositoryn GitHubiin. Tutustuttuani package.json-dokumentaatioon 
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
Tsekkasin niiden dokumentaation (splicen parametrit: aloitusindeksi, montako korvataan, korvaavat alkiot; palauttaa poistetut alkiot; 
toSpliced tekee saman, mutta säilyttää alkuperäisen taulukon ja palauttaa uuden).

## 30.4.2023

### Luku 6: Tietokannan käyttö Node.js-sovelluksissa

Loin PostgreSQL:ään uuden tietokannan Legoja varten ja uuden kansion. Asensin Expressin, body-parserin ja pg:n. 
Loin taas uuden palvelimen. Seuraavissa luvuissa lisään uudet asiat mahdollisuuksien mukaan tähän. Lisäsin tietokannan konfiguraatiotiedoston 
ja muotoilin tiedostorakenteen niin, että tietokantakyselyt on omassa tiedostossaan db-kansiossa ja niitä kutsutaan aloitustiedoston 
REST-päätepistetoiminnoista. Kaikki toimii ja muutokset näkyvät niin sivulla kuin tietokannassakin.

Parametrisoidut kyselyt olikin tuttuja PHP:n puolelta.

(Loppupäiväksi eksyin side questille rakentamaan blogisivustoa palvelimineen 
[tämän tutoriaalin](https://dev.to/themodernweb/fullstack-how-to-create-a-working-blogging-website-with-pure-html-css-and-js-in-2021-9di) 
mukaan sekä tutustumaan [Firebase](https://firebase.google.com/)-palveluun.)

## 1.5.2023

### Luku 7: MongoDB-tietokannan käyttö Node.js-sovelluksissa

Olin luonut tilin, käyttäjän ja tietokannan [MongoDB:n Atlas-palveluun](https://www.mongodb.com/atlas/database) jo ensimmäisellä kierroksella. 
Nyt tein sinne uuden tietokannan 'legopaivakirja', ja sinne taulun 'osat'. Loin uuden kansion ja uuden palvelimen. Asensin mongoosen. 
(Ensimmäisellä kierroksella minulla tuli ongelmia sen kanssa, että asensin uusimman version mongoosesta, ja siinä olikin parista tarvittavasta 
funktiosta takaisinkutsufunktiolliset versiot deprecated. Teen tämän harjoituksen nyt samalla versiolla, mitä ohjemateriaalissa käytetään.) 
Loin uuden kansion malleille ja sinne tiedoston 'osan' mallille. Loin tiedoston reitittimelle ja reiteille. (Totesin, ettei MongoDB tykkää suomesta. 
'osat' ei ollut hyvä taulun nimi. Get ei löytänyt 'osia' sieltä, ja uusi 'osa' meni automaattisesti luotuun tauluun 'osas'. Tiedänpähän nyt tämänkin.) 
Lisäsin pyydetyt reitit ja testasin niiden toiminnan Postmanilla. Kaikki toimii niin kuin pitää.

(Kertasin async/await-syntaksin. 'async' on avainsana, joka kertoo, että funktion sisällä tapahtuu asynkronisia asioita. 'await' on toiminto funktion 
sisällä, joka keskeyttää funktion suorituksen, kunnes on saanut tarvitsemansa.)

Seuraavaksi poistin mongoosen asennuksen ja asensin sen tilalle uusimman version, ja aloin selvittää, miten muokkaus ja poisto pitäisi
uusimmassa versiossa hoitaa. Try/catch-rakenteella sain toimimaan.

Tuhosin tähän harjoitukseen liittyvät tietokannat ja projektin MongoDB:ssa, joten tietokantayhteydet ei tee mitään.

### Luku 8: Testaus

Jatkoin tässä tätä harjoitusta lego-kansiossa. Asensin Mocha-testausviitekehyksen ja chai-väitekirjaston. Loin uuden kansion testitiedostoille ja 
uuden testitiedoston 'osat'-tauluun kohdistuville kyselyille. Lisäsin testifunktiot, ja testit menee läpi.

Chai-väitteet oli varsin hauskoja ja ihmisystävällisiä. Hauska toiminto.

### Luku 9: REST APIn suojaus

JsonWebToken luo ja tarkistaa kirjautumistunnuksia ja bcryptillä salataan salasanoja. Asensin nämä lego-kansioon. Lisäsin käyttäjille taulun pg-tietokantaan 
ja tauluun testikäyttäjän. Loin db-kansioon tiedoston 'kayttajat'-tauluun kohdistuville kyselyille. Loin uuden kansion 'services' ja sinne tiedoston 
'authenticate'. Lisäsin tiedostoon funktiot sisäänkirjautumiselle ja käyttäjän todentamiselle. Lisäsin REST-päätepisteen kirjautumiselle ja lisäsin muihin
päätepisteisiin todentamisen. Testasin toiminnot Postmanilla ja kaikki toimii.

Tämä harjoitus vaati vähän ajattelemista, joten kirjoitan tähän auki, mitä koodissa tapahtuu.

1. käyttäjä kirjautuu sisään: palvelin kutsuu authenticaten kirjaamistoimintoa
2. 'kirjaa' saa pyynnön body-osasta käyttäjän antamat spostin ja selkokielisen salasanan
3. 'kirjaa' kutsuu kayttajat-tiedoston toimintoa, joka hakee käyttäjän hashatun salasanan tietokannasta spostin perusteella
4. jwt:lle laitetaan sposti ja aloitussivulla ympäristömuuttujaan laitettu supersalainen sala-avain, takaisin saadaan token
5. bcrypt vertaa käyttäjän antamaa selkokielistä salasanaa tietokannan hashattuun salasanaan
6. jos salasanat täsmää, 'kirjaa' lähettää vastauksessa tokenin
7. token otetaan jemmaan (tässä harjoituksessa ihan vaan leikepöydälle)
8. kun sisäänkirjautunut käyttäjä nyt lähettää pyyntöjä muihin päätepisteisiin, pyynnöt menevät ensin authenticate-tiedoston 'todenna'-toiminnolle
9. 'todenna' kutsuu jwt:n verify-toimintoa ja lähettää sille tokenin sekä supersalaisen sala-avaimen
10. jos jwt:n todennus onnistuu, suoritetaan seuraava toiminto eli edetään sille päätepisteelle, mihin käyttäjä oli menossa

### Luku 10: Mallimoottorit

Jatkan edelleen lego-kansiossa. Asensin sinne Pug-mallimoottorin. Loin sivumalleille 'views'-kansion ja... niin... edelleen..., mutta sitten alkoi ajatus 
Hello World-tyyppisestä jatkosta tuntua tylsältä. Rakentelin sisäänkirjautumissivun Pugilla + oma CSS. Pugilla oli vaikeuksia löytää CSS:ssä määritettyä 
taustakuvaa, joten päädyin lisäämään projektiin static-määritykset ja public-kansion. Sain sisäänkirjautumisen myös toimimaan html-lomakkeen kautta, mutta 
tällä hetkellä sen jälkeen ruudulle lävähtää pelkkä token. Jatkan huomenna tutkimuksia (tämän kurssin laajuudesta) eteenpäin, kuinka saatua tokenia pitäisi
käsitellä ja ohjaan käyttäjän sisään kirjautuneena edelleen. Alan päästä kärryille tästä hommasta.

## 2.5.2023

Lopetan oppimispäiväkirjan tähän. Projekti jatkuu [seuraavassa repositoryssä](https://github.com/VirveR/NodeJS-Pug-projekti) . Laitan tänne vielä täpän
Luvun 11 kohdalle, jahka se on julkaistu (todennäköisesti Firebasessa).

PS. Etsin töitä sovelluskehityksen parissa. CV:ni voi tsekata [täältä](https://virver.github.io/) . Myös lisää oppimispäiväkirjoja ja muita projekteja 
tulossa kesän mittaan.








