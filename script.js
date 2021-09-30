// 1a
const jedi = [];

// 1b
jedi[jedi.length] = "Luke";

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1d
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop("Obi-wan Kenobi");
console.log(jedi);

// 1g
jedi.shift("Yoda");
console.log(jedi);

// 2a
const sithLords = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
]

// 2b
const imperialOfficers = [
    "Grand Moff Tarkin",
    "Orson Krennic"
]

// 2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// 2d
starWarsVillians.slice(0, 2);
console.log(starWarsVillians);

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}

// 3b
console.log(droids[`astromech`]);

// 3c
console.log(droids.protocol);

// 3d
(droids["assassin"]) = "IG-11";
console.log(droids["assassin"]);

// BONUS
// 4
console.log(starWarsVillians[0][6]); 
// 5


// 6a
const starWarsMovies = {
    Object1: {
       epiosodeOne: "The Phantom Menace",
     episodeTwo: "Attack of the Clones",
     episodeThree: "Revenge of the Sith"
},

Object2: {
    episodeFour: "A New Hope",
    episodeFive: "The Episode Strikes Back",
    episodeSix: "Return of the Jedi"
},

 Object3: {
    episodeSeven: "The Force Awakens",
    episodeEight: "The Last Jedi",
    episodeNine: "The Riser " 
}
};

// 6b
starWarMovies.splice(1, 0, "Solo" ,"Rogue One");
