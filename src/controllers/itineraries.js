const User = require("../models/user");

  const create = async (req, res) => {
    if (req.body === undefined) {
        res.status(400).json({message: "No itinerary details has been detected."})
    } else {
        try {
            const itinerary = await User.itinerary.create(req.body)
            res.status(200).json(itinerary)
        } catch (err) {
            res.status(500).json({err})
        }
    }
  }

  const listAll = async (req, res) => {
    try {
        const itineraries = await User.itinerary.find()
        res.status(200).json(itineraries)
    } catch (err) {
        res.status(500).json({err})
    }
}

  const listOne = async (req, res) => {
      const {id} = req.params;
      try {
          const itinerary = await User.itinerary.findById(id);
          res.status(200).json(itinerary);
      } catch (err) {
          res.status(500).json({err});
      }
  };

module.exports = {
    create,
    listAll,
    listOne,
};