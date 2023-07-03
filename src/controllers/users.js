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
  const { id, exhibitions } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Iterate over the exhibitions array
    for (const exhibition of exhibitions) {
      const { selectedCardId, selectedCardTitle } = exhibition;

      // Find the itinerary element with matching selectedCardId and update its fields
      const itineraryElement = user.itinerary.find((item) =>
        item.selectedCardId.equals(selectedCardId)
      );
      if (itineraryElement) {
        itineraryElement.selectedCardTitle = selectedCardTitle;
      } else {
        // If the itinerary element doesn't exist, create a new one and push it to the array
        user.itinerary.push({ selectedCardId, selectedCardTitle });
      }
    }

    // Save the updated user
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ err });
  }
};




module.exports = {
  create,
  listAll,
  listOne,
  patch,
};
