const { Employee, Settings } = require("../../models");

exports.index = async (req, res, next) => {
  const result = await Employee.findAll({
    include: [
      {
        model: Settings,
        attributes: ["theme", "autoLogin"],
      },
    ],
  });

  res.status(200).json({ data: result });
};

exports.create = async (req, res, next) => {
  const result = await Employee.create(req.body);

  if (!result) {
    res.sendStatus(500);
  }

  res.status(200).json({ msg: "Created !", data: result });
};

exports.show = async (req, res, next) => {
  const id = req.params.id;
  const result = await Employee.findByPk(id, {
    include: [
      {
        model: Setting,
        attributes: ["theme", "autoLogin"],
      },
    ],
  });

  if (!result) {
    res.sendStatus(400);
  }

  res.status(200).json({ data: result });
};
