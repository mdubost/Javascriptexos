let stairs = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
   for (let count = 1; count <= stairs; count++) {
     let spaceArray = Array(stairs - count).fill(" ");
     let signArray = Array(count).fill("#");
     let line = spaceArray.join("") + signArray.join(""); 
     console.log(line);
   }