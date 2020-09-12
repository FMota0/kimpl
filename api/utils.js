const getId = () => {
  return Number(Math.floor(Math.random() * 0x1000000)).toString(16);
};

module.exports = {
  getId,
};