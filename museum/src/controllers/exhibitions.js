const Exhibition = require("../models/exhibition");

  const create = async (req, res) => {
    if (req.body === undefined) {
        res.status(400).json({message: "No exhibition details has been detected."})
    } else {
        try {
            const exhibition = await Exhibition.create(req.body)
            res.status(200).json(exhibition)
        } catch (err) {
            res.status(500).json({err})
        }
    }
  }

  const listAll = async (req, res) => {
    try {
        const exhibitions = await Exhibition.find()
        res.status(200).json(exhibitions)
    } catch (err) {
        res.status(500).json({err})
    }
}

  const listOne = async (req, res) => {
      const {id} = req.params;
      try {
          const exhibition = await Exhibition.findById(id);
          res.status(200).json(exhibition);
      } catch (err) {
          res.status(500).json({err});
      }
  };

module.exports = {
    create,
    listAll,
    listOne,
};