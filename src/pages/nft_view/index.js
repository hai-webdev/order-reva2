import "../common/reset.css";
import "../common/header";
import "../common/footer";
import "./index.less";
import "@/assets/global.less";
$(".nav-item").on("click", function(){
    $(this).addClass("on").siblings().removeClass("on");
    const index = $(this).index();
    $(".point-item").eq(index).addClass("on").siblings().removeClass("on");
})