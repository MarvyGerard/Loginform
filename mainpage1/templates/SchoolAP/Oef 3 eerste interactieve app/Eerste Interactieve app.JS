var main = function () { 
    "use strict"; 
    var addCommentFromInputBox = function () { 
        var $new_comment; 
        if ($(".opm-input input").val() !== "") { 
            $new_comment = $("<p>").text($(".opm-input input").val()); 
            $new_comment.hide(); 
            $(".opmn").append($new_comment); 
            $new_comment.fadeIn(); 
            $(".opm-input input").val(""); 
        } 
    }; 
    $(".opm-input button").on("click", function (event) { 
        addCommentFromInputBox(); 
    }); 
    $(".opm-input input").on("keypress", function (event) { 
        if (event.keyCode === 13) { 
        addCommentFromInputBox(); 
        } 
    }); 
}; 
$(document).ready(main);