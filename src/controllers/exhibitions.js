const Exhibition = require("../models/exhibition");

const create = async (req, res) => {
  if (req.body === undefined) {
    res
      .status(400)
      .json({ message: "No exhibition details has been detected." });
  } else {
    try {
      const exhibition = await Exhibition.create(req.body);
      res.status(200).json(exhibition);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
};

const listAll = async (req, res) => {
  try {
    const exhibitions = await Exhibition.find();
    res.json(exhibitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const listExhibitions = async (req, res) => {
  const { accessibility, status } = req.query;

  try {
    const currentDate = new Date();
    let filter = {};

    if (accessibility) {
      filter.accessibility = accessibility;
    }

    if (status === "current") {
      filter["date.start_date"] = { $lte: currentDate };
      filter["date.end_date"] = { $gte: currentDate };
    } else if (status === "upcoming") {
      filter["date.start_date"] = { $gt: currentDate };
    } else if (status === "past") {
      filter["date.end_date"] = { $lt: currentDate };
    }

    const exhibitions = await Exhibition.find(filter);
    res.json(exhibitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const itineraryListExhibition = async (req, res) => {
  const { accessibility, date } = req.query;

  try {
    let filter = {};

    if (accessibility) {
      filter.accessibility = accessibility;
    }

    if (date) {
      filter["date.start_date"] = { $lte: date };
      filter["date.end_date"] = { $gte: date };
    }

    const exhibitions = await Exhibition.find(filter);
    res.json(exhibitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const listOne = async (req, res) => {
  const { id } = req.params;
  try {
    const exhibition = await Exhibition.findById(id);
    res.status(200).json(exhibition);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  create,
  listAll,
  listOne,
  listExhibitions,
  itineraryListExhibition,
};
