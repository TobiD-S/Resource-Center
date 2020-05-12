// File for your custom JavaScript

$(function() {
    var check = $('#filterControls .btnn');
    check.on('click', function() {
        setTimeout(function() {
            $(".filters div").show();
            var choice = $.map(check.filter('.active'), function(el) {
                return "." + el.id;
            }).join("");
            if (choice)
                $(".filters div").not(choice).hide();
        }, 1);
    });
});