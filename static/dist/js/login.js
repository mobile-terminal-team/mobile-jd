$(function () {
    document.documentElement.style.fontSize= document.documentElement.clientWidth/6.4;
    var oUserName=document.getElementsByClassName("userName")[0];
    var oPassword=document.getElementsByClassName("password")[0];
    var oCode=document.getElementsByClassName("code")[0];

    var oLogin=document.getElementsByClassName("login")[0];
    getCode();
    oLogin.onclick = function () {



    }
    oGetCode.onclick = function () {
        getCode();
    }
})
var oGetCode=document.getElementsByClassName("getCode")[0];
function getCode() {
    var alphabet = "";
    for(var i = 0; i < 4;i++ ){
        var num = Math.floor(Math.random()*25);
        var star = Math.floor(Math.random()*2);
        if(star == 0){
            alphabet += String.fromCharCode(65 + parseInt(num));
        }else {
            alphabet += String.fromCharCode(97 + parseInt(num));
        }
    }
    oGetCode.innerHTML = alphabet;
}