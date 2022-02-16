/* SHOP SLIDER */

$('.shop__image__list img').click(function() {
    var thisImage = $(this).attr('src')

    $('.shop__image_main > img').attr('src', thisImage)
})

/* MENU  */

$('.menu__hamburger').click(function() {
    $('.menu__block').toggleClass('menu__opened')
    $('body').toggleClass('scroll_canseled');
})

$('.menu__festival').hover(function() {
        $('.menu__submenu').addClass('submenu__active')
        $(this).addClass('menu__festival_active')

    }) //, function() {
    //   $('.menu__submenu').removeClass('submenu__active')
    //   $(this).removeClass('menu__festival_active')
    //})


/* STREAMING */
var slideH = $('.streaming__slider_tv').height() + 250;
$('.streaming__slider').attr('style', 'height: ' + slideH + 'px')
$('.streaming__slider_item').click(function() {
    $('.streaming__slider_item').removeClass('st_slider_active')
    $(this).addClass('st_slider_active')

    if ($(this).attr('id') == 'streaming_tv') {
        var slideH = $('.streaming__slider_tv').height() + 250;
        $('.streaming__slider').attr('style', 'height: ' + slideH + 'px')
        $('.streaming__slider_line').attr('style', 'transform: translateX(0%)')
        $('.streaming__slider_wrapper').attr('style', 'transform: translateX(0%)')
    } else if ($(this).attr('id') == 'streaming_podcast') {
        var slideH = $('.streaming__slider_podcast').height() + 100;
        $('.streaming__slider').attr('style', 'height: ' + slideH + 'px')
        $('.streaming__slider_line').attr('style', 'transform: translateX(100%)')
        $('.streaming__slider_wrapper').attr('style', 'transform: translateX(-100%)')
    } else {
        var slideH = $('.streaming__slider_videos').height() + 100;
        $('.streaming__slider').attr('style', 'height: ' + slideH + 'px')
        $('.streaming__slider_line').attr('style', 'transform: translateX(200%)')
        $('.streaming__slider_wrapper').attr('style', 'transform: translateX(-200%)')
    }
})

/* ABOUT US */

$('.track-1:last').css('background', 'none')
$('.track-2:last').css('background', 'none')
$('.track-3:last').css('background', 'none')


/* FAQ */

var faqVisibleHeight = Number($('.faq__item').css('height'));

$('.faq__item').click(function() {
    var $this = $(this)

    var faqHiddenHeight = $this.find('.faq__item_hidden').height() + 30;
    if ($this.hasClass('faq__opened')) {
        $this.removeClass('faq__opened')
        $this.css('height', faqVisibleHeight + 'px')
    } else {
        $this.addClass('faq__opened')
        var calculatedHeight = faqVisibleHeight + faqHiddenHeight;
        $this.css('height', calculatedHeight + 'px')
    }
})

/* RODEO SLIDER */

/* LINES GENERATE */
var sliderCount = $('.rodeo__slide').length;

let i = 0;
while (i < sliderCount) {
    if (i == 0) {
        $('.rodeo__slider_lines').prepend('<div id="rodeo_line_' + (i + 1) + '" class="rodeo__slide_line slider__line_active"></div>')
    } else {
        $('.rodeo__slider_lines').append('<div id="rodeo_line_' + (i + 1) + '" class="rodeo__slide_line"></div>')
    }
    i++
}
var sliderContainer = $('.rodeo__slider_lines').width() - (sliderCount * 30)
$('.rodeo__slide_line').attr('style', 'width: ' + sliderContainer / sliderCount + 'px')

/* LINES GENERATE END */
var currentSlide = 1;
var slideWidth = $('.rodeo__slide').width()
var slideMargin = Number($('.rodeo__slide').css('margin-right'))

$('.rodeo__slider_prev').click(function() {
    rodeoSliderPrev()
})

$('.rodeo__slider_next').click(function() {
    rodeoSliderNext()
})

function rodeoSliderNext() {
    currentSlide++

    if (currentSlide > sliderCount) {
        currentSlide = sliderCount
        return false;
    } else {
        console.log(currentSlide)
        var translateWidth = (slideWidth + slideMargin) * (currentSlide - 1)
        $('.rodeo__slider_wrapper').attr('style', 'transform:translateX(-' + translateWidth + 'px)')
        $('.rodeo__slide_line').removeClass('slider__line_active')
        $('#rodeo_line_' + currentSlide).addClass('slider__line_active')
    }
}

function rodeoSliderPrev() {
    currentSlide--
    if (currentSlide < 1) {
        currentSlide = 1;
        return false;
    } else {
        var translateWidth = (slideWidth + slideMargin) * (currentSlide - 1)
        $('.rodeo__slider_wrapper').attr('style', 'transform:translateX(-' + translateWidth + 'px)')
        $('.rodeo__slide_line').removeClass('slider__line_active')
        $('#rodeo_line_' + currentSlide).addClass('slider__line_active')
    }
}