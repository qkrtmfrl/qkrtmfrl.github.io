$(document).ready(function(){
            $(".search").click(function(){
                $("#frm1").css("background-color","#fff"); 
                $(".search_btn").css("background-image","url('./date/search_btn2.png')");
            });
            function nextAni(){
                    $(".img_box").not(":animated").animate({"margin-left":"-100%"},500,function(){
                        $(".img_box li").eq(0).appendTo($(".img_box"));
                        $(".img_box").css("margin-left","0px");
                        $(".btn_box li").eq(0).appendTo($(".btn_box"));
                        $(".btn_box li button").removeClass("on");
                        $(".btn_box li").eq(0).find("button").addClass("on")
                    });              
            }
            var intv = setInterval(function(){nextAni();},2900);
            $(".btn_box li").click(function(){
                clearInterval(intv);
                var idx = $(this).index();
                if( idx != 0){
                    for(a=0; a<idx-1; a++){
                        $(".btn_box li").eq(0).appendTo($(".btn_box"));
                        $(".img_box li").eq(0).appendTo($(".img_box"));
                    }
                    nextAni();
                }
            });
            $(".totop").css("display","none");
            var ht = parseInt($(window).height());
            $(window).scroll(function(){
                var sc = parseInt($(window).scrollTop());
                if( sc >= ht ){
                    $(".totop").fadeIn();
                } else {
                    $(".totop").fadeOut();
                }
            });
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