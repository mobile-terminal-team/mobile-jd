$(function(){var e=!1;touch.on(".tabswitch li","touchstart",function(a){$(".tabswitch li .red").removeClass("red"),"P"==a.target.tagName?($(this).addClass("red"),$(".tab li").removeClass("red"),$(".tab li").eq($(this).parent().index()).addClass("red"),$(".ulcheck").removeClass("ulcheck").addClass("hide"),$(".showbox").eq($(this).parent().index()).removeClass("hide").addClass("ulcheck"),e=!1,$(".tab").fadeOut()):"UL"==a.target.tagName||($(this).find("p").addClass("red"),$(".tab li").removeClass("red"),$(".tab li").eq($(this).index()).addClass("red"),e=!1,$(".tab").fadeOut(),$(".ulcheck").removeClass("ulcheck").addClass("hide"),$(".showbox").eq($(this).parent().index()).removeClass("hide").addClass("ulcheck"))}),touch.on(".select","touchstart",function(){e=!e,e?($(".select").children("i").html("&#xe600;"),$(".tab").fadeIn()):($(".select").children("i").html("&#xe609;"),$(".tab").fadeOut())});var a=(new Swiper(".tabswitch_box",{slidesPerView:"auto",freeMode:!0,observer:!0,observeParents:!0,resistanceRatio:0}),parseInt($(".tabswitch li").css("width"))/6*7.4+1);$(".tabswitch li").length*a;touch.on(".header_sel","touchstart",function(){$("nav").hasClass("hide")?$("nav").removeClass("hide"):$("nav").addClass("hide")})});