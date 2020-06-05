# Exos Javascript de base

Pour ce projet, nous allons reprendre des exercices basiques de programmation que tu as déjà effectués pendant tes premières semaines chez THP. Ce sera l'occasion pour toi de voir le progrès que tu as réalisé et le chemin parcouru car ta problématique ne sera plus de résoudre le problème (tu l'as déja fait) mais de passer d'un langage à un autre.

2.1. Hello World
Qui dit nouveau langage dit "Hello world"

2.1.1. Bonjour
Créé un script script_1.js qui affichera "Bonjour, monde !" dans la console. Voici les lignes que tu dois voir dans ta console :

"Bonjour monde"
2.1.2. Salut
Customise le script script_1.js qui te demandera ton prénom avec un prompt. Tu stockeras cette entrée dans une variable et tu afficheras : "Bonjour, prénom !" dans la console.

2.2. Opérations & boucles
2.2.1 Calculs rapides
Créé un script script_2.js qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur. Petit exemple rapide : factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1

Voici ce que dois faire le script :

// Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"
2.2.2 Pyramide de Mario
Ah la pyramide de Mario du pré-parcours. Que de bons souvenirs. Tu vas écrire un script appelé script_3.js

Voici ce que devra afficher la console :

"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
#####
2.3. Analyses de données
2.3.1. Startup Nation
Tu es en train d'écrire un livre sur les entrepreneurs américains et tu te renseignes sur leurs dates de naissance pour voir si tu ne peux pas identifier un millésime à succès.

Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus et leurs dates de naissance.

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :

Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
Sors une array qui contient le prénom et le nom des entrepreneurs ;
Quel âge aurait chaque inventeur aujourd'hui ?
Trie les entrepreneurs par ordre alphabétique du nom de famille.
2.3.2. Bibliothécaire
C'est ton premier jour de stage au CDI du collège du coin. Tu dois aider la bibliothécaire à faire des statistiques dans la base de données de livres du collège et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :

Est-ce que tous les livres ont été au moins empruntés une fois ?
Quel est livre le plus emprunté ?
Quel est le livre le moins emprunté ?
Trouve le livre avec l'ID: 873495 ;
Supprime le livre avec l'ID: 133712 ;
Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
