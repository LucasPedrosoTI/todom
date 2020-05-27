const { Tarefas } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  index: (req, res) => {
    //       let tarefas = await Tarefas.findAll({
    //           where:
    //       })
    return res.send(req.headers);
  },
};
