function getTime(){var e=new Date,t=e.getHours(),o=e.getMinutes(),n=e.getSeconds(),m=2*Math.ceil(t/2+1/3600);24==m&&(m=0),floor($time,m);var s=3600*t+60*o+n;s=3600*m-s,t=Math.floor(s/3600),o=Math.floor((s-3600*t)/60),n=Math.floor(s-3600*t-60*o),floor($hours,t),floor($minute,o),floor($second,n)}function floor(e,t){t<10?e.innerHTML="0"+t:e.innerHTML=t}$(function(){getTime(),setInterval(function(){getTime()},1e3),touch.on($top,"tap",function(e){$("body,html").animate({scrollTop:0},300)})});var $time=document.getElementsByClassName("time")[0],$hours=document.getElementsByClassName("hours")[0],$minute=document.getElementsByClassName("minute")[0],$second=document.getElementsByClassName("second")[0],$top=document.getElementsByClassName("top")[0];