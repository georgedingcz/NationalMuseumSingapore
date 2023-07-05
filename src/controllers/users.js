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

    const updateOperations = itinerary.map((item) => ({
      updateOne: {
        filter: { _id: id },
        update: {
          $set: {
            itinerary: itinerary.map((item) => ({
              exhibitionId: item.selectedCardId,
              exhibitionName: item.selectedCardTitle,
            })),
          },
        },
      },
    }));

    await User.bulkWrite(updateOperations);

    const updatedUser = await User.findById(id);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteItinerary = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $unset: { itinerary: 1 } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  create,
  listAll,
  listOne,
  patch,
  deleteItinerary,
};
