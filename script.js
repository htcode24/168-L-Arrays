
// 1. Create a simple website or use a website you already have

// 2. Add two new variable arrays and use two Mutator Methods (modify the original array)
/// Mutator Methods: .push(), pop(), unshift(), shift(), splice(), sort(), reverse()

const ghibliFilms = ["Spirited Away", "My Neighbor Totoro", "Ponyo", "Whisper of the Heart", "Nausicaa Valley of the Wind"];
ghibliFilms.push("Boy and the Heron");

ghibliFilms.push("Inception");

let nonGhibli = ghibliFilms.pop();
console.log(nonGhibli);

console.log(ghibliFilms);

const spiritedAwayCast = ["Haku", "Zeniba", "Kamaji", "Lin", "No Face"];
spiritedAwayCast.unshift("Chihiro");
console.log(spiritedAwayCast);
spiritedAwayCast.sort();
console.log(spiritedAwayCast);

// 3. Use two Accessor Methods (Do not modify the original array) and Add two new variable arrays to store them
/// Accessor Methods = concat(), slice(), join(), indexOf(), lastIndexOf(), includes()

let ponyoCast = ["Ponyo", "Sosuke", "Lisa"];
let whisperOfTheHeartCast = ["Shizuku Tsukishima", "Seiji Amazawa", "The Baron", "Muta"];
const ghibliCharacters = spiritedAwayCast.concat(ponyoCast, whisperOfTheHeartCast);
console.log(ghibliCharacters);

console.log(ghibliCharacters.includes("Zeniba"));


