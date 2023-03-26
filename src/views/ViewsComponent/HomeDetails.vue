<template>
  <div class="details">
    <div class="details__data">
      <time-line @change-timeline="changeTimeline" />
      <div
        class="moments"
        v-if="undefined !== timelineKey"
      >
        <text-shadows class="wow animate__bounce" data-wow-duration="1s" :label="timelineTitle" />
        <images-slider class="wow animate__bounce" data-wow-duration="2s" :timeline-key="timelineKey" />
      </div>
      <div class="moments" style="justify-content: center" v-else>
        <p
          class="moments__text-shadow wow animate__backInDown"
          data-wow-duration="1s"
        >
          Let's look back our moments
        </p>
      </div>
    </div>
    <div class="details__background">
      <fire-works-action />
    </div>
    <div class="details__buttons">
      <button
        class="btn hvr-icon-back hvr-sweep-to-left hvr-grow wow animate__zoomIn"
        data-wow-duration="0.5s"
        @click="changeToDetails('poster')"
      >
        <ion-icon name="arrow-back-outline" class="hvr-icon"></ion-icon>
        Prev
      </button>
      <button
        class="btn hvr-icon-forward hvr-sweep-to-right hvr-grow wow animate__zoomIn"
        data-wow-duration="0.7s"
        @click="changeToDetails('end')"
      >
        Next
        <ion-icon name="arrow-forward-outline" class="hvr-icon"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
import ImagesSlider from "@/components/ImagesSlider.vue";
import FireWorksAction from "@/components/FireWorksAction.vue";
import TimeLine from "@/components/TimeLine.vue";
import TextShadows from "@/components/TextShadows.vue";
import { homeMixin } from "@/mixins/home-mixin";

export default {
  name: "HomeDetails",
  mixins: [
    homeMixin
  ],
  components: {
    ImagesSlider,
    FireWorksAction,
    TimeLine,
    TextShadows,
  },
  data() {
    return {
      timelineKey: undefined,
      timelineTitle: 'PE225',
    };
  },
  computed: {
  },
  mounted() {},
  watch: {
    timelineKey(newVal) {
      if (undefined !== newVal) {
        this.timelineTitle = this.findTimeline(newVal).value;
      }
    },
  },
  methods: {
    changeTimeline(key) {
      this.timelineKey = key;
    },
    findTimeline(key) {
      return this.timelines.find((tl) => tl.key === key);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Titan+One");
@import "@/scss/variables.scss";
@import "@/scss/extends/display.scss";

.details {
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  user-select: none;

  &__data {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 2rem;
    gap: 2vw;

    > div {
      &:first-child {
        flex-basis: 40%;
      }
      &:last-child {
        flex-basis: 60%;
      }
    }

    .moments {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: $details-height;
      gap: 5vh;

      &__text-shadow {
        margin-top: 40px;
        font-family: "Titan One", sans-serif;
        font-size: 70px;
        font-weight: bold;
        @extend %effect-text-shadow;
      }

      .text-shadows {
        position: relative;
        top: 10%;
      }

      .coverflow {
        top: 50%;
        transform: translateY(-100%);
      }
    }
  }
  &__background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &__buttons {
    @extend %buttons;
  }
}
</style>
