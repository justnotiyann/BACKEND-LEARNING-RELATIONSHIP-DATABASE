const { Jurusan } = require("../../models");

exports.index = async (req, res, next) => {
  const result = await Jurusan.findAll();

  res.json({ data: result });
};

exports.store = async (req, res, next) => {
  const result = await Jurusan.create(req.body);

  if (!result) {
    res.status(500).json({ msg: "Internal Server Error" });
  }

  res.json({ msg: "Created !" });
};
