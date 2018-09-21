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
    devoured: req.body.devoured
  })
  .then(result => {
    res.json({ id: result.insertId })
  });
}

exports.updateBurger = (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log('condition', req.params.id);

  db.Burger.update({
    devoured: req.body.devoured,
  }, {
    where: {
      id: 1 
    }
  })
  .then(result => {
    res.json(result);
  });
}

/*
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
*/
