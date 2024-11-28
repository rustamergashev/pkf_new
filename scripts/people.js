$(function () {
    var hash = window.location.hash;
    if (hash == "#gridview") {
        $(".gridview").trigger("click");
    }
    if (hash == "#listview") {
        $(".listview").trigger("click");
    }
});
$(document).on("click", ".gridview", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#PeopleList").removeClass("list-view");
    window.location.hash = "gridview";
});
$(document).on("click", ".listview", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#PeopleList").addClass("list-view");
    window.location.hash = "listview";
});

$(document).on('click', 'a.people-block', function (e) {
    if (UserPop) {
        e.preventDefault();
        let url = $(this).attr('href') + '?ModalMode=1';
        $.get(url, function (r) {            
            $('body').append(r);
        });
    }
});
$(document).on('click', '.shade', function (e) {
    $(this).remove();
});
$(document).on('click', '.shade .popup', function (e) {
    e.stopPropagation();
});
$(document).on('keydown', function (e) {
    switch (e.which) {
        case 27:
            $('.shade').remove();
            break;
    }
});
$(document).on('change', 'form[asyncreload] select', function (e) {
    let el = $(this)
    let form = el.parents('form')
    let action = form.attr('action') ?? window.location.pathname
    let sub = form.serialize()
    $.get(action, sub, function (r) {
        let newForm = $(r).find('form.searchForm')
        form.html(newForm.html())
    });
});
