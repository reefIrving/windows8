$(function(){
    $('body').css({
        display: 'none'
    })
    $('.vmedia').css({
        display: 'none'
    })
    $('#vlist').css({
        'margin-left': '20%',
        'width': '60%',
        'margin-right':'20%'
    })
    $('body').show('slide', 2000)
    $('.vtitle').hover(function(){

        //白くなる処理。変化時間はcss
        $(this).css({
            transform: 'scale(0.93, 0.93)'
        })
    },
    function(){
        //元通り処理
        $(this).css({
            transform: 'scale(1.0, 1.0)'
        })
    })
    $('.playMovie').click(function(){
        titleSwing()
        var nowplay = $(this).parent().parent().parent().parent().find('.vmedia')
        nowplay.show(1000)
        var position = (nowplay).offset().top
        position -= 70
        $("html,body").animate({
            scrollTop : position
        }, {
            queue : false
        });
    })
})
var titleSwing = function(tgtn){
    var target1 = $('#vmedia')
    var target2 = $('#vlist')
    target1.css({
        display: 'none'
    })
    target2.animate({
        'width': '100%'
    }, 50, 'swing',function(){
        target2.css({
            'margin-right': 0,
            'margin-left':0
        })
    })
    
}