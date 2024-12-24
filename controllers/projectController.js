const { Projects } = require("../models");

exports.store = async (req, res) => {
  await Projects.create({
    projectName: req.body.name,
    projectDescription: req.body.description,
  });
  return res.json(req.body);
};

exports.edit = async (req, res) => {
  const project = await Projects.findByPk(req.body.id);

  if (project === null) {
    return res.send("Project not found");
  }

  await project.update({
    projectName: req.body.name,
    projectDescription: req.body.description,
  });
  project.save();
  return res.json(req.body);
};
