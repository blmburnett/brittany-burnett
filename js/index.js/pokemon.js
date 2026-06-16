// ===== SELECT PAGE ELEMENTS =====

// Select the output section where Pokémon data will be displayed
const output = document.querySelector("#output");

// Select the buttons
const pokemonBtn = document.querySelector("#pokemonBtn");
const abilityBtn = document.querySelector("#abilityBtn");

// Select the text input
const pokemonNameInput = document.querySelector("#pokemonName");


// ===== HELPER FUNCTION =====

// Get the Pokémon name from the input field
// If the user leaves it blank, default to Pikachu
function getPokemonName() {

  const name = pokemonNameInput.value
    .trim()
    .toLowerCase();

  if (name === "") {
    return "pikachu";
  }

  return name;
}


// ===== POKÉMON INFORMATION BUTTON =====

pokemonBtn.addEventListener("click", function () {

  // Show loading message while data is being fetched
  output.innerHTML = `
    <div class="pokemon-card">
      <h2>Loading Pokémon...</h2>
    </div>
  `;

  const pokemonName = getPokemonName();

  // Fetch Pokémon data from the PokéAPI
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    .then(function (response) {

      if (!response.ok) {
        throw new Error("Pokémon not found");
      }

      return response.json();

    })

    .then(function (data) {

      // Create badges for each Pokémon type
      let typeHTML = "";

      data.types.forEach(function (type) {

        typeHTML += `
          <span class="type-badge">
            ${type.type.name}
          </span>
        `;

      });

      // Display Pokémon information
      output.innerHTML = `
        <div class="pokemon-card">

          <h2>${data.name}</h2>

          <img
            src="${data.sprites.front_default}"
            alt="${data.name}"
          >

          <p>
            <strong>Height:</strong>
            ${data.height}
          </p>

          <p>
            <strong>Weight:</strong>
            ${data.weight}
          </p>

          <p>
            <strong>Base Experience:</strong>
            ${data.base_experience}
          </p>

          <div>
            ${typeHTML}
          </div>

        </div>
      `;

    })

    .catch(function (error) {

      output.innerHTML = `
        <div class="error">
          Pokémon not found. Try another name.
        </div>
      `;

      console.error(error);

    });

});


// ===== POKÉMON ABILITIES BUTTON =====

abilityBtn.addEventListener("click", function () {

  // Show loading message
  output.innerHTML = `
    <div class="pokemon-card">
      <h2>Loading Abilities...</h2>
    </div>
  `;

  const pokemonName = getPokemonName();

  // Fetch Pokémon data
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    .then(function (response) {

      if (!response.ok) {
        throw new Error("Pokémon not found");
      }

      return response.json();

    })

    .then(function (data) {

      // Build ability list items
      let abilitiesHTML = "";

      data.abilities.forEach(function (ability) {

        abilitiesHTML += `
          <li>
            ${ability.ability.name}
          </li>
        `;

      });

      // Display abilities
      output.innerHTML = `
        <div class="pokemon-card">

          <h2>
            ${data.name} Abilities
          </h2>

          <img
            src="${data.sprites.front_default}"
            alt="${data.name}"
          >

          <ul class="ability-list">
            ${abilitiesHTML}
          </ul>

        </div>
      `;

    })

    .catch(function (error) {

      output.innerHTML = `
        <div class="error">
          Pokémon not found. Try another name.
        </div>
      `;

      console.error(error);

    });

});