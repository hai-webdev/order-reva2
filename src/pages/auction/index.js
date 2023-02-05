import "../common/reset.css";
import "../common/header";
import "../common/footer";
import "./index.less";
import "@/assets/global.less";

$(".auction-show").on("click", function(){
    $(".auction-list").slideToggle()
})