// const { Invoices } = require("../../models");

exports.index = async (req, res, next) => {
  const result = await Invoices.findAll();

  res.json({ data: result });
};

exports.store = async (req, res, next) => {
  const result = await Invoices.create(req.body);

  if (!result) {
    res.status(500).json({ msg: "Internal Server Error" });
  }

  res.json({ msg: "Created !" });
};
