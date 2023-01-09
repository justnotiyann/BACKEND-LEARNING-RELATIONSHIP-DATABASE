const { Settings } = require("../../models");

exports.index = async (req, res, next) => {
  const result = await Settings.findAll();

  res.status(200).json({ data: result });
};

exports.create = async (req, res, next) => {
  const result = await Settings.create(req.body);

  if (!result) {
    res.sendStatus(500);
  }

  res.status(200).json({ msg: "Created !", data: result });
};
