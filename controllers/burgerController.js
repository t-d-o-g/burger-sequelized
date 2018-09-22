const db = require('../models');

exports.index = (req, res) => {
  db.Burger.findAll({})
    .then((dbBurger) => {
      const hbsObj = {
        burgers: dbBurger,
      };
      res.render('index', hbsObj);
    });
};

exports.createBurger = (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured,
  })
    .then((result) => {
      res.json({ id: result.insertId });
    });
};

exports.updateBurger = (req, res) => {
  const burgerId = req.params.id;

  db.Burger.update({
    devoured: req.body.devoured,
  }, {
    where: {
      id: burgerId,
    },
  })
    .then((result) => {
      res.json(result);
    });
};
