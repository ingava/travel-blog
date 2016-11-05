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

    $(".toTop").click(function () {
        $("body").animate({ scrollTop: 0 }, "slow");
    });

    // menu for mobile devices
    // when deployed the event would be changed to touch

    $(".logo").click(function () {
       $(".menu-item").toggleClass("hidden");
    });

    // form validation

    $("#subscribeBtn").click(function (e) {
        var email = $("#subscribeInput").val();

        if ($.trim(email).length == 0) {
            $("#subscribeInput").append("<p>Please enter your email address</p>");
            e.preventDefault();
        }

        if (validateEmail (email)) {
            alert("Thank you for subscribing");
        } else {
            $("#subscribeInput").append("<p>Please enter a valid email address</p>");
            e.preventDefault();
        }
    });

    function validateEmail(email) {
        var reg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

        if (reg.test(email)) {
            return true;
        } else {
            return false;
        }
    }

});