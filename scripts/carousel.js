$(document).on('click', '.CarouselButtons li', function (e) {
    $(this).addClass('active').siblings('li').removeClass('active')
})

const ClassesToIgnore = ['active','carousel-item'];
$(function () {
    let Carousel = $('#Carousel')
    Carousel.carousel({ interval :5000})

    Carousel.on('slid.bs.carousel', function (e) {
        let classes = $(e.relatedTarget).attr('class').split(' ')
        let indicator = $('.carousel-indicators').attr('class', 'carousel-indicators')
        for (let c in classes) {
            if (ClassesToIgnore.indexOf(classes[c]) == -1)
                indicator.addClass(classes[c])
        }
    })

    Carousel.swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next')
            if (direction == 'right') $(this).carousel('prev')
        },
        allowPageScroll: "vertical"
    })
    $('#iconstrip > .Slide').prepend('<slidercontrol direction="left"></slidercontrol>').append('<slidercontrol direction="right"></slidercontrol>')
})

$(document).on('mouseenter', '#world .legend a', function (e) {
    $('#world').addClass('r' + $(this).index());
})
$(document).on('mouseleave', '#world .legend a', function (e) {
    $('#world').removeClass('r' + $(this).index());
})

$(document).on('click', 'slidercontrol', function (e) {    
    let holder = $(this).parent('.container')
    let strip = $(this).siblings('.IconSlider')
    let step = strip.children('a:first').outerWidth(true)
    let currentleft = parseInt(strip.css('left').replace('px', '')) || 0
    let stripwidth = step * strip.children().length

    console.log({
        'holder': holder,
        'strip': strip,
        'step': step,
        'currentleft': currentleft,
        'to': stripwidth
    })
    if ($(this).attr('direction') == 'left') {
        if (currentleft < 0) 
            strip.css('left', (currentleft + step) + 'px')
    }
    else {
        if (currentleft == 0 || Math.abs(currentleft) < stripwidth - holder.innerWidth())
            strip.css('left', (currentleft - step) + 'px')
    }
})
