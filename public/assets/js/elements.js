$(function() {
    $(".change-blown-up").on("click", function(event) {
      var id = $(this).data("id");
      var blow_up = $(this).data("blownstate");
  
      var newBlownState = {
        blown_up: !blow_up
      };
  
      // Send the PUT request.
      $.ajax("/api/elements/" + id, {
        type: "PUT",
        data: newBlownState
      }).then(
        function() {
        //   console.log("changed blown state to", blown_up);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newElement = {
        name: $("#ca").val().trim(),
        blown_up: false
      };
      console.log(newElement);
  
      // Send the POST request.
      $.ajax("/api/elements", {
        type: "POST",
        data: newElement
      }).then(
        function() {
          console.log("created new element");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});