$(function() {
    $(".change-blown-up").on("click", function(event) {
      var id = $(this).data("id");
      var blow_up = $(this).data("blownState");
  
      var newBlownState = {
        blown_up: blow_up
      };
  
      // Send the PUT request.
      $.ajax("/api/elements/" + id, {
        type: "PUT",
        data: newBlownState
      }).then(
        function() {
          console.log("changed blown state to", blow_up);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});