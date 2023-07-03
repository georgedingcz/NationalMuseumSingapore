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
  const { id, itinerary } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's itinerary based on the provided itinerary data
    for (const item of itinerary) {
      const { selectedCardId, selectedCardTitle } = item;
      const itineraryElement = user.itinerary.find(
        (element) => element.selectedCardId.equals(selectedCardId)
      );
      if (itineraryElement) {
        itineraryElement.selectedCardTitle = selectedCardTitle;
      } else {
        user.itinerary.push({ selectedCardId, selectedCardTitle });
      }
    }

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};







module.exports = {
  create,
  listAll,
  listOne,
  patch,
};
