$(document).ready(function() {
    $(".mdl-textfield__input").blur(function() {

        if (!this.value) {
            $(this).prop('required', true);
            $(this).parent().addClass('is-invalid');
        }
    });
    
    $(".mdl-button[type='submit']").click(function(event) {
        var formInput = $(this).siblings(".mdl-textfield").children(".mdl-textfield__input");

        for (var i = 0; i < formInput.length; i++) {
            if (!formInput[i].value) {

                $(formInput[i]).prop('required', true);
                $(formInput[i]).parent().addClass('is-invalid');

            }
        }

    });

    //$("button[type='submit']").ladda( 'bind', { timeout: 2000 } );

    var url1 = window.location.href === "index7df7.html?success=1";
    var url2 = window.location.href === "index639d.html?success=-1";
    // check if url matches then do fadeOut on success message and redirect to home
    if (url1 || url2) {
        setTimeout(function() {
            $("#div1").fadeOut(3000);
        }, 5000);
        setTimeout(function() {
            $(location).attr('href', 'index.html');
        }, 8000);
    }

    var selector = 'a.smooth';

    $(selector).on('click', function() {
        $(selector).removeClass('active');
        $(this).addClass('active');
    });



});

$(function() {
    $('a.smooth').click(function() {
        console.log("SMOOTH BEGIN");
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.get(0).offsetTop - 130;
        $(".mdl-layout__content").animate({ scrollTop: position }, speed, "swing");
        console.log("SMOOTH END");
    });
});
