$(document).ready(function () {
    $(document).on("click", function () {
        console.log('document click');
        $(".search-field.expanded").removeClass("expanded");
    });
    $(".fa-search").on("click", function (e) {
        e.stopPropagation();
        console.log('search click');
        $(".search-field").addClass("expanded");
    });
});