const notFound = (req, res) => {
  console.log("nor found middle ware");
  return res.status(404).send("Route does not exist");
};

module.exports = notFound;
