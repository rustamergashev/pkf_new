!function e(o, r, n) {
    function a(l, t) {
        if (!r[l]) {
            if (!o[l]) {
                var s = 'function' == typeof require && require
                if (!t && s) return s(l, !0)
                if (i) return i(l, !0)
                var c = new Error('Cannot find module "' + l + '"')
                throw c.code = 'MODULE_NOT_FOUND', c
            }
            var d = r[l] = { exports: {} }
            o[l][0].call(d.exports,
                function (e) {
                    var r = o[l][1][e]
                    return a(r ? r : e)
                },
                d,
                d.exports,
                e,
                o,
                r,
                n)
        }
        return r[l].exports
    }

    for (var i = 'function' == typeof require && require, l = 0; l < n.length; l++) a(n[l]);

    return a
}({
    1: [
        function (e, o, r) {
            !function () {
                'use strict'
                $(document).ready(function () {
                    $(window).bind('scroll',
                        function () {
                            var e = 150
                            $(window).scrollTop() > e
                                ? $('.header').addClass('header--fixed')
                                : $('.header').removeClass('header--fixed')
                        }), $('.mobile-nav-handler').click(function (e) {
                            $('.mobile-nav').toggleClass('mobile-nav--open'), $('.header').toggleClass('header--hide'),
                                $('body').toggleClass('no-scroll'), $('#toggle-nav').toggleClass('active')
                        }), $('.nav-link').click(function (e) {
                            $('.mobile-nav').removeClass('mobile-nav--open'), $('.header').removeClass('header--hide'),
                                $('body').removeClass('no-scroll'), $('#toggle-nav').removeClass('active')
                        })
                })
            }()
        }, {}
    ]
},
    {},
    [1])

$(document).on('keydown', '.searchForm input, #SearchForm input', function (e) {
    if (e.which == 13)
        $(this).parent('form').submit()
    else if (e.which == 27) {
        e.stopPropagation()
        $(this).val('')
    }
})
$(document).on('keydown', function (e) {
    if (e.which == 27) {
        $('.SearchToggle').removeClass('active')
        $('#SearchBox').slideUp(150)
    }
})
$(document).on('change', '.searchForm.autoSubmit select', function (e) {
    $(this).parents('form').submit()
})
$(document).on('click', '#CookieNotice button', function () {
    var ExpireDate = new Date(Date.now() + (24 * 60 * 60 * 30 * 6 * 1000))
    document.cookie = 'cookieaccepted=true;expires=' + ExpireDate.toUTCString() + 'path=/'
    $('#CookieNotice').slideUp(333, function () {
        $('#CookieNotice').remove()
    })
})
$(document).on('keyup', '.dataTables_filter input[type=search]', function () {
    var val = $(this).val()
    window.location.hash = 'search=' + val

})
$(document).on('mouseenter', '.dropdown-toggle', function (e) {
    let ToOpen = $(this).next('.SubMenu:first')
    ToOpen.addClass('show')
    $('.SubMenu').not(ToOpen).removeClass('show')
})

$(document).on('click', '.LanguageSelectorButton', function (e) {
    $('.LanguageSelector').toggleClass('hidden')
})
$(document).on('click', '.NavBarToggle', function (e) {
    e.stopPropagation()
    $('body').toggleClass('SearchOpen')
    $('#MainNav').toggleClass('show')
    $('.SubMenu').removeClass('show')
})
$(document).on('click', '.NavClose', function (e) {
    $(this).parents('.SubMenu').removeClass('show')
})
$(document).on('click', '.CarouselButtons li', function (e) {
    $(this).addClass('active').siblings('li').removeClass('active')
})
$(document).on('click', '#MainNav, #SearchBox, .SearchToggle', function (e) {
    e.stopPropagation()
})
$(document).on('click', function (e) {
    $('body').removeClass('SearchOpen')
    $('#MainNav').removeClass('show')
    $('#SearchBox').slideUp(150)
    $('.SearchToggle').removeClass('active')
})


var table
$(document).ready(function () {
    if ($('.dataTable').length > 0) {
        var searchHash = location.hash.substr(1),
            searchString = decodeURI(searchHash.substr(searchHash.indexOf('search='))
                .split('&')[0]
                .split('=')[1])
        if (searchString === undefined || searchString == 'undefined')
            searchString = ''

        table = $('.dataTable').DataTable({
            'oSearch': { 'sSearch': searchString },
            'order': [[0, 'asc'], [1, 'desc']],
            "lengthChange": false,
            responsive: true,
            language: {
                searchPlaceholder: "Search"
            },
            pageLength: dataTablePageSize
        })

        tableFilterHighlight(table)
        table.on('draw', function () {
            tableFilterHighlight(table)
        })
    }
    $(document).on('click', '.SearchToggle', function (e) {
        $(this).toggleClass('active')
        $('#SearchBox').slideToggle(150)
        $('#SearchBox input[name=SearchTerm]').focus()
    })
    $('#SearchForm').submit(function (e) {
        if ($('#SearchForm input[type=text]').val().length < 3) {
            e.preventDefault()
            if ($('#SearchForm .warning').length == 0) {
                $('#SearchForm').append('<div class="warning">Please enter at least 3 characters</div>')
                $('#SearchForm .warning').hide().slideDown(153)
            }
            return false
        }
        else
            $('#SearchForm .warning').remove()
    })
    SideBarInit()
    CheckSideBar($(window).scrollTop())
})

function tableFilterHighlight(table) {
    var searchTerm = table.search()
    $('.hilite').each(function (i, el) {
        $(el).after($(el).html()).remove()
    })
    if (searchTerm.length > 0) {
        $('.dataTable td').each(function (i, el) {
            tryHilite(el, searchTerm)
        })
    }
}
function tryHilite(element, search) {
    element = $(element)
    element.find('.hilite').each(function (i, elm) {
        let el = $(elm)
        el.after(el.text())
        el.remove()
    })
    if (element.children().length > 0)
        element.children().each(function (i, elm) {
            tryHilite(elm, search)
        })
    else {
        let start = element.text().toLowerCase().indexOf(search)
        if (start > -1) {
            let end = start + search.length
            let content = element.html()
            let mid = content.slice(start, end)
            element.html(content.slice(0, start) + '<span class="hilite">' + mid + '</span>' + content.slice(end))
            return true
        }
    }
    return false
}

let ScrollPos = 0;

$(window).on('scroll', function () {
    let CurrentPosition = $(window).scrollTop()
    $('body').toggleClass('hidesticky', CurrentPosition > ScrollPos)
    ScrollPos = CurrentPosition
    if (CurrentPosition > $('.MenuHolder').outerHeight()) {
        $('body').addClass('sticky')
    }
    else
        $('body').removeClass('sticky')
    CheckSideBar(CurrentPosition)
})

let SubNavHeight = 0
let Floating = null 

function SideBarInit() {
    Floating = $('.SidebarPrompt:last')
    if (Floating.length > 0)
        SubNavHeight = Floating.offset().top || 0
}

function CheckSideBar(CurrentPosition) {
    if (Floating != null && Floating.length > 0) {
        const BottomClass = 'PinFloating'
        const TopClass = 'StickFloating'
        let Holder = $('.MaxWidthSidebar').removeClass(BottomClass).removeClass(TopClass)
        if (Holder.length > 0) {
            let ScreenMinWidth = $(window).innerWidth() > 786
            let MenuHeight = $('.MenuHolder').outerHeight()
            let SetAtTop = CurrentPosition > SubNavHeight - MenuHeight
            Holder.toggleClass(TopClass, ScreenMinWidth && SetAtTop)

            let HolderEnd = Holder.offset().top + Holder.innerHeight()
            let ScreenEnd = CurrentPosition + $(window).innerHeight()
            let FloatEnd = Floating.offset().top + Floating.outerHeight()
            Holder.toggleClass(BottomClass, ScreenMinWidth && HolderEnd <= ScreenEnd && FloatEnd >= HolderEnd)
        }
    }
}