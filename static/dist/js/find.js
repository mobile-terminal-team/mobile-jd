/*
* @Author: Marte
* @Date:   2016-12-07 19:07:09
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-08 17:23:56
*/
define(function(require, exports, module) {
    require("jquery");
    var touch=require("touch");
    var template=require("template");
    require("findcss");
    touch.on(".header_sel","touchstart",function(){
        if($("nav").hasClass("hide")){
            $("nav").removeClass("hide");
        }else{
            $("nav").addClass("hide");
        }
    });
    var liw=parseInt($(".tabswitch li").css("width"))/6*7.4+1;
    var tabswitchW=$(".tabswitch li").length*(liw);
    $(".tabswitch").css("width",tabswitchW);
    //自己写的拖动。。。。擦
    var translateOld=0;
    touch.on(".tabswitch","touchstart",function(ev){
        $(".tabswitch").find(".red").removeClass("red");
        if(ev.target.tagName=="P"){
            $(this).addClass("red");
        }else if(ev.target.tagName=="UL"){

        }else{
            $(this).find("p").addClass("red");
        }
        /*document.title=-1*$(".red").parent().offset().left+translateOld;
        var setx=-1*($(".red").offset().left-parseInt($(".tabswitch_box").css("width"))/2+(translateOld));
        setTranslatex(".tabswitch",setx);
        translateOld=setx;*/
        var startx=ev.touches[0].pageX;
        var endx=0;
        var changex=0;
        touch.on(".tabswitch","touchmove",function(e){
            var max=-1*(parseInt($(".tabswitch").css("width"))-parseInt($(".tabswitch_box").css("width")));
            endx=e.changedTouches[0].pageX;
            changex=translateOld+(endx-startx);
            changex=changex>0?0:changex;
            changex=changex<max?max:changex;
            setTranslatex(".tabswitch",changex)
        });
        touch.on(".tabswitch","touchend",function(e){
            translateOld=changex;
        });
    });
    function setTranslatex(obj,value){
        $(obj).css({
                "-webkit-transform": "translateX("+value+"px)",
                   "-moz-transform": "translateX("+value+"px)",
                    "-ms-transform": "translateX("+value+"px)",
                     "-o-transform": "translateX("+value+"px)",
                        "transform": "translateX("+value+"px)",
            })
    }
    /*var GetTime=function(){
        //这里是对象GetTime的属性
        this.d=new Date();
    }
    //这里是对象GetTime的方法
    GetTime.prototype.showTime=function(){
        alert(this.d);
    }
    //在这里实例化一个GetTime对象
    var data=new GetTime();
    data.showTime();*/
});