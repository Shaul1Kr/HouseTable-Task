const createHouse = (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json("Ok");
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};
const getAllHouses = (req, res) => {
  try {
    console.log(req.params, req.body);
    res.status(201).json("Ok1");
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};
const updateHouseRec = (req, res) => {
  try {
    console.log(req.params);
    res.status(201).json("Ok2");
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { createHouse, getAllHouses, updateHouseRec };
