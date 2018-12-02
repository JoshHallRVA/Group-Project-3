let db = require("../models");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("homepage", {
        msg: "LOGO",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id

  app.get("/buyer", function (req, res) {
    db.seller.findAll({
      include: [{
        model: db.items,
        as: 'items',
        required: false
      }]
    }).then(allSellers => {
      res.render("buyer", {
        sellers: allSellers
      })
    })


  });

  app.get("/:buyer/booty", function (req, res) {
    db.wishList.findAll({ where: { id: req.params.buyer } }).then(function (allItems) {
      res.render("booty", {
        items: allItems
      });
    });
  });
  app.get("/buyer/booty", function (req, res) {
    db.wishList.findAll({}).then(function (allItems) {
      res.render("booty", {
        items: allItems
      });
    });
  });


  app.get("/seller", function (req, res) {
    db.items.findAll({}).then(function (dbItems) {
      res.render("seller", {
        msg: "Welcome!",
        examples: dbItems
      });
    });
  });

  app.get("/:seller/items", function (req, res) {
    db.items.findAll({ where: { id: req.params.seller } }).then(function (sellerItems) {

      res.render("items", {
        items: sellerItems
      });
    });
  });
  app.get("/seller/items", function (req, res) {
    db.items.findAll({}).then(function (sellerItems) {

      res.render("items", {
        items: sellerItems
      });
    });
  });

  app.get("/leftover", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("leftover", {
        msg: "LOGO",
        examples: dbExamples
      });
    });
  });



  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};























let data = {
  "id": 2,
  "buyerName": "Mike",
  "createdAt": null,
  "updatedAt": null,
  "items": [{
    "id": 1,
    "sellerId": 1,
    "name": "Chair",
    "details": null,
    "price": "20",
    "createdAt": null,
    "updatedAt": null,
    "wishListItem": {
      "itemId": 1,
      "wishListId": 2,
      "createdAt": null,
      "updatedAt": null
    }
  },
  {
    "id": 2,
    "sellerId": 2,
    "name": "Desk",
    "details": null,
    "price": "30",
    "createdAt": null,
    "updatedAt": null,
    "wishListItem": {
      "itemId": 2,
      "wishListId": 2,
      "createdAt": null,
      "updatedAt": null
    }
  },
  {
    "id": 3,
    "sellerId": 2,
    "name": "Lawn Mower",
    "details": null,
    "price": "50",
    "createdAt": null,
    "updatedAt": null,
    "wishListItem": {
      "itemId": 3,
      "wishListId": 2,
      "createdAt": null,
      "updatedAt": null
    }
  }]
}