$(document).ready(function () {
    $(document).on("click", function () {
        $(".search-field.expanded").removeClass("expanded");
    });
    $(".search-field").on("click", function (e) {
        e.stopPropagation();
        $(".search-field").addClass("expanded");
    });
    $(".toTop").click(function () {
        $("body").animate({ scrollTop: 0 }, "slow");
    });
});