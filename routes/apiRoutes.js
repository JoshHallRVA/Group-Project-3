let db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/:seller", function (req, res) {
    db.seller.findAll({ where: { id: req.params.seller } }).then(function (dbSeller) {
      res.json(dbSeller);
    });
  });
  app.get("/api/:seller/items", function (req, res) {
    db.items.findAll({ where: { sellerId: req.params.seller } }).then(function (dbItems) {
      res.json(dbItems);
    });
  });
  app.get("/api/:buyer/booty", function (req, res) {
    db.wishList.findAll({ where: { buyerId: req.params.buyer } }).then(function (dbBuyer) {
      res.json(dbBuyer);
    });
  });

  // Create a new example
  app.post("/api/seller", function (req, res) {
    db.seller.create(req.body).then(function (dbSeller) {
      res.json(dbSeller);
    });
  });
  app.post("/api/:seller/items", function (req, res) {
    let newItem = req.body;
    newItem.sellerId = req.params.seller;
    db.items.create(newItem).then(function (dbItems) {
      res.json(dbItems);
    });
  });
  app.post("/api/:buyer/booty", function (req, res) {
    let newItem = req.body;
    newItem.buyerId = req.params.buyer;
    db.wishList.create(newItem).then(function (dbBuyer) {
      res.json(dbBuyer);
    });
  });

  // Delete an example by id
  app.delete("/api/seller/:items", function (req, res) {
    db.items.destroy({ where: { id: req.params.items } }).then(function (dbItems) {
      res.json(dbItems);
    });
  });
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
    res.json(dbExamples);
  });
});

// Create a new example
app.post("/api/examples", function (req, res) {
  db.Example.create(req.body).then(function (dbExample) {
    res.json(dbExample);
  });
});

// Delete an example by id
app.delete("/api/examples/:id", function (req, res) {
  db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
    res.json(dbExample);
  });
});


};