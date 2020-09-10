// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`
const express = require("express");
// Import the model (`burger.js`) to use its database functions.
const burger = require("../models/burger.js");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
const router = express.Router();
//to read the data
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//to add to the data
router.post("/api/burgers", function (req, res) {
  burger.create(["name", "hungry"], [req.body.name, req.body.hungry], function (
    result
  ) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
//
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  //replace and add to the data
  cat.update(
    {
      hungry: req.body.hungry,
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
