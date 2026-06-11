const output = document.getElementById("output");

function getName() {
  const name = document.getElementById("pokemonInput").value.trim().toLowerCase();
  return name;
}

// -------------------------
// ENDPOINT 1: BASIC INFO
// -------------------------
function loadBasicInfo() {
  const name = getName();

  if (!name) {
    output.innerHTML = "Please enter a Pokémon name.";
    return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      if (!res.ok) throw new Error("Pokémon not found");
      return res.json();
    })
    .then(data => {
      output.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" />
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
      `;
    })
    .catch(err => {
      output.innerHTML = "Error: Pokémon not found.";
      console.error(err);
    });
}


// -------------------------
// ENDPOINT 2: SPECIES INFO
// -------------------------
function loadSpeciesInfo() {
  const name = getName();

  if (!name) {
    output.innerHTML = "Please enter a Pokémon name.";
    return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    .then(res => {
      if (!res.ok) throw new Error("Species not found");
      return res.json();
    })
    .then(data => {
      const flavor = data.flavor_text_entries
        .find(entry => entry.language.name === "en");

      output.innerHTML = `
        <h2>${data.name.toUpperCase()} Species Info</h2>
        <p>${flavor ? flavor.flavor_text : "No description available."}</p>
        <p>Habitat: ${data.habitat?.name || "Unknown"}</p>
        <p>Generation: ${data.generation.name}</p>
      `;
    })
    .catch(err => {
      output.innerHTML = "Error loading species data.";
      console.error(err);
    });
}