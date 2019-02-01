const getRandomNumber = async (startRange, endRange) => {
  return Math.floor(Math.random() * (endRange - startRange) + startRange);
};

export default getRandomNumber;
