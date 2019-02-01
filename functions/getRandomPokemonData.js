import getRandomNumber from "./getRandomNumber";

const getRandomPokemonData = async (startRange = 1, endRange = 803) => {
  const randomNumber = await getRandomNumber(startRange, endRange);
  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;
  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

export default getRandomPokemonData;
