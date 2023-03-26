<template>
  <div class="box-gift">
    <div class="presents"></div>
  </div>
</template>

<script>
export default {
  name: "BoxGift",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Chango&display=swap");

.box-gift {
  .presents {
    filter: drop-shadow(0 0 2em rgba(0, 0, 0, 0.3));
    background:
		/* blue + red shared broder */ linear-gradient(#4d4d4d, #4d4d4d)
        left 19.4em bottom 6.3em / 0.3em 9.3em,
      /* right red box -- borders */ linear-gradient(#4d4d4d, #4d4d4d) right
        14.2em bottom 6.3em / 0.3em 11em,
      linear-gradient(#4d4d4d, #4d4d4d) right 12.6em bottom 6.3em / 0.3em 11em,
      linear-gradient(#4d4d4d, #4d4d4d) right 21.3em bottom 15.3em / 0.3em 2em,
      linear-gradient(#4d4d4d, #4d4d4d) right 5.3em bottom 15.3em / 0.3em 2em,
      linear-gradient(#4d4d4d, #4d4d4d) right 5.3em bottom 17.3em / 16.3em 0.3em,
      linear-gradient(#4d4d4d, #4d4d4d) right 6.1em bottom 6.3em / 0.3em 9.3em,
      /* right red box -- ribbon top */
        radial-gradient(
          ellipse 50% 50% at 50% 80%,
          #e67d8b calc(100% - 0.4em),
          #4d4d4d calc(100% - 0.6em),
          #4d4d4d calc(100% - 0.1em),
          transparent 100%
        )
        right 11.9em bottom 17.5em / 3em 2em,
      conic-gradient(from 125deg, #e67d8b 50%, transparent 50%) right 13.9em
        bottom 17.5em / 3em 3em,
      conic-gradient(from 55deg, #e67d8b 50%, transparent 50%) right 9.9em
        bottom 17.5em / 3em 3em,
      conic-gradient(from 125deg, #4d4d4d 50%, transparent 50%) right 13.4em
        bottom 17.5em / 3.8em 3.8em,
      conic-gradient(from 55deg, #4d4d4d 50%, transparent 50%) right 9.5em
        bottom 17.5em / 3.8em 3.8em,
      /* right red box -- ribbon */ linear-gradient(#e67d8b, #e67d8b) right
        12.6em bottom 6.3em / 1.8em 11em,
      linear-gradient(#4d4d4d, #4d4d4d) right 5.3em bottom 15.3em / 16.3em 0.3em,
      /* border under ribbon */ /* right red box -- top part */
        linear-gradient(#dd5d6c, #dd5d6c) right 5.5em bottom 15.5em / 16em 2em,
      /* right red box -- right circles */
        radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right
        7.5em bottom 11.125em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 7.5em
        bottom 8.375em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 9.5em
        bottom 12.5em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 9.5em
        bottom 9.75em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 9.5em
        bottom 7em / 2em 2em,
      /* right red box -- left circles */
        radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right
        17.5em bottom 11.125em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 17.5em
        bottom 8.375em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 15.5em
        bottom 12.5em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 15.5em
        bottom 9.75em / 2em 2em,
      radial-gradient(circle 0.7em, #eb9ea8 100%, transparent 100%) right 15.5em
        bottom 7em / 2em 2em,
      /* right red box -- bottom part */ linear-gradient(#dd5d6c, #dd5d6c) right
        6.4em bottom 6.3em / 14em 10em,
      /* left blue box -- borders */ linear-gradient(#4d4d4d, #4d4d4d) left
        15.3em bottom 6.3em / 0.3em 7em,
      linear-gradient(#4d4d4d, #4d4d4d) left 11.4em bottom 6.3em / 0.3em 7em,
      linear-gradient(#4d4d4d, #4d4d4d) left 6.6em bottom 6.3em / 0.3em 5em,
      linear-gradient(#4d4d4d, #4d4d4d) left 5.6em bottom 11.3em / 0.3em 2.3em,
      linear-gradient(#4d4d4d, #4d4d4d) left 5.6em bottom 13.3em / 14em 0.3em,
      /* left blue box -- ribbon top */
        radial-gradient(
          ellipse 50% 50% at 50% 80%,
          #96adbf calc(100% - 0.4em),
          #4d4d4d calc(100% - 0.6em),
          #4d4d4d calc(100% - 0.1em),
          transparent 100%
        )
        left 11.9em bottom 13.5em / 3em 2em,
      conic-gradient(from 125deg, #96adbf 50%, transparent 50%) left 9.9em
        bottom 13.5em / 3em 3em,
      conic-gradient(from 55deg, #96adbf 50%, transparent 50%) left 13.9em
        bottom 13.5em / 3em 3em,
      conic-gradient(from 125deg, #4d4d4d 50%, transparent 50%) left 9.5em
        bottom 13.5em / 3.8em 3.8em,
      conic-gradient(from 55deg, #4d4d4d 50%, transparent 50%) left 13.4em
        bottom 13.5em / 3.8em 3.8em,
      /* left blue box -- ribbon */ linear-gradient(#96adbf, #96adbf) left
        11.4em bottom 6.3em / 4em 7em,
      linear-gradient(#4d4d4d, #4d4d4d) left 5.6em bottom 11.3em / 14em 0.3em,
      /* border under ribbon */ /* left blue box -- top part */
        linear-gradient(#d5dee5, #d5dee5) left 6em bottom 11.6em / 13.4em 2em,
      /* left blue box -- bottom part */
        linear-gradient(
          135deg,
          #d5dee5 2em,
          #96adbf 2em,
          #96adbf 4em,
          #d5dee5 4em,
          #d5dee5 6em,
          #96adbf 6em,
          #96adbf 8em,
          #d5dee5 8em,
          #d5dee5 10em,
          #96adbf 10em,
          #96adbf 12em,
          #d5dee5 12em,
          #d5dee5 14em
        )
        left 6.8em bottom 6.3em / 12.6em 5em,
      /* orange box -- borders */ linear-gradient(#4d4d4d, #4d4d4d) left 23em
        bottom 10em / 0.3em 13em,
      linear-gradient(#4d4d4d, #4d4d4d) left 18.7em bottom 10em / 0.3em 13em,
      linear-gradient(#4d4d4d, #4d4d4d) left 30.3em bottom 20em / 0.3em 3.3em,
      linear-gradient(#4d4d4d, #4d4d4d) left 10.7em bottom 20em / 0.3em 3.3em,
      linear-gradient(#4d4d4d, #4d4d4d) left 11em bottom 23em / 19.6em 0.3em,
      linear-gradient(#4d4d4d, #4d4d4d) left 28.5em bottom 10em / 0.3em 10em,
      linear-gradient(#4d4d4d, #4d4d4d) left 13em bottom 10em / 0.3em 10em,
      /* orange box -- ribbon top */
        radial-gradient(
          ellipse 50% 50% at 50% 80%,
          #ebb390 calc(100% - 0.4em),
          #4d4d4d calc(100% - 0.6em),
          #4d4d4d calc(100% - 0.1em),
          transparent 100%
        )
        left 19.5em bottom 23.3em / 3em 2em,
      conic-gradient(from 125deg, #ebb390 50%, transparent 50%) left 17.5em
        bottom 23.3em / 3em 3em,
      conic-gradient(from 55deg, #ebb390 50%, transparent 50%) left 21.5em
        bottom 23.3em / 3em 3em,
      conic-gradient(from 125deg, #4d4d4d 50%, transparent 50%) left 17.1em
        bottom 23.3em / 3.8em 3.8em,
      conic-gradient(from 55deg, #4d4d4d 50%, transparent 50%) left 21.1em
        bottom 23.3em / 3.8em 3.8em,
      /* orange box -- ribbon */ linear-gradient(#ebb390, #ebb390) left 19em
        bottom 10em / 4em 13em,
      linear-gradient(#4d4d4d, #4d4d4d) left 11em bottom 20em / 19.6em 0.3em,
      /* broder under ribbon */ /* orange box -- top part */
        linear-gradient(#de7861, #de7861) left 11em bottom calc(50% + 1.5em) /
        19.5em 3em,
      /* orange box -- bottom part */ linear-gradient(#de7861, #de7861) left
        13em bottom calc(50% - 5em) / 15.5em 10em,
      /* bottom line */ linear-gradient(#4d4d4d, #4d4d4d) left 50% bottom 6em /
        80% 0.3em;

    background-repeat: no-repeat;
    font-size: 2vmin;
    height: 40em;
    width: 40em;
    position: relative;

    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      content: 'one year';
      color: #ffcf01;
      font-family: Chango;
      font-size: 2.5em;
      position: absolute;
      left: 27.5%;
      top: 31.9%;
      -webkit-text-stroke-width: 0.05em;
      -webkit-text-stroke-color: #4d4d4d;
    }
  }
}
</style>
