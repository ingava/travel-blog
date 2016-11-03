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
    
    function validateEmail(form_id, email) {

        var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
        var emailAddress = document.forms[form_id].elements[email].value;

        if (reg.test(emailAddress) == false) {
            alert("Invalid Email Address");
            return false;
        }
    }


    $("#subscribeForm").submit(function () {
        validateEmail("#subscribeForm", );
    });
});