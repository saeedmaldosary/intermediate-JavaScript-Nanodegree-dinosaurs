function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

const dinos = [
  {
    species: "Triceratops",
    weight: 13000,
    height: 114,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "First discovered in 1889 by Othniel Charles Marsh",
  },
  {
    species: "Tyrannosaurus Rex",
    weight: 11905,
    height: 144,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "The largest known skull measures in at 5 feet long.",
  },
  {
    species: "Anklyosaurus",
    weight: 10500,
    height: 55,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Anklyosaurus survived for approximately 135 million years.",
  },
  {
    species: "Brachiosaurus",
    weight: 70000,
    height: "372",
    diet: "herbavor",
    where: "North America",
    when: "Late Jurasic",
    fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
  },
  {
    species: "Stegosaurus",
    weight: 11600,
    height: 79,
    diet: "herbavor",
    where: "North America, Europe, Asia",
    when: "Late Jurasic to Early Cretaceous",
    fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
  },
  {
    species: "Elasmosaurus",
    weight: 16000,
    height: 59,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
  },
  {
    species: "Pteranodon",
    weight: 44,
    height: 20,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  },
  {
    species: "Pigeon",
    weight: 0.5,
    height: 9,
    diet: "herbavor",
    where: "World Wide",
    when: "Holocene",
    fact: "All birds are living dinosaurs.",
  },
];

const human = {
  name: "",
  height: {
    feet: "",
    inches: "",
  },
  weight: "",
  diet: "",
};

var humanData = (function () {
  function setHumanData() {
    human.name = document.getElementById("name").value;
    human.height.feet = document.getElementById("feet").value;
    human.height.inches = document.getElementById("inches").value;
    human.weight = document.getElementById("weight").value;
    human.diet = document.getElementById("diet").value;
  }
  return setHumanData;
})();

Dino.prototype.compareHeight = function () {
  if (this.height > human.height) {
    return this.species + " was taller than you";
  } else if (this.height < human.height) {
    return "You are taller than " + this.species + "!";
  } else {
    return "You tall same as " + this.species + " tall";
  }
};

Dino.prototype.compareWeight = function () {
  if (this.weight > human.weight) {
    return this.species + " weight more than you";
  } else if (this.weight < human.weight) {
    return "You are weight more then " + this.species + " weight!";
  } else {
    return "You weight same as " + this.species + " weight";
  }
};

Dino.prototype.compareDiet = function () {
  if (this.diet === human.diet) {
    return "Your diet was same as " + this.species + " diet!";
  } else {
    return "Your diet was not same as " + this.species + " diet!";
  }
};

function randomDinoFact() {
  var randomNumbers = [];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7];
  for (var n = numbers, i = n.length; i--; ) {
    randomNumbers.push(n.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  }

  return randomNumbers;
}

function GenerateTiles() {
  var random = randomDinoFact();
  for (var i = 0; i < dinos.length; i++) {
    let dino = new Dino(
      dinos[i].species,
      dinos[i].weight,
      dinos[i].height,
      dinos[i].diet,
      dinos[i].where,
      dinos[i].when,
      dinos[i].species === "Pigeon"
        ? "All birds are dinosaurs."
        : dinos[random[i]].fact
    );

    var tileHTML = "";
    tileHTML =
      '<div class="grid-item"><h3>' +
      dino.species +
      '</h3><img src="images/' +
      dino.species +
      '.png"><p>' +
      dino.fact +
      "</p></div>";

    document.getElementById("grid").innerHTML += tileHTML;

    if (i == 3) {
      tileHTML =
        '<div class="grid-item"><h3>' +
        human.name +
        '</h3><img src="images/human.png"><p></p></div>';

      document.getElementById("grid").innerHTML += tileHTML;
    }
  }

  document.getElementById("dino-compare").style.display = "none";
}

function displayInfographic() {
  humanData();
  GenerateTiles();
}
