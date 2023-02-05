import "../common/reset.css";
import "../common/header";
import "../common/footer";
import "./index.less";
import "@/assets/global.less";
import Swiper from "swiper";
const threeSwiper = new Swiper(".three-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // autoHeight:true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".three-swiper .swiper-pagination",
    clickable: true,
  },
  loop: true,
});

const teamTextSwiper = new Swiper(".text-main-container", {
  pagination: {
    el: ".swiper-pagination.swiper-text-pagination",
    clickable: true,
  },
  noSwiping: true,
});
const teamPhotoSwiper = new Swiper(".photo-container", {
  pagination: {
    el: ".swiper-pagination.swiper-text-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: teamTextSwiper,
  },
  noSwiping: true,
});


const consultingSwiper = new Swiper(".consulting-swiper", {
  loop: true,
  pagination: {
    el: ".consulting-swiper .swiper-pagination",
    clickable: true,
  },
});
const teamSwiper = new Swiper(".team-swiper", {
  loop: true,
  pagination: {
    el: ".team-swiper .swiper-pagination",
    clickable: true,
  },
});
const financingSwiper = new Swiper(".financing-swiper", {
  loop: true,
  pagination: {
    el: ".financing-swiper .swiper-pagination",
    clickable: true,
  },
});
$(".pagination-item").on("click", function () {
  const index = $(this).index();
});

const vm = new Vue({
  el: "#app",
  data() {
    return {
      history: window.financing,
      activeIndex: 0,
      itemWidth: 0,
      left: 0,
      show: true,
      financingSwiper: null,
    };
  },
  created() {},
  mounted() {
    const that = this;
    this.itemWidth = $(this.$refs.dateItem).width();
    console.log(this.activeIndex);
    this.left = -(this.activeIndex - 1) * this.itemWidth;
    this.financingSwiper = new Swiper(".financing-swiper", {
      loop:true,
      noSwiping: true,
    });
  },
  watch: {
    activeIndex() {
      this.left = -(this.activeIndex - 1) * this.itemWidth;
      this.financingSwiper.slideToLoop(this.activeIndex, 1000, false);
    },
  },
  methods: {
    changeIndex(index) {
      if (index === "-") {
        if (this.activeIndex <= 0) {
          return;
        } else {
          this.activeIndex = this.activeIndex - 1;
        }
      } else if (index === "+") {
        if (this.activeIndex >= this.history.length - 1) {
          return;
        } else {
          this.activeIndex = this.activeIndex + 1;
        }
      } else {
        this.activeIndex = index;
      }

    },
  },
});
