var main = function() {
  "use strict";
   $(".nav").on("click", "a", function() {
   $(".nav a").removeClass("selected");
   $(this).addClass("selected");
   $("#klantenzone, #beheer").toggleClass("nietzichtbaar");
  }
  )
  $(".kader").on("click", ".delete", function() {
   $(this).closest(".kader").remove();
  }  
  )
  $(".kader").on("click", "button", function() {
   var prijs = "<p>Vanaf " + $(this).data("prijs") + "eur</p>";
   $(this).closest(".kader").append(prijs);
   $(this).remove();
  }  
  )
  $("#beheer").on("click", "button", function() {
     var $vakantie = $("<div>").addClass("kader");
     var $delknop = $("<button>").addClass("delete").text("x").click(function(){
       $(this).closest(".kader").remove();
    });
     var $p = $("<p>").text($(".dagen").val());
     var $h2 = $("<h2>").text($(".bestemming").val());
     var $img = $("<img>").attr("src", $(".afbeelding").val()).attr("alt", $(".bestemming").val());
     var $button = $("<button>").text("Klik hier voor beste prijs").data("prijs",$(".prijs").val()).click(function(){
       var prijs = "<p>Vanaf " + $(this).data("prijs") + "eur</p>";
        $(this).closest(".kader").append(prijs);
   	  $(this).remove();
    });
     $vakantie.append($delknop);
     $vakantie.append($h2);
     $vakantie.append($img);
     $vakantie.append($p);
     $vakantie.append($button);
     $("#klantenzone").append($vakantie);
  }
  )
};

$(document).ready(main);

