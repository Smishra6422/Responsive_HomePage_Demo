$(document).ready(function() {
    $('#customerDescriptionLearnMore').click(function () {
        $('.customerDetailDescription p').css('height', 'auto')
        $('#customerDescriptionLearnMore').hide()
        $('#customerDescriptionLearnLess').show()
    })

    $('#customerDescriptionLearnLess').click(function () {
        $('.customerDetailDescription p').css('height', '3.5rem')
        $('#customerDescriptionLearnMore').show()
        $('#customerDescriptionLearnLess').hide()
    })

    $('#firstNewsLearnMore').click(function () {
        $('#news1').css('height', 'auto')
        $('#firstNewsLearnMore').hide()
        $('#firstNewsLearnLess').show()
    })

    $('#firstNewsLearnLess').click(function () {
        $('#news1').css('height', '3.5rem')
        $('#firstNewsLearnMore').show()
        $('#firstNewsLearnLess').hide()
    })

    $('#secondNewsLearnMore').click(function () {
        $('#news2').css('height', 'auto')
        $('#secondNewsLearnMore').hide()
        $('#secondNewsLearnLess').show()
    })

    $('#secondNewsLearnLess').click(function () {
        $('#news2').css('height', '3.5rem')
        $('#secondNewsLearnMore').show()
        $('#secondNewsLearnLess').hide()
    })

    $('#imageSliderLearnMore').click(function () {
        $('.imageSliderDescription').css('height', 'auto')
        $('#imageSliderLearnMore').hide()
        $('#imageSliderLearnLess').show()
    })

    $('#imageSliderLearnLess').click(function () {
        $('.imageSliderDescription').css('height', '3.5rem')
        $('#imageSliderLearnMore').show()
        $('#imageSliderLearnLess').hide()
    })

    $('#lifeStyleLearnMore').click(function () {
        $('.lifeStyleDescription').css('height', 'auto')
        $('#lifeStyleLearnMore').hide()
        $('#lifeStyleLearnLess').show()
    })

    $('#lifeStyleLearnLess').click(function () {
        $('.lifeStyleDescription').css('height', '8rem')
        $('#lifeStyleLearnMore').show()
        $('#lifeStyleLearnLess').hide()
    })

    $('#imageLearnMore').click(function () {
        $('.imageDescription p').css('height', 'auto')
        $('#imageLearnMore').hide()
        $('#imageLearnLess').show()
    })

    $('#imageLearnLess').click(function () {
        $('.imageDescription p').css('height', '4.6rem')
        $('#imageLearnMore').show()
        $('#imageLearnLess').hide()
    })

    $('#videoLearnMore').click(function () {
        $('.videoDescription p').css('height', 'auto')
        $('#videoLearnMore').hide()
        $('#videoLearnLess').show()
    })

    $('#videoLearnLess').click(function () {
        $('.videoDescription p').css('height', '4.6rem')
        $('#videoLearnMore').show()
        $('#videoLearnLess').hide()
    })

    $('.toggle-menu-bar').click(function() {
        $('.toggle').trigger('close');
    })

    $('.menu-bar').click(function () {
        $('.toggle').lightbox_me();
    })
})