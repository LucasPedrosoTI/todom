const { Usuario } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  login: async (req, res) => {
    // pegar info do body
    let { email, senha } = req.body;

    // return res.send(senha);

    // tentar carregar user
    let user = await Usuario.findOne({
      where: {
        email,
      },
    });

    //verificar se existe o user
    if (!user) {
      return res.status(403).json({ msg: "login inválido" }); //senha ou email invalidos
    }

    // validar senha passada
    if (!bcrypt.compareSync(senha, user.senha)) {
      // return res.send("sucesso");
      return res.status(403).json({ msg: "login inválido" }); //senha ou email invalidos
    }

    //removendo a senha p/ n enviar de volta
    user.senha = undefined;

    // criando o token
    let token = jwt.sign({ user }, process.env.SECRET);

    res.status(200).json({ user, token });
  },
};
