$(function(){
    /**イニシャライズ */
    $('.mainInfo').css({
        display: 'none'
    })
    $('body').css({
        display: 'none'
    })
    /**ここから処理 */
    $('body').show(1000)
    $('.close').hide(1000)
    $('.next').click(function(){
        $('#mainmenu').css({
            opacity: 0.9,
            height: '700vw'
        })
        $('.mainInfo').hide(1000)
        $(this).next('.close').next('.mainInfo').show(1500)
        $(this).hide(1000)
        $(this).next('.close').show()
    })
    $('.close').click(function(){
        $(this).next('.mainInfo').hide(1000)
        $(this).prev('.next').show()
        $(this).hide(1000)
        $('#mainmenu').css({
            opacity: 0.8,
            height: '70vw'
        })
    })
})