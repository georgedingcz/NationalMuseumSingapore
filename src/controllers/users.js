const User = require("../models/user");

const create = async (req, res) => {
  if (req.body === undefined) {
    res
      .status(400)
      .json({ message: "No itinerary details has been detected." });
  } else {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
};

const listAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const listOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const patch = async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .json({ message: "No itinerary details has been detected." });
  } else {
    const { id, name, itinerary } = req.body;
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { name, itinerary },
        { patch: true }
      );
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
};

module.exports = {
  create,
  listAll,
  listOne,
  patch,
};
