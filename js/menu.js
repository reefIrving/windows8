$(function(){
    $('.tag').css({
        display: 'none'
    })

    $('.tile').hover(function(){
        $(this).css({
            opacity: 0.5,
            transform:'scale(1.1, 1.1)'
        })
        $(this).children('.tag').css({
            display: 'inline'
        })
    },
    function(){
        $(this).css({
            opacity: 1.0,
            transform:'scale(1, 1)'
        })
        $(this).children('.tag').css({
            display: 'none'
        })
    })
    $('#profile').click(function(){
        window.location.href='html/profile.html'
    })
    $('#disco').click(function(){
        window.location.href='html/disco.html'
    })
    $('#info').click(function(){
        window.location.href='html/info.html'
    })
    $('#twitter').click(function(){
        window.location.href='html/twitter.html'
    })
    $('#live').click(function(){
        window.location.href='html/live.html'
    })
    $('#band').click(function(){
        window.location.href='html/band.html'
    })
    $('#achieve').click(function(){
        window.location.href='html/achieve.html'
    })
    $('#sitemaps').click(function(){
        window.location.href='html/sitemaps.html'
    })
    $('#movie').click(function(){
        window.location.href='html/movie.html'
    })
})