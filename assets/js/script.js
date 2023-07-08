$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }
})



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            // $('.filter').removeClass('hidden');
            $('.kezooooooo').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('5000');
            $('.filter').filter('.'+value).show('5000');
            
        }






    });
    
if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});



let featuresScroll=$("#services").offset().top;   
$(window).scroll(function(){
    let WScroll=$(window).scrollTop();
    if(WScroll > featuresScroll)
    {
        $("#btn").fadeIn(1000)
    }
    else
    {
        $("#btn").fadeOut(1000)
    }
})


$("#btn").click(function(){
    $("html,body").animate({scrollTop:"0"},1000)
})



$(document).ready(function(){
    $("#loading").fadeOut(3000,function(){
        $("body").css("overflow","auto")
    });
})
