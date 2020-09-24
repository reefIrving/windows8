$(function(){
    $('body').css({
        display: 'none'
    })
    $('body').show(1000)
    $('span').css({
        display: 'none'
    })
    $('#initMesse').css({
        display: 'inline'
    })
    $('#debut').click(function(){
        $('span').css({
            display: 'none'
        })
        $('.debut').show(1000);
    })
    $('#solo').click(function(){
        $('span').css({
            display: 'none'
        })
        $('.solo').show(1000);
    })
    $('#tv').click(function(){
        $('span').css({
            display: 'none'
        })
        $('.tv').show(1000);
    })
    $('#radio').click(function(){
        $('span').css({
            display: 'none'
        })
        $('.radio').show(1000);
    })
    $('#book').click(function(){
        $('span').css({
            display: 'none'
        })
        $('.book').show(1000);
    })
    $('#web').click(function(){
        $('span').css({
            display: 'none'
        })
        $('.web').show(1000);
    })
})