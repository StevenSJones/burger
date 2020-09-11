//    * Express
//    * `burger.js`
const express = require("express");
// Import the model (`burger.js`) to use its database functions.
const burger = require("../models/burger.js");
// const { router } = require("express");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
const router = express.Router();
//to read the data
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//to add to the data
router.post("/api/burgers", function (req, res) {
  burger.create(["burger", "devoured"], [req.body.burger, req.body.devoured], function (
    result
  ) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
//
router.put("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);
  //replace and add to the data
  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;