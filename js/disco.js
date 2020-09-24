$(function(){
    /**イニシャライズ */
    $('body').css({
        display: 'none'
    })
    $('body').show(1000)
    $('.menu').css({
        display: 'none'
    })
    $('.tag').css({
        display: 'none'
    })
    $('.txtbox').css({
        display: 'none'
    })
    /**くくり毎にオンクリック処理 */
    $('#singles, #singlezone td').click(function(){
        $('.menu').css({
            display: 'none'
        })
        $('.singleTile').show(1000)
        $("html,body").animate({scrollTop:$('.singleTile').offset().top});
    })
    $('#albums, #albumzone td').click(function(){
        $('.menu').css({
            display: 'none'
        })
        $('.album').show(1000)
        $("html,body").animate({scrollTop:$('.album').offset().top});
    })
    $('#dvdbd, #dvdbdzone td').click(function(){
        $('.menu').css({
            display: 'none'
        })
        $('.mov').show(1000)
        $("html,body").animate({scrollTop:$('.mov').offset().top});
    })
    /**hover時のイベント */
    $('.tile').hover(function(){
        $(this).css({
            opacity: 0.7,
            transform: 'scale(1.1, 1.1)'
        })
        $(this).children('.tag').css({
            display: 'inline'
        })
    },
    function(){
        $(this).css({
            opacity: 1.0,
            transform: 'scale(1, 1)'
        })
        $(this).children('.tag').css({
            display: 'none'
        })
    })
    /**tileクリック時のtxtbox表示 */
    $('.tile').click(function(){
        tileset =  $(this)
        styleinit()
    })

})
var tileset
var styleinit = function(){
    $('.tile').css({
        'margin-right': '10px'
    })
    tileset.css({
        'margin-right': '0'
    })
    if(!tileset.next('.txtbox').hasClass('tileclick')){
        $('.menu').css({
            'width': '100%'
        })
        tileset.next('.txtbox').show(1500)
        tileset.next('.txtbox').addClass('tileclick')

    }else{
        $('.menu').css({
            'width': '80%'
        })
        tileset.next('.txtbox').hide(1000)
        tileset.next('.txtbox').removeClass('tileclick')
    }


}