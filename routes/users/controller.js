const { Users, Jurusan, Invoices } = require("../../models");
const bcryptjs = require("bcryptjs");

exports.index = async (req, res, next) => {
  const result = await Users.findAll({
    attributes: ["email", "username", "address"],
    include: [
      {
        model: Jurusan,
        attributes: ["jurusan"],
      },
    ],
  });

  if (result <= 0) {
    res.json({ msg: "no data" });
  }

  res.json({
    data: result,
  });
};

exports.create = async (req, res, next) => {
  const { email, username, password, address } = req.body;
  const hashPass = await bcryptjs.hash(password, 12);
  const result = await Users.create({
    email,
    username,
    password: hashPass,
    address,
  });
  if (!result) {
    res.status(500).json({ msg: "Internal server error" });
  }
  res.status(201).json({
    msg: "created !",
  });
};

exports.show = async (req, res, next) => {
  const id = req.params.id;
  const result = await Users.findOne({ where: { username: id } });

  if (!result) {
    res.status(400).json({ msg: "Not Found" });
  }
  res.json({
    data: result,
  });
};

exports.update = async (req, res, next) => {
  const id = req.params.id;
  const { email, username, password, address } = req.body;

  if (!id) {
    res.status(400).json({
      msg: "Bad Request",
    });
  }

  const hashPass = await bcryptjs.hash(password, 12);
  const result = await Users.update(
    {
      email,
      username,
      password: hashPass,
      address,
    },
    { where: { id } }
  );

  if (!result) {
    res.status(500).json({ msg: "Internal server error" });
  }

  res.status(201).json({
    msg: "updated !",
  });
};

exports.destroy = async (req, res, next) => {
  const id = req.params.id;
  const result = await Users.findOne({ where: { username: id } });

  if (!result) {
    res.status(400).json({ msg: "Not Found !" });
  } else {
    result.destroy();
    res.status(200).json({ msg: "Deleted !" });
  }
};
