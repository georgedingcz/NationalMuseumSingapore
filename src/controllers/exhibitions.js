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

  const getAllExhibitions = async (req, res) => {
    try {
        const exhibitions = await Exhibition.find();
        res.json(exhibitions);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
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

  const filtered = async (req,res)=>{
    try {
      const exhibitions = await Exhibition.find();
      res.json(exhibitions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
    console.log("test")
  }

module.exports = {
    create,
    getAllExhibitions,
    listOne,
    filtered,
};