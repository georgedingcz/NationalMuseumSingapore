const Ticket = require("../models/ticket");

  const create = async (req, res) => {
    if (req.body === undefined) {
        res.status(400).json({message: "No ticket details has been detected."})
    } else {
        try {
            const ticket = await Ticket.create(req.body)
            res.status(200).json(ticket)
        } catch (err) {
            res.status(500).json({err})
        }
    }
  }

  const listAll = async (req, res) => {
    try {
        const tickets = await Ticket.find()
        res.status(200).json(tickets)
    } catch (err) {
        res.status(500).json({err})
    }
}

  const listOne = async (req, res) => {
      const {id} = req.params;
      try {
          const ticket = await Ticket.findById(id);
          res.status(200).json(ticket);
      } catch (err) {
          res.status(500).json({err});
      }
  };

module.exports = {
    create,
    listAll,
    listOne,
};