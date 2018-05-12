var main = function() {
  "use strict";
   $(".Nav").on("click", "a", function() {
   $(".Nav a").removeClass("selected");
   $(this).addClass("selected");
   $("#klantenzone, #beheer").toggleClass("onzichtbaar");
  }
  )
  $(".kader1").on("click", ".delete", function() {
   $(this).closest(".kader1").remove();
  }  
  )
  $(".kader1").on("click", "button", function() {
   var prijs = "<p>Vanaf " + $(this).data("prijs") + "eur</p>";
   $(this).closest(".kader1").append(prijs);
   $(this).remove();
  }  
  )
  $("#beheer").on("click", "button", function() {
     var $vakantie = $("<div>").addClass("kader1");
     var $delknop = $("<button>").addClass("delete").text("x").click(function(){
       $(this).closest(".kader1").remove();
    });
     var $p = $("<p>").text($(".dagen").val());
     var $h2 = $("<h2>").text($(".bestemming").val());
     var $img = $("<img>").attr("src", $(".afbeelding").val()).attr("alt", $(".bestemming").val());
     var $button = $("<button>").text("Klik hier voor beste prijs").data("prijs",$(".prijs").val()).click(function(){
       var prijs = "<p>Vanaf " + $(this).data("prijs") + "eur</p>";
        $(this).closest(".kader1").append(prijs);
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
