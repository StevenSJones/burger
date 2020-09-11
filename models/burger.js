// * Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  //calling the update function from the orm
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};
submit.on(
  "click",
  function (event) {
    event.preventDefault();
    newBurger = $("#newBurger").val().trim();
let id = $(this).data(burgerId);
$.ajax("../models/burger.js", function(event) {
  method: "POST",
  data: newBurger
}).then(function(){
  console.log(newBurger)
})
  });

  <div id="newBurger">
    <input> Add new Burger </input>
  </div>


//     * Export at the end of the `burger.js` file.
module.exports = burger;
