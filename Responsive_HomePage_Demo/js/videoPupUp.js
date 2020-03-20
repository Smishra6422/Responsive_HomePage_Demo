$(document).ready(function () {
    let videoImages = $('.videoItem')

    for(let video=0; video<videoImages.length; video++) {
            $('.cycle-slideshow.videoSlide').cycle('add', '<iframe class="popUpVideoItem" frameborder="0" allow=" autoplay; " ></iframe>');   
           
        }
    
    $('.videoItem').click(function () {

        let index = $(".videoItem").index(this);

        for(let video=0; video<videoImages.length; video++) {
             if(index == 4) {
                    index=0;
                    
                } 

                let videoItemSelector = '.videoItem:nth-child('+(index+1) +')'
                let popUpVideoSelector = '.popUpVideoItem:nth-child('+ (video+2) +')'

                let src = $(videoItemSelector).attr('title')
                $(popUpVideoSelector).attr('src', src)
                
                

                index++


            }

            //  $('.imagePopUp').hide()

            $('.videoPopUp').lightbox_me();
        
    })
})

$(document).ready(function () {
    $('#videoPopUpClose').click(function() {
        $('.videoPopUp').trigger('close');
    })
})

