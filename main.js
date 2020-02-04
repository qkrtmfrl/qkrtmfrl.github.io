$(document).ready(function(){
    // navigation 클릭 시 각자의 페이지로 이동
    var offset = $("#page2").offset();
    var offset2 = $("#page3").offset();
    var offset3 = $("#page4").offset();
    var offset4 = $("#page5").offset();
    $(".li1").click(function(){
        $("html").animate({scrollTop : offset.top+"px"},800);
    });
    $(".li2").click(function(){
        $("html").animate({scrollTop : offset2.top+"px"},800);
    });
    $(".li3").click(function(){
        $("html").animate({scrollTop : offset3.top+"px"},800);
    });
    $(".li4").click(function(){
        $("html").animate({scrollTop : offset4.top+"px"},800);
    });

    //up 클릭 시 맨 첫 페이지로 이동
    $("#up").click(function(){
        $("html").animate({scrollTop : 0},800);
    });
    
    var ht = parseInt($(window).height());

    $(window).on('scroll',function(){
        //up 버튼 첫째페이지에서 숨기기
        var top = $(this).scrollTop();
        if(top>$("#page1").offset().top){
            $("#up").css('display','block');
        } else {
            $("#up").css('display','none');
        }
        //bar anmaition
        var sc_top = parseInt($(window).scrollTop());
        console.log(sc_top);
        n = parseInt(sc_top/(ht-5));
        if(n==2){
            $(".sk_bar").addClass("bar");
        } else {
            $(".sk_bar").removeClass("bar");
        }
    });

    //스크롤링이펙트
    var win_h = $(window).height();
        $('.page').each(function(index){
            $(this).attr("data-index",win_h * index);
        });
        $('.page').on("mousewheel DOMMouseScroll",function(e){
            var sectionPos = parseInt($(this).attr("data-index"));
            if(e.originalEvent.wheelDelta >= 0) {
                $("html,body").stop().animate({scrollTop:sectionPos - win_h},800);
            return false;
            } else if (e.originalEvent.wheelDelta < 0) {
                $("html,body").stop().animate({scrollTop:sectionPos + win_h},800);
            return false; 
            }
        });
});