// ----------------------------------- A R R A Y S ------------------------------------------------

const prices: (number|string) [] = [1,3,2,2,2,"asdf"];  // Es ejemplo de un array generico, la cantidad de elementos que contenga
prices.push(1);                                         // el array no esta limitado, lo unico es que los elementos deben ser
prices.push("qwer");                                    // o numbers o strings


// ----------------------------------- T U P L E S -------------------------------------------------
let user1: [string,number];       // La cantidad de elementos es limitada, en este caso solo puede tener dos elementos
user1 = ["rony",20];              // en este caso, el primer elemento debe ser si o si un string y el segundo un number

// ------------------------- destructuring tuple -----------------
let [nameUser,ageUser] = user1;
console.log( {nameUser} );
console.log( {ageUser} );




