// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";
import "wowjs/css/libs/animate.css";
import {WOW} from "wowjs";

new WOW().init();
$(".menu").on("click", function(){
    $(".nav-container").toggleClass("on");
    $(this).toggleClass("on");
    $(".nav-list").toggleClass("on");
    $(".nav-mask").fadeToggle(600);
})