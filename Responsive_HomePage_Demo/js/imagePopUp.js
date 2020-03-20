$(document).ready(function () {
    let images = $('.imageItem')

    for(let image=0; image<images.length; image++) {
            $('.cycle-slideshow.imageSlide').cycle('add', '<img class="popUpImageItem" data-cycle-title="Images">');   
           
        }
    
    $('.imageItem').click(function () {

        let index = $(".imageItem").index(this);

        for(let image=0; image<images.length; image++) {
             if(index == 4) {
                    index=0;
                    
                } 

                let imageItemSelector = '.imageItem:nth-child('+(index+1) +')'
                let popUpImageSelector = '.popUpImageItem:nth-child('+ (image+2) +')'

                let src = $(imageItemSelector).attr('src')
                let title = $(imageItemSelector).attr('title')
                console.log(title)
                $(popUpImageSelector).attr('src', src)
                

                index++


            }

            // $('.videoPopUp').hide()

            $('.imagePopUp').lightbox_me();
        
    })
})

$(document).ready(function () {
    $('#imagePopUpClose').click(function() {
        $('.imagePopUp').trigger('close');
    })
})

