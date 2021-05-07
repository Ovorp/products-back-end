function create(req, res) {
  const db = req.app.get('db');
  const { name, description, price, image_url } = req.body;

  db.create_product([name, description, price, image_url])
    .then(() => res.status(200).send('You did it'))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function getOne(req, res) {
  const db = req.app.get('db');
  const { id } = req.params;
  db.read_product(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function getAll(req, res) {
  const db = req.app.get('db');
  const { id } = req.params;
  db.read_products(id)
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function update(req, res) {
  const db = req.app.get('db');
  const { id } = req.params;
  const { desc } = req.query;

  db.update_product([id, desc])
    .then(() => res.status(200).send('You did it'))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function deleteRow(req, res) {
  const db = req.app.get('db');
  const { id } = req.params;
  db.delete_product(id)
    .then(() => res.status(200).send('You did it'))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteRow,
};
