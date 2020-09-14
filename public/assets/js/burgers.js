// $(document).ready(function(event){
//  event.preventDefault();
//     $(".devour-burger").click(function(){
//       $("#hide").hide()(function(){
//         });
//     });
//   });


//next steps include refactoring the code below
//next steps also include changing the index.handlebars file by removing the form and changing that to a list of the burgers and when one is clicked on; a picture that is a certain size appears on the right of the screen and then slides right to disappear.


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger-status").on("click", function(event) {
      var id = $(this).data("id");
      var toEat = $(this).data("toeat");
  
      var newEatState = {
        devoured: 1
      };
  
      // Send the PUT request to the server and the server sends something back, depending on what the server specifies.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed status to", toEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    //adding a burger
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        // devoured: $("[burger_name=devoured]:checked").val().trim(),
      };
  
      // Send the POST request which adds to something
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });