$(function(){
    $('body').css({
        display: 'none'
    })
    $('body').show(1400)
    $('#profile').click(function(){
        window.location.href='profile.html'
    })
    $('#disco').click(function(){
        window.location.href='disco.html'
    })
    $('#info').click(function(){
        window.location.href='info.html'
    })
    $('#twitter').click(function(){
        window.location.href='twitter.html'
    })
    $('#live').click(function(){
        window.location.href='live.html'
    })
    $('#band').click(function(){
        window.location.href='band.html'
    })
    $('#achieve').click(function(){
        window.location.href='achieve.html'
    })
    $('#mv').click(function(){
        window.location.href='movie.html'
    })
    $('#recome').css({
        display: 'none'
    })
    $('#Recommend').click(function(){
        $('#recome').show(1500)
    })
    $('dl').hover(function(){
        $(this).css({
            transform: 'scale(0.93, 0.93)'
        })
    },
    function(){
        $(this).css({
            transform: 'scale(1.0, 1.0)'
        })
    })
    $('#adamas').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?associate=SMO&cd=VVCL000001372')
    })
    $('#dayway').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?associate=SMO&cd=VVCL000001310')
    })
    $('#launcher').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?associate=SMO&cd=SVWC000070060')
    })
    $('#lhf').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?associate=SMO&cd=SVWC000070144')
    })
    $('#oathsign').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?site=S&cd=SVWC000007804')
    })
    $('#risinghope').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?site=S&cd=SVWC000070005')
    })
    $('#shirushi').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?site=S&cd=SVWC000070031')
    })
    $('#mvcs').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?associate=SMO&cd=ANSB000010044')
    })
    $('#sun').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?associate=SMO&cd=VVBL000000101')
    })
    $('#moon').click(function(){
        window.open('https://www.sonymusicshop.jp/m/item/itemShw.php?associate=SMO&cd=VVBL000000104')
    })
})