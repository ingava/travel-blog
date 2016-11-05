$(document).ready(function () {

    // search field animation

    $(document).on("click", function () {
        $(".search-field.expanded").removeClass("expanded");
    });

    $(".search-field").on("click", function (e) {
        e.stopPropagation();
        $(".search-field").addClass("expanded");
    });

    // to top navigation

    $(".toTop").on("click", function () {
        $("body").animate({ scrollTop: 0 }, "slow");
    });

    // like functionality

    $(".like-circle").on("click", function () {
        var $heart = $(".fa", this);

        if ($heart.hasClass("fa-heart")) {
            $heart.removeClass('fa-heart');
            $heart.addClass('fa-heart-o');
        } else {
            $heart.removeClass('fa-heart-o');
            $heart.addClass('fa-heart');
        }
    });

    // form validation

    $("#subscribeBtn").on("click", function (e) {
        e.preventDefault();
        var email = $("#subscribeInput").val();

        if (validateEmail (email)) {
            alert("Thank you for subscribing to our newsletter!");
        } else {
            $(".warningMessage").remove();
            $("#subscribeBtn").after("<p class='warningMessage'>Please enter a valid email address</p>");
        }
    });

    function validateEmail(email) {
        var reg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

        return reg.test(email);
    }

    // menu for mobile devices
    // when deployed the event would be changed to touch

    $(".logo").on("click", function () {
       $(".menu-item").toggleClass("hidden");
    });
});