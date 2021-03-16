// SPREAD DESTRUCTURING FUNCTION EXERCISE

// #1a
const jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
];

// #1b
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
};
seeDinos(...jPDinos);

// #2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};
console.log("========");
// #2b
function seeCharacters({ellieSattler}){
    console.log(ellieSattler);
};
seeCharacters(jPCharacters);

// BONUS

// 3a
function seeJPMovies([{one, two, three}, {four, five}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
  }
  seeJPMovies(jurrasicParkMovies);