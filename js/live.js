$(function(){
    $('.contents').css({
        display: 'none'
    })
    $('.short').click(function(){
        $(this).children('.contents').toggle()
    })
})