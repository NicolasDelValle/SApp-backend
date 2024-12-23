const { Projects } = require("../models");

exports.store = async (req, res) => {
  await Projects.create({
    projectName: req.body.name,
    projectDescription: req.body.description,
  });
  return res.json(req.body);
};
