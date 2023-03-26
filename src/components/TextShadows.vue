<template>
  <div class="text-shadows">
    <h2 class="content">{{ label }}</h2>
  </div>
</template>

<script>
export default {
  name: "TextShadows",
  props: {
    label: String,
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Titan+One");

$color-primary: #f6aca2;
$color-secondary: #f49b90;
$color-tertiary: #f28b7d;
$color-quaternary: #f07a6a;
$color-quinary: #ee6352;

.text-shadows {
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 1.25rem;

  .content {
    text-shadow: 3px 3px 0 $color-secondary, 6px 6px 0 $color-tertiary,
      9px 9px $color-quaternary, 12px 12px 0 $color-quinary;
    font-family: "Titan One", sans-serif;
    font-weight: 400;
    /* text-transform: uppercase; */
    font-size: calc(2rem + 5vw);
    text-align: center;
    margin: 0;
    color: $color-primary;
    animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
    letter-spacing: 0.4rem;
  }
}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 $color-secondary;
  }
  20% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary;
  }
  30% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary;
  }
  40% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary,
      12px 12px 0 $color-quinary;
  }
  50% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary,
      12px 12px 0 $color-quinary;
  }
  60% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary,
      12px 12px 0 $color-quinary;
  }
  70% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary;
  }
  80% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary;
  }
  90% {
    text-shadow: 3px 3px 0 $color-secondary;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
