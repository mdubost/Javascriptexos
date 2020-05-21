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

  console.log("1. Est-ce que tous les livres ont été au moins empruntés une fois ?");
  for(let index in books) {
    if(books[index].rented > 0) {
      console.log("Les livres ont tous été empruntés au moins une fois");
    }
    else {
      console.log("Certains livres n'ont jamais été empruntés");
    }
  }

console.log("2. Quel est livre le plus emprunté ?")

  let u
  n = 0

for (let index in books) {

  if (books[index].rented > n) {
    n = books[index].rented
    u = books[index]
  }
}

console.log(u)



console.log("3. Quel est le livre le moins emprunté ?")

for (let index in books) {

if (books[index].rented < n) {
  n = books[index].rented
  u = books[index]
}
}

console.log(u)


  console.log("4. Quel est le livre avec l'id 873495 ?");
  {
    let book873495 = books.find(element => element.id === 873495) // id unique par livre => find
    console.log(book873495.title)
  }


  console.log("5. Supprime le livre avec l'id 133712");
  {
    let book133712Index = books.findIndex(element => element.id === 133712)
    let deletedBook = books[book133712Index].title
    books.splice(book133712Index,0)
    console.log(books)
    console.log(`${deletedBook} a été supprimé`)
  }

  console.log("6. Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
array = []
for (let index in books) {

  array.push(books[index].title)

}

console.log(array.sort())
