
submit.on(
    "click",
    function (event) {
      event.preventDefault();
      newBurger = $("#newBurger").val().trim();
  let id = $(this).data(burgerId);
  
  $.ajax({"../models/burger.js", function(event) {
    method: "POST",
    data: newBurger
  }).then(function(){
    console.log(newBurger)
  })
    });
  
    //specify that this goes into newBurger data
    <div id="newBurger">
      <input> Add new Burger </input>
    </div>
  
    //submit button {inside we need ajax }
  
  