<template>
  <div class="end">
    <div class="end__element">
      <type-writer :dataTexts="wishes" />
    </div>
    <div class="end__element">
      <card-birthday 
        class="wow animate__rotateIn poiter-none" 
        :data-wow-duration="`${duration}s`" 
        ref="cardBirthday"
      />
    </div>
    <div class="end__buttons">
      <button
        class="btn hvr-icon-back hvr-sweep-to-left hvr-grow wow animate__rotateIn"
        data-wow-duration="1s"
        @click="changeToDetails('details')"
      >
        <ion-icon name="arrow-back-outline" class="hvr-icon"></ion-icon>
        Back
      </button>
    </div>
  </div>
</template>

<script>
import TypeWriter from "@/components/TypeWriter.vue";
import CardBirthday from "@/components/CardBirthday.vue";
import { homeMixin } from "@/mixins/home-mixin";

export default {
  name: "HomeEnd",
  mixins: [
    homeMixin
  ],
  components: {
    TypeWriter,
    CardBirthday,
  },
  data() {
    return {
      duration: 45,
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs.cardBirthday.$el.classList.remove('poiter-none');
    }, this.duration * 1000);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/extends/display.scss";

.end {
  display: flex;
  width: 100vw;
  height: 100vh;

  &__element {
    display: flex;
    justify-content: center;
    align-items: center;

    .type-writer {
      width: 100%;
      text-align: left;
      word-break: break-word;
    }

    .text {
      width: 100%;
      display: flex;

      .text-typing {
        width: initial;

        :deep {
          h1 {
            margin: 0.5em 0;
          }
        }
      }
    }
  }
  &__buttons {
    @extend %buttons;
    bottom: 4vh;
    right: 3vw;

    .btn {
      width: 150px;
      height: 50px;
    }
  }

  > div {
    &:nth-child(1) {
      flex-basis: 40%;
      flex-direction: column;
      position: relative;
      left: 50%;
      transform: translateX(-100%);
    }
    &:nth-child(2) {
      flex-basis: 60%;
    }
  }

  .poiter-none {
    pointer-events: none;
  }
}
</style>
