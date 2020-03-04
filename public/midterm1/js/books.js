 /* global $ */
 /*global _*/
 $(document).ready(function() {

  $("button").on("click", function() {

   var getISBN = $("#getISBN").val();

   $.ajax({

    method: "GET",
    url: "https://openlibrary.org/api/books?bibkeys=ISBN:" + getISBN + "&format=json&jscmd=data",
    datatype: "json",
    success: function(data) {
     $("#Show_Cover").html("");
     $("#Title").html("");
     $("#Author").html("");
     $("#Publish_Year").html("");
     $("#Publisher").html("");
     $("#ISBN").html("");
     $("#Pages").html("");
     $("#Show_Cover").append("<img class='cover' src='" + data["ISBN:" + getISBN]["cover"]["medium"] + "' />");
     $("#Title").append("Title: " + data["ISBN:" + getISBN]["title"]);
     $("#Author").append("Author: " + data["ISBN:" + getISBN]["authors"][0]["name"]);
     $("#Publish_Year").append("Publish: " + data["ISBN:" + getISBN]["publish_date"]);
     $("#Publisher").append("Publisher: " + data["ISBN:" + getISBN]["publishers"][0]["name"]);
     $("#ISBN").append("ISBN: " + getISBN);
     $("#Pages").append("Pages: " + data["ISBN:" + getISBN]["number_of_pages"]);


    }, //success
    error: function(error) {
     console.log(error);
    } //error

   }); //AJAX


  }); //on function


 }); //end of document