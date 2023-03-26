<template>
  <div class="coverflow">
    <svg>
      <filter id="noise">
        <feTurbulence baseFrequency="0.01 0.003" type="turbulence">
          <animate 
            attributeName="baseFrequency" 
            calcMode="linear"
            values="0.001 0.005;0.001 0.001;0.03 0.09" 
            begin="0s"
            dur="2.5s" 
            repeatCount="indefinite" 
            />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="5">
      </feDisplacementMap></filter>
    </svg>
    <swiper class="swiper" v-bind="options">
      <swiper-slide class="slide" v-for="(image, index) in images" :key="index">
        <img
          :class="`hvr-grow swiper-lazy ${image.isRotate ? 'rotate-' + (image.rotate > 0 ? image.rotate : 'minus' + image.rotate) : ''}`"
          :src="require(`@/assets/u/${image.src}/${image.path}`)"
        />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination, Navigation, EffectCoverflow, Autoplay, Keyboard, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import 'swiper/css/lazy';
import { CONST } from "@/constants/constants";

export default {
  name: "ImagesSlider",
  props: {
    timelineKey: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectCoverflow, Autoplay, Keyboard, Lazy],
    };
  },
  data() {
    return {
      options: {
        modules: this.modules,
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: true,
        pagination: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: CONST.delay,
          disableOnInteraction: false,
        },
        keyboard: { enabled: true },
        lazy: true,
      },
      sourceImages: [],
    };
  },
  computed: {
    images() {
      return this.sourceImages[this.timelineKey];
    }
  },
  created() {
    const source202302 = require.context("@/assets/u/202302/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202301 = require.context("@/assets/u/202301/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202212 = require.context("@/assets/u/202212/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202211 = require.context("@/assets/u/202211/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202210 = require.context("@/assets/u/202210/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202209 = require.context("@/assets/u/202209/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202208 = require.context("@/assets/u/202208/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202207 = require.context("@/assets/u/202207/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202206 = require.context("@/assets/u/202206/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);
    const source202205 = require.context("@/assets/u/202205/", true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/);

    this.sourceImages = {
      '202302': this.importImages('202302', source202302),
      '202301': this.importImages('202301', source202301),
      '202212': this.importImages('202212', source202212),
      '202211': this.importImages('202211', source202211),
      '202210': this.importImages('202210', source202210),
      '202209': this.importImages('202209', source202209),
      '202208': this.importImages('202208', source202208),
      '202207': this.importImages('202207', source202207),
      '202206': this.importImages('202206', source202206),
      '202205': this.importImages('202205', source202205),
    }
  },
  methods: {
    importImages(src, data) {
      let images = [];
      const rotateImages = CONST.rotateImages;

      data.keys().forEach((key) => {
        const name = key.split('/').at(-1);
        images.push({
          src: src,
          title: name,
          path: key.replace("./", ""),
          isRotate: Object.keys(rotateImages).includes(name),
          rotate: undefined !== rotateImages[name] ? rotateImages[name].rotate : 0,
        })
      });

      return images;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/variables";

.coverflow {
  position: relative;
  width: 57vw;
  height: 300px;

  svg {
    display: none;
  }

  .swiper {
    height: 100%;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .slide {
      width: 300px;
      height: 300px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }

      .rotate-minus-90 {
        transform: rotate(-90deg);
      }
      .rotate-90 {
        transform: rotate(90deg);
      }
      .rotate-180 {
        transform: rotate(180deg);
      }
    }

    .swiper-wrapper {
      .swiper-slide {
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;

        &-active {
          img {
            filter: url('#noise');
            /* &:hover {
              filter: none;
            } */
          }
        }

        &-shadow-left,
        &-shadow-right {
          border-radius: 20px;
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: $orange;

      &:hover {
        color: $yellow;
      }
    }
    .swiper-pagination {
      .swiper-pagination-bullet {
        background: $white;

        &-active {
          background: $orange;
        }
      }
    }
  }
}
</style>
